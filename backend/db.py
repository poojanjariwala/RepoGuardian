"""
Supabase database layer.
All DB reads/writes go through this module.
Backend uses the service_role key so it can write on behalf of any user
without being blocked by Row Level Security.
"""

import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

_client: Client | None = None


def get_db() -> Client:
    """Return a singleton Supabase client."""
    global _client
    if _client is None:
        url = os.getenv("SUPABASE_URL")
        key = os.getenv("SUPABASE_SERVICE_KEY")
        if not url or not key:
            raise EnvironmentError(
                "SUPABASE_URL and SUPABASE_SERVICE_KEY must be set in backend/.env"
            )
        _client = create_client(url, key)
    return _client


def create_job_record(job_id: str, repo_url: str, user_id: str | None) -> dict:
    """Insert a new job row when analysis starts."""
    import re
    match = re.search(r"github\.com[/:]([^/\s\.]+/[^/\s\.]+)", repo_url)
    repo_name = match.group(1) if match else repo_url

    db = get_db()
    result = db.table("analysis_jobs").insert({
        "id": job_id,
        "user_id": user_id,
        "repo_url": repo_url,
        "repo_name": repo_name,
        "status": "running",
    }).execute()
    return result.data[0] if result.data else {}


def update_job_status(
    job_id: str,
    status: str,
    framework: str | None = None,
    health_score: int | None = None,
    error_message: str | None = None,
):
    """Update job status when it finishes."""
    from datetime import datetime, timezone
    db = get_db()
    payload: dict = {"status": status}
    if status in ("done", "error"):
        payload["completed_at"] = datetime.now(timezone.utc).isoformat()
    if framework:
        payload["framework"] = framework
    if health_score is not None:
        payload["health_score"] = health_score
    if error_message:
        payload["error_message"] = error_message[:1000]

    db.table("analysis_jobs").update(payload).eq("id", job_id).execute()


def save_bug_reports(job_id: str, bugs: list) -> int:
    """Insert all bugs for a job."""
    if not bugs:
        return 0
    db = get_db()
    rows = []
    for bug in bugs:
        if not isinstance(bug, dict):
            continue
        rows.append({
            "job_id": job_id,
            "file_path": str(bug.get("file", "unknown"))[:500],
            "line_number": bug.get("line_number") if isinstance(bug.get("line_number"), int) else None,
            "error_type": str(bug.get("error_type", "Error"))[:100],
            "error_description": str(bug.get("error_description", ""))[:1000],
            "code_snippet": str(bug.get("code_snippet", ""))[:2000],
            "suggested_fix": str(bug.get("suggested_fix", ""))[:2000],
            "severity": bug.get("severity") if bug.get("severity") in ("critical", "warning", "info") else "warning",
        })
    if not rows:
        return 0
    result = db.table("bug_reports").insert(rows).execute()
    return len(result.data) if result.data else 0


def save_architecture_issues(job_id: str, arch_result: dict) -> int:
    """Insert architecture issues and AI analysis."""
    db = get_db()
    static_issues = arch_result.get("static_issues", [])
    ai_analysis = arch_result.get("ai_analysis", "")
    summary = arch_result.get("summary", {})

    rows = []
    for issue in static_issues:
        if not isinstance(issue, dict):
            continue
        rows.append({
            "job_id": job_id,
            "issue_type": str(issue.get("type", "general"))[:50],
            "severity": issue.get("severity") if issue.get("severity") in ("critical", "warning", "info") else "warning",
            "title": str(issue.get("title", ""))[:200],
            "description": str(issue.get("description", ""))[:1000],
            "suggestion": str(issue.get("suggestion", ""))[:1000],
            "file_path": str(issue.get("file", ""))[:500] if issue.get("file") else None,
            "line_number": issue.get("line") if isinstance(issue.get("line"), int) else None,
        })
    count = 0
    if rows:
        result = db.table("architecture_issues").insert(rows).execute()
        count = len(result.data) if result.data else 0

    if ai_analysis:
        db.table("ai_analyses").insert({
            "job_id": job_id,
            "markdown_report": ai_analysis[:10000],
            "critical_count": summary.get("critical", 0),
            "warning_count": summary.get("warnings", 0),
            "info_count": summary.get("info", 0),
        }).execute()

    return count


def save_pr_record(
    job_id: str,
    user_id: str | None,
    repo_url: str,
    pr_url: str,
    pr_title: str,
    branch_name: str,
    files_changed: list[str],
    bugs_fixed: int,
) -> dict:
    """Insert a PR history record."""
    db = get_db()
    result = db.table("pr_history").insert({
        "job_id": job_id,
        "user_id": user_id,
        "repo_url": repo_url,
        "pr_url": pr_url,
        "pr_title": pr_title,
        "branch_name": branch_name,
        "files_changed": files_changed,
        "bugs_fixed": bugs_fixed,
    }).execute()
    return result.data[0] if result.data else {}


def get_user_jobs(user_id: str, limit: int = 20) -> list:
    """Fetch recent jobs for a user."""
    db = get_db()
    result = (
        db.table("analysis_jobs")
        .select("*")
        .eq("user_id", user_id)
        .order("created_at", desc=True)
        .limit(limit)
        .execute()
    )
    return result.data or []


def get_job_full(job_id: str) -> dict:
    """Fetch complete job with all related data."""
    db = get_db()

    job_res = db.table("analysis_jobs").select("*").eq("id", job_id).execute()
    job = job_res.data[0] if job_res.data else None
    if not job:
        return {}

    bugs = db.table("bug_reports").select("*").eq("job_id", job_id).execute().data or []
    arch = db.table("architecture_issues").select("*").eq("job_id", job_id).execute().data or []
    ai_res = db.table("ai_analyses").select("*").eq("job_id", job_id).execute()
    ai = ai_res.data[0] if ai_res.data else None
    pr_res = db.table("pr_history").select("*").eq("job_id", job_id).execute()
    pr = pr_res.data[0] if pr_res.data else None

    return {
        "job": job,
        "bugs": bugs,
        "architecture_issues": arch,
        "ai_analysis": ai,
        "pr": pr,
    }


def get_user_pr_history(user_id: str, limit: int = 50) -> list:
    """Fetch all PRs created by a user."""
    db = get_db()
    result = (
        db.table("pr_history")
        .select("*, analysis_jobs(repo_name, framework)")
        .eq("user_id", user_id)
        .order("created_at", desc=True)
        .limit(limit)
        .execute()
    )
    return result.data or []