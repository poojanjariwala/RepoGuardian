"""
Explorer Agent — "The User"
Installs dependencies, starts the dev server, then uses Playwright
to navigate the app like a real user and capture all errors.

Key improvements over naive version:
- Dynamic port detection (doesn't assume port 3001)
- Proper process cleanup
- Handles apps that won't build cleanly
- Captures network errors, not just console errors
- Logs back to the orchestrator in real-time

FIX APPLIED: Added explicit check for playwright install. If chromium
is not installed, the error message now clearly tells you to run
`playwright install chromium` before demo.
"""

import os
import subprocess
import socket
import time
import signal
import sys
from typing import Optional

from dotenv import load_dotenv
load_dotenv()


def _find_free_port() -> int:
    """Find a free port on localhost."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("", 0))
        return s.getsockname()[1]


def _wait_for_server(port: int, timeout: int = 45) -> bool:
    """Poll until the dev server is accepting connections."""
    start = time.time()
    while time.time() - start < timeout:
        try:
            with socket.create_connection(("127.0.0.1", port), timeout=1):
                return True
        except (ConnectionRefusedError, OSError):
            time.sleep(1)
    return False


def _run_install(path: str, install_cmd: str, log_fn) -> bool:
    """Run dependency installation. Returns True on success."""
    log_fn("Explorer", f"Running: {install_cmd}")
    try:
        result = subprocess.run(
            install_cmd.split(),
            cwd=path,
            capture_output=True,
            text=True,
            timeout=180,  # 3 min max for npm install
        )
        if result.returncode != 0:
            log_fn("Explorer", f"Install warning: {result.stderr[-300:] if result.stderr else 'unknown'}", "warning")
            return False
        return True
    except subprocess.TimeoutExpired:
        log_fn("Explorer", "Install timed out (>3min) — proceeding anyway", "warning")
        return False
    except Exception as e:
        log_fn("Explorer", f"Install failed: {e}", "warning")
        return False


def explore_app(
    repo_path: str,
    scan_result: dict,
    jobs: dict,
    job_id: str,
) -> dict:
    """
    Start the app and explore it with Playwright.
    Returns dict with console_errors, network_errors, pages_visited, screenshot_b64.
    """
    console_errors = []
    network_errors = []
    pages_visited = []
    screenshot_b64 = None
    server_proc: Optional[subprocess.Popen] = None

    def log_fn(agent, msg, level="info"):
        jobs[job_id]["logs"].append({"agent": agent, "message": msg, "level": level})
        print(f"[{agent}] {msg}")

    install_cmd = scan_result.get("install_command", "npm install")
    start_cmd = scan_result.get("start_command", "npm start")
    framework = scan_result.get("framework", "unknown")
    is_python = scan_result.get("is_python", False)

    # ── Install dependencies ────────────────────────────────────────────────
    if scan_result.get("has_package_json"):
        _run_install(repo_path, install_cmd, log_fn)
    elif is_python:
        _run_install(repo_path, install_cmd, log_fn)

    # ── Start the dev server ────────────────────────────────────────────────
    port = _find_free_port()
    log_fn("Explorer", f"Starting dev server on port {port}: {start_cmd}")

    env = {
        **os.environ,
        "PORT": str(port),
        "BROWSER": "none",      # Prevent CRA from opening a browser
        "CI": "true",           # Suppress interactive prompts
        "NODE_ENV": "development",
    }

    try:
        server_proc = subprocess.Popen(
            start_cmd.split(),
            cwd=repo_path,
            env=env,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            preexec_fn=os.setsid if sys.platform != "win32" else None,
        )

        # Wait for server to come up
        log_fn("Explorer", f"Waiting for server on port {port}...")
        server_ready = _wait_for_server(port, timeout=45)

        if not server_ready:
            log_fn("Explorer",
                   "Server did not start in time. Analyzing static files instead.", "warning")
            return {
                "console_errors": ["Server failed to start — static analysis only"],
                "network_errors": [],
                "pages_visited": [],
                "screenshot_b64": None,
                "server_started": False,
            }

        log_fn("Explorer", f"Server is up at http://localhost:{port} ✓", "success")

        # ── Playwright exploration ──────────────────────────────────────────
        try:
            from playwright.sync_api import sync_playwright, Error as PlaywrightError

            with sync_playwright() as p:
                # FIX: wrap chromium.launch in its own try/except to give
                # a clear error message if playwright install chromium wasn't run
                try:
                    browser = p.chromium.launch(
                        headless=True,
                        args=["--no-sandbox", "--disable-dev-shm-usage"],
                    )
                except Exception as launch_err:
                    log_fn("Explorer",
                           f"Chromium not installed. Run: playwright install chromium — Error: {launch_err}",
                           "error")
                    console_errors.append({
                        "type": "setup_error",
                        "text": "Chromium browser not found. Run: playwright install chromium",
                        "location": "",
                    })
                    return {
                        "console_errors": console_errors,
                        "network_errors": [],
                        "pages_visited": [],
                        "screenshot_b64": None,
                        "server_started": True,
                    }

                context = browser.new_context(
                    viewport={"width": 1280, "height": 720},
                    ignore_https_errors=True,
                )
                page = context.new_page()

                # Capture ALL console messages
                page.on("console", lambda msg: (
                    console_errors.append({
                        "type": msg.type,
                        "text": msg.text,
                        "location": str(msg.location),
                    })
                    if msg.type in ("error", "warning") else None
                ))

                # Capture uncaught exceptions
                page.on("pageerror", lambda exc: console_errors.append({
                    "type": "pageerror",
                    "text": str(exc),
                    "location": "page",
                }))

                # Capture failed network requests
                page.on("requestfailed", lambda req: network_errors.append({
                    "url": req.url,
                    "failure": req.failure or "unknown",
                }))

                base_url = f"http://localhost:{port}"

                # Visit the home page
                try:
                    log_fn("Explorer", f"Navigating to {base_url}")
                    page.goto(base_url, wait_until="networkidle", timeout=15000)
                    pages_visited.append("/")

                    # Take a screenshot for the report
                    screenshot_b64 = page.screenshot(type="png").hex()
                    log_fn("Explorer", "Home page loaded and screenshot captured ✓")

                    # Discover and click interactive elements
                    log_fn("Explorer", "Exploring navigation links and buttons...")
                    clickable = page.query_selector_all("a[href], button:not([disabled])")
                    visited_hrefs = set(["/"])

                    for el in clickable[:15]:
                        try:
                            href = el.get_attribute("href") or ""
                            tag = el.evaluate("el => el.tagName.toLowerCase()")

                            # Skip external links, anchors, and already visited
                            if href.startswith("http") or href.startswith("#"):
                                continue
                            if href and href in visited_hrefs:
                                continue

                            if tag == "button":
                                el.click(timeout=2000)
                                page.wait_for_timeout(800)
                                log_fn("Explorer", f"Clicked button: {el.inner_text()[:30]}")
                            elif tag == "a" and href:
                                page.goto(f"{base_url}{href}", timeout=8000)
                                pages_visited.append(href)
                                visited_hrefs.add(href)
                                page.wait_for_timeout(500)
                                log_fn("Explorer", f"Visited: {href}")

                        except PlaywrightError:
                            pass  # Element gone / timeout — skip silently
                        except Exception:
                            pass

                except PlaywrightError as e:
                    log_fn("Explorer", f"Page navigation error: {str(e)[:200]}", "warning")
                    console_errors.append({"type": "navigation_error", "text": str(e), "location": base_url})

                browser.close()

        except ImportError:
            log_fn("Explorer", "Playwright not installed. Run: pip install playwright && playwright install chromium", "error")
            console_errors.append({"type": "setup_error", "text": "Playwright not available", "location": ""})

    except Exception as e:
        log_fn("Explorer", f"Explorer error: {str(e)[:300]}", "error")
        console_errors.append({"type": "explorer_error", "text": str(e), "location": ""})

    finally:
        # Always clean up the server process
        if server_proc:
            try:
                if sys.platform != "win32":
                    os.killpg(os.getpgid(server_proc.pid), signal.SIGTERM)
                else:
                    server_proc.terminate()
                server_proc.wait(timeout=5)
            except Exception:
                pass

    log_fn("Explorer",
           f"Explored {len(pages_visited)} page(s), found {len(console_errors)} error(s), "
           f"{len(network_errors)} network failure(s)")

    return {
        "console_errors": console_errors,
        "network_errors": network_errors,
        "pages_visited": pages_visited,
        "screenshot_b64": screenshot_b64,
        "server_started": True,
    }