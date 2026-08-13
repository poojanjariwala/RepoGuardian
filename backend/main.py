import asyncio
import json
import uuid
import os
import sys

# Reconfigure console streams to use UTF-8 on Windows
sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

from fastapi import FastAPI, BackgroundTasks, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sse_starlette.sse import EventSourceResponse
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

from orchestrator import run_analysis
from agents.executor import push_pr

app = FastAPI(title="Autonomous Architect API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory job store — fine for hackathon demo
# Key: job_id, Value: { status, logs, result }
jobs: dict = {}


class AnalyzeRequest(BaseModel):
    repo_url: str


class ApproveRequest(BaseModel):
    job_id: str


@app.get("/")
def root():
    return {"status": "Autonomous Architect API is running"}


@app.post("/api/analyze")
async def start_analysis(req: AnalyzeRequest, background_tasks: BackgroundTasks):
    """Start a new analysis job. Returns job_id immediately."""
    job_id = str(uuid.uuid4())
    jobs[job_id] = {
        "status": "running",
        "logs": [],
        "result": None,
        "error": None,
    }
    background_tasks.add_task(run_analysis, job_id, req.repo_url, jobs)
    return {"job_id": job_id}


@app.get("/api/status/{job_id}")
async def stream_status(job_id: str):
    """
    Server-Sent Events stream.
    Frontend connects here and receives live updates until job is done/error.
    """
    if job_id not in jobs:
        raise HTTPException(status_code=404, detail="Job not found")

    async def event_generator():
        last_log_count = 0
        while True:
            job = jobs.get(job_id, {})
            current_logs = job.get("logs", [])

            # Only send new logs since last tick (efficient)
            new_logs = current_logs[last_log_count:]
            last_log_count = len(current_logs)

            payload = {
                "status": job.get("status", "running"),
                "new_logs": new_logs,
                "all_logs": current_logs,
                "result": job.get("result"),
                "error": job.get("error"),
                "scores": job.get("scores"),
                "security_report": job.get("security_report"),
                "market_report": job.get("market_report"),
                "screenshot_b64": job.get("screenshot_b64"),
            }
            yield {"data": json.dumps(payload)}

            status = job.get("status")
            if status in ("done", "error"):
                break

            await asyncio.sleep(0.8)

    return EventSourceResponse(event_generator())


@app.get("/api/job/{job_id}")
def get_job(job_id: str):
    """Polling fallback if SSE doesn't work (e.g. some proxies block it)."""
    if job_id not in jobs:
        raise HTTPException(status_code=404, detail="Job not found")
    return jobs[job_id]


@app.post("/api/approve/{job_id}")
async def approve_and_push(job_id: str):
    """
    Human-in-the-loop gate.
    User clicks 'Approve' on frontend → this creates the real GitHub PR.
    """
    job = jobs.get(job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    if job.get("status") != "done":
        raise HTTPException(status_code=400, detail="Job not complete yet")
    if not job.get("result"):
        raise HTTPException(status_code=400, detail="No result to push")

    result = job["result"]
    if not result.get("diffs"):
        return {"message": "No fixable bugs found — nothing to push", "pr_url": None}

    try:
        pr_url = push_pr(result)
        jobs[job_id]["pr_url"] = pr_url
        return {"pr_url": pr_url, "message": "Pull Request created successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create PR: {str(e)}")


@app.delete("/api/job/{job_id}")
def cleanup_job(job_id: str):
    """Clean up temp files and job data after demo."""
    job = jobs.pop(job_id, None)
    if job and job.get("result", {}) and job["result"].get("tmp_path"):
        import shutil
        try:
            shutil.rmtree(job["result"]["tmp_path"], ignore_errors=True)
        except Exception:
            pass
    return {"deleted": job_id}


@app.get("/api/screenshot/{job_id}")
def get_screenshot(job_id: str):
    # Try in-memory first
    if job_id in jobs:
        screenshot_b64 = jobs[job_id].get("screenshot_b64")
        if screenshot_b64:
            return {"screenshot_b64": screenshot_b64}
    
    # Try database
    try:
        import db
        job_data = db.get_job_full(job_id)
        if job_data and "job" in job_data:
            screenshot_b64 = job_data["job"].get("screenshot_b64")
            if screenshot_b64:
                return {"screenshot_b64": screenshot_b64}
    except Exception as e:
        print(f"[API] Failed to get screenshot from DB: {e}")
        
    raise HTTPException(status_code=404, detail="Screenshot not found")
