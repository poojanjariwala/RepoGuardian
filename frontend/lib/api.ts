/**
 * Centralized API client.
 * All backend calls go through here so we only change the URL in one place.
 */

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

export interface LogEntry {
  agent: string;
  message: string;
  level: "info" | "warning" | "error" | "success";
}

export interface Bug {
  file: string;
  line_number: number | null;
  error_type: string;
  error_description: string;
  code_snippet: string;
  suggested_fix: string;
  severity: "critical" | "warning" | "info";
}

export interface ArchitectureIssue {
  type: string;
  severity: "critical" | "warning" | "info";
  title: string;
  description: string;
  suggestion: string;
  file: string | null;
  line?: number | null;
}

export interface Diff {
  file: string;
  original: string;
  fixed: string;
  bug: Bug;
  success: boolean;
  error: string | null;
}

export interface JobResult {
  repo_url: string;
  scan: {
    framework: string;
    description: string;
    has_tests: boolean;
    dockerfile_exists: boolean;
    env_file_exists: boolean;
    file_tree: string[];
  };
  explorer?: {
    console_errors: any[];
    network_errors: any[];
    pages_visited: string[];
    screenshot_b64: string | null;
    server_started: boolean;
  };
  bugs: Bug[];
  architecture: {
    static_issues: ArchitectureIssue[];
    ai_analysis: string;
    summary: { critical: number; warnings: number; info: number };
    score: number;
  };
  diffs: Diff[];
}

export interface JobStatus {
  status: "running" | "done" | "error";
  new_logs: LogEntry[];
  all_logs: LogEntry[];
  result: JobResult | null;
  error: string | null;
}

export async function startAnalysis(repoUrl: string): Promise<{ job_id: string }> {
  const res = await fetch(`${BACKEND}/api/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ repo_url: repoUrl }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || `Failed to start analysis: ${res.status}`);
  }
  return res.json();
}

export function createStatusStream(jobId: string): EventSource {
  return new EventSource(`${BACKEND}/api/status/${jobId}`);
}

export async function approveAndPush(jobId: string): Promise<{ pr_url: string; message: string }> {
  const res = await fetch(`${BACKEND}/api/approve/${jobId}`, { method: "POST" });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.detail || `Approval failed: ${res.status}`);
  }
  return res.json();
}

export async function pollJobStatus(jobId: string): Promise<JobStatus> {
  const res = await fetch(`${BACKEND}/api/job/${jobId}`);
  if (!res.ok) throw new Error(`Poll failed: ${res.status}`);
  return res.json();
}
