"""Orchestrator: chain agents in sequence and stream updates."""

def run(repo_url: str):
    # Placeholder: call each agent in order and return combined result
    return {"repo": repo_url, "status": "not_implemented"}


def run_analysis(job_id: str, repo_url: str, jobs: dict):
    """Run the analysis pipeline and update the job status."""
    try:
        jobs[job_id]["status"] = "running"
        result = run(repo_url)
        jobs[job_id]["result"] = result
        jobs[job_id]["status"] = "completed"
        return result
    except Exception as exc:
        jobs[job_id]["status"] = "error"
        jobs[job_id]["error"] = str(exc)
        raise
