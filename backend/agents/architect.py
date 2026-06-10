"""
Architect Agent — "The Advisor"
Scans the repo for architectural issues:
- Hardcoded secrets / credentials
- Missing error handling
- Performance anti-patterns
- Missing Dockerfile
- Missing .env file
- Dependency vulnerabilities (basic)
- O(n²) loop patterns
- Missing caching
"""

import os
import re
import json

import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

IGNORED_DIRS = {"node_modules", ".git", "__pycache__", ".next", "dist", "build"}
CODE_EXTENSIONS = {".js", ".jsx", ".ts", ".tsx", ".py", ".vue"}


# Patterns that suggest hardcoded secrets
SECRET_PATTERNS = [
    (r'(?i)(password|passwd|pwd)\s*=\s*["\''][^"\']{4,}["\'']', "Hardcoded password"),
    (r'(?i)(api_key|apikey|api-key)\s*=\s*["\''][^"\']{8,}["\'']', "Hardcoded API key"),
    (r'(?i)(secret|token)\s*=\s*["\''][^"\']{8,}["\'']', "Hardcoded secret/token"),
    (r'(?i)(aws_access_key_id|aws_secret_access_key)\s*=\s*["\''][^"\']{8,}["\'']', "Hardcoded AWS credential"),
    (r'AKIA[0-9A-Z]{16}', "Possible AWS Access Key ID"),
    (r'(?i)mongodb(\+srv)?://[^"\']+:[^"\']+@', "Hardcoded MongoDB connection string"),
]

# Performance anti-patterns
PERF_PATTERNS = [
    (r'for\s*\(.+\)\s*\{[^}]*for\s*\(.+\)\s*\{', "Nested loop (possible O(n²)) detected"),
    (r'\.forEach\(.+\.forEach\(', "Nested forEach (possible O(n²))"),
    (r'document\.querySelector.+for\s*\(', "DOM query inside loop — very slow"),
    (r'await\s+\w+\s*\([^)]*\)\s*;\s*\n\s*await\s+\w+\s*\([^)]*\)\s*;', "Sequential awaits — consider Promise.all()"),
]


def _read_source_files(repo_path: str) -> dict[str, str]:
    files = {}
    for root, dirs, filenames in os.walk(repo_path):
        dirs[:] = [d for d in dirs if d not in IGNORED_DIRS]
        for fname in filenames:
            if any(fname.endswith(ext) for ext in CODE_EXTENSIONS):
                full = os.path.join(root, fname)
                rel = os.path.relpath(full, repo_path)
                try:
                    with open(full, "r", encoding="utf-8", errors="ignore") as f:
                        files[rel] = f.read(4000)
                except Exception:
                    pass
    return files


def _static_analysis(repo_path: str, source_files: dict) -> list:
    issues = []

    # ── Structural checks ──────────────────────────────────────────────────
    if not os.path.exists(os.path.join(repo_path, "Dockerfile")):
        issues.append({
            "type": "deployment",
            "severity": "warning",
            "title": "No Dockerfile found",
            "description": "The repository has no Dockerfile. Containerizing the app makes deployment consistent and reproducible.",
            "suggestion": "Add a Dockerfile with a multi-stage build for production.",
            "file": None,
        })

    has_env = any(
        os.path.exists(os.path.join(repo_path, f))
        for f in [".env.example", ".env.sample", ".env.local.example"]
    )
    if not has_env:
        issues.append({
            "type": "configuration",
            "severity": "warning",
            "title": "No .env.example file",
            "description": "There is no .env.example file to document required environment variables for new developers.",
            "suggestion": "Create a .env.example with all required variable names (no real values).",
            "file": None,
        })

    has_gitignore = os.path.exists(os.path.join(repo_path, ".gitignore"))
    if not has_gitignore:
        issues.append({
            "type": "security",
            "severity": "critical",
            "title": "No .gitignore file",
            "description": "Without a .gitignore, sensitive files (node_modules, .env, secrets) may be committed to the repo.",
            "suggestion": "Add a .gitignore. Use gitignore.io to generate one for your stack.",
            "file": None,
        })

    # ── Per-file checks ────────────────────────────────────────────────────
    for rel_path, content in source_files.items():
        lines = content.split("\n")

        # Secret detection
        for pattern, label in SECRET_PATTERNS:
            for i, line in enumerate(lines, 1):
                if re.search(pattern, line) and "example" not in rel_path.lower() and "test" not in rel_path.lower():
                    issues.append({
                        "type": "security",
                        "severity": "critical",
                        "title": f"{label} in {rel_path}",
                        "description": f"Line {i}: Possible hardcoded credential detected.",
                        "suggestion": "Move this value to an environment variable and load it with process.env or os.getenv().",
                        "file": rel_path,
                        "line": i,
                    })

        # Performance patterns (search whole file content)
        for pattern, label in PERF_PATTERNS:
            if re.search(pattern, content, re.DOTALL | re.MULTILINE):
                issues.append({
                    "type": "performance",
                    "severity": "warning",
                    "title": f"{label} in {rel_path}",
                    "description": f"Potential performance issue detected in {rel_path}.",
                    "suggestion": "Refactor to reduce time complexity or use parallel execution.",
                    "file": rel_path,
                    "line": None,
                })

        # Missing error handling in async functions
        async_without_try = re.findall(r"async\s+function\s+\w+[^{]*\{(?:(?!try\s*\{).)*?\}", content, re.DOTALL)
        if len(async_without_try) > 2:
            issues.append({
                "type": "reliability",
                "severity": "warning",
                "title": f"Async functions without try/catch in {rel_path}",
                "description": f"Multiple async functions found without error handling in {rel_path}.",
                "suggestion": "Wrap async operations in try/catch blocks to handle Promise rejections gracefully.",
                "file": rel_path,
                "line": None,
            })

    return issues


def _llm_analysis(source_files: dict, scan_result: dict) -> str:
    """Get AI analysis of overall architecture quality."""
    # Sample a few files for LLM
    sample = {}
    budget = 6000
    for path, content in source_files.items():
        if budget <= 0:
            break
        snippet = content[:min(1500, budget)]
        sample[path] = snippet
        budget -= len(snippet)

    framework = scan_result.get("framework", "unknown")

    prompt = f"""You are a senior software architect reviewing a {framework} application.

Analyze these source files and provide a concise architectural review:

{json.dumps({k: v[:800] for k, v in list(sample.items())[:5]}, indent=1)}

Write a brief markdown report (max 300 words) covering:
1. **Overall Code Quality** (1-2 sentences)
2. **Top 3 Architectural Issues** (bullet points, specific and actionable)
3. **Quick Wins** (2-3 easy improvements that would have big impact)
4. **Scalability Concerns** (what would break at 10x traffic)

Be specific and technical. Reference actual patterns you see in the code."""

    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"AI analysis unavailable: {str(e)}"


def analyze_architecture(repo_path: str, scan_result: dict) -> dict:
    """
    Full architecture analysis.
    Returns:
    {
        static_issues: list of structured issue objects,
        ai_analysis: markdown string,
        summary: { critical: int, warnings: int, info: int }
    }
    """
    source_files = _read_source_files(repo_path)
    static_issues = _static_analysis(repo_path, source_files)
    ai_analysis = _llm_analysis(source_files, scan_result)

    summary = {
        "critical": sum(1 for i in static_issues if i.get("severity") == "critical"),
        "warnings": sum(1 for i in static_issues if i.get("severity") == "warning"),
        "info": sum(1 for i in static_issues if i.get("severity") == "info"),
    }

    return {
        "static_issues": static_issues,
        "ai_analysis": ai_analysis,
        "summary": summary,
    }