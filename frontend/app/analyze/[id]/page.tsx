"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import {
  createStatusStream, approveAndPush,
  type LogEntry, type JobResult, type Bug, type ArchitectureIssue, type Diff
} from "@/lib/api";
import StatusBadge from "@/components/StatusBadge";
import AgentCard from "@/components/AgentCard";

// Dynamic import of Diff Viewer to prevent SSR issues
const ReactDiffViewer = dynamic(() => import("react-diff-viewer-continued"), {
  ssr: false,
  loading: () => <div className="p-8 text-center text-slate-500 font-mono text-sm">Loading diff viewer...</div>
});

const AGENTS = [
  { name: "Scanner", emoji: "📚", color: "cyan", hex: "#06B6D4" },
  { name: "Explorer", emoji: "🌐", color: "emerald", hex: "#10B981" },
  { name: "Auditor", emoji: "🔍", color: "amber", hex: "#F59E0B" },
  { name: "Architect", emoji: "🏗️", color: "violet", hex: "#7C3AED" },
  { name: "Executor", emoji: "🤖", color: "rose", hex: "#F43F5E" },
];

const LOG_LEVEL_COLORS: Record<string, string> = {
  info: "text-slate-300",
  success: "text-emerald-400 font-semibold",
  warning: "text-amber-400",
  error: "text-rose-400 font-bold",
};

type Tab = "trace" | "bugs" | "diffs" | "architecture";

export default function AnalyzePage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [status, setStatus] = useState<"running" | "done" | "error">("running");
  const [result, setResult] = useState<JobResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("trace");
  const [activeAgent, setActiveAgent] = useState("Scanner");
  const [approving, setApproving] = useState(false);
  const [prUrl, setPrUrl] = useState("");
  const [approveError, setApproveError] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!id) return;
    const es = createStatusStream(id);

    es.onmessage = (e: MessageEvent) => {
      try {
        const data = JSON.parse(e.data);
        setLogs(data.all_logs || []);
        setStatus(data.status);

        const allLogs: LogEntry[] = data.all_logs || [];
        if (allLogs.length > 0) {
          const last = allLogs[allLogs.length - 1];
          if (last.agent !== "System") {
            setActiveAgent(last.agent);
          }
        }

        if (data.result) {
          setResult(data.result);
          // Auto-switch to bugs tab when analysis completes successfully
          setActiveTab("bugs");
        }
        if (data.error) setErrorMsg(data.error);
        if (data.status === "done" || data.status === "error") es.close();
      } catch (err) {
        // Ignore parse errors
      }
    };

    es.onerror = () => {
      es.close();
    };

    return () => es.close();
  }, [id]);

  const handleApprove = async () => {
    setApproving(true);
    setApproveError("");
    try {
      const { pr_url } = await approveAndPush(id);
      setPrUrl(pr_url);
    } catch (e: any) {
      setApproveError(e.message || "Failed to create PR");
    } finally {
      setApproving(false);
    }
  };

  const getAgentIndex = (name: string) => {
    return AGENTS.findIndex(a => a.name === name);
  };

  const currentAgentIdx = getAgentIndex(activeAgent);

  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: "trace", label: "⚙️ Live Trace" },
    { id: "bugs", label: "🐛 Bugs", count: result?.bugs?.length },
    { id: "diffs", label: "📝 Diffs", count: result?.diffs?.length },
    { id: "architecture", label: "🏗️ Architecture" },
  ];

  return (
    <main className="min-h-screen bg-navy-950 text-slate-100 flex flex-col">
      {/* Dynamic Header */}
      <header className="border-b border-slate-800/60 bg-slate-900/35 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.push("/")} 
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800/40 rounded-xl"
            >
              ← Back
            </button>
            <div>
              <h1 className="font-display font-bold text-lg text-white tracking-wide">
                🤖 Autonomous Architect Pipeline
              </h1>
              <p className="text-slate-500 font-mono text-xs truncate max-w-[280px] sm:max-w-md mt-0.5">
                {result?.repo_url || `Job ID: ${id}`}
              </p>
            </div>
          </div>

          {/* Running status badge */}
          <div className="flex items-center gap-3">
            <StatusBadge status={status} />
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-8">
        
        {/* Real-time interactive neural SVG + status tracker */}
        <div className="glass-panel border border-slate-800/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-3 left-4 flex items-center gap-2 font-mono text-[9px] text-slate-500 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
            Live Agent Sync Node
          </div>

          {/* Head SVG Neural Chain */}
          <div className="h-24 w-full mt-4">
            <svg className="w-full h-full" viewBox="0 0 800 80" preserveAspectRatio="xMidYMid meet">
              {/* Connecting dashed line */}
              <line
                x1="80"
                y1="35"
                x2="720"
                y2="35"
                stroke="#1e293b"
                strokeWidth="2"
                strokeDasharray="4,4"
              />

              {/* Progress connection line */}
              {currentAgentIdx >= 0 && (
                <line
                  x1="80"
                  y1="35"
                  x2={80 + currentAgentIdx * 160}
                  y2="35"
                  stroke={AGENTS[currentAgentIdx].hex}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="transition-all duration-700"
                />
              )}

              {/* Dynamic node circles */}
              {AGENTS.map((agent, idx) => {
                const cx = 80 + idx * 160;
                const cy = 35;
                const isRunning = activeAgent === agent.name && status === "running";
                const isCompleted = getAgentIndex(activeAgent) > idx || status === "done";

                return (
                  <g key={idx}>
                    {isRunning && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r="20"
                        fill="none"
                        stroke={agent.hex}
                        strokeWidth="1.5"
                        className="animate-ping"
                      />
                    )}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="12"
                      fill={isRunning ? agent.hex : isCompleted ? "#10B981" : "#0f172a"}
                      stroke={isRunning ? "#fff" : isCompleted ? "#047857" : "rgba(255,255,255,0.08)"}
                      strokeWidth="2"
                      className="transition-all duration-500"
                    />
                    <text
                      x={cx}
                      y={cy + 4}
                      textAnchor="middle"
                      className="text-xs pointer-events-none select-none"
                    >
                      {agent.emoji}
                    </text>
                    <text
                      x={cx}
                      y={cy + 25}
                      textAnchor="middle"
                      fill={isRunning ? "#f8fafc" : isCompleted ? "#10B981" : "#64748b"}
                      className="text-[9px] font-display font-bold uppercase tracking-wider transition-colors duration-500"
                    >
                      {agent.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Live Grid layout: left is list of Agent status cards, right is log viewer / results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Left: Agent status sidebar cards */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
              Agent Registry
            </h3>
            {AGENTS.map((agent) => {
              // Get last message for this agent
              const agentLogs = logs.filter(l => l.agent === agent.name);
              const lastLog = agentLogs.length > 0 ? agentLogs[agentLogs.length - 1] : undefined;
              const isCurrent = activeAgent === agent.name && status === "running";
              const isFinished = getAgentIndex(activeAgent) > getAgentIndex(agent.name) || status === "done";

              return (
                <AgentCard
                  key={agent.name}
                  name={agent.name}
                  emoji={agent.emoji}
                  description={
                    agent.name === "Scanner" ? "Scans repository layout & languages" :
                    agent.name === "Explorer" ? "Drives browser session with Playwright" :
                    agent.name === "Auditor" ? "Analyzes runtime crash logs" :
                    agent.name === "Architect" ? "Checks codebase structure quality" :
                    "Generates file edits and commits fixes"
                  }
                  active={isCurrent}
                  done={isFinished}
                  lastMessage={lastLog?.message}
                />
              );
            })}
          </div>

          {/* Right: Main display content panel */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tabs */}
            <div className="flex gap-1 border-b border-slate-800/80">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3 text-xs font-display font-bold uppercase tracking-wider transition-colors border-b-2 -mb-px ${
                    activeTab === tab.id
                      ? "border-cyan-500 text-cyan-400"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab.label}
                  {tab.count !== undefined && tab.count > 0 && (
                    <span className="ml-2 bg-slate-800 text-cyan-400 text-[10px] px-2 py-0.5 rounded-full border border-slate-700">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab: Trace Logs */}
            {activeTab === "trace" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass-panel border border-slate-800/50 rounded-2xl p-5 shadow-inner">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      Console Trace Output
                    </div>
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  </div>
                  <div className="h-[380px] overflow-y-auto font-mono text-xs leading-relaxed space-y-2 pr-2">
                    {logs.length === 0 && (
                      <div className="text-slate-600 italic text-center py-12">
                        Pipeline initialization in progress...
                      </div>
                    )}
                    {logs.map((log, idx) => (
                      <div key={idx} className="flex gap-2 items-start py-0.5">
                        <span className="text-slate-600 select-none text-[10px] w-6 text-right shrink-0">
                          {idx + 1}
                        </span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0 bg-slate-900 border border-slate-800 text-slate-400`}>
                          {log.agent}
                        </span>
                        <span className={`${LOG_LEVEL_COLORS[log.level] || "text-slate-300"} break-all`}>
                          {log.message}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sandbox Browser Preview Card */}
                <div className="lg:col-span-1 glass-panel border border-slate-800/50 rounded-2xl p-5 shadow-inner flex flex-col">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3 shrink-0">
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      Sandbox Live Preview
                    </div>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                      result?.explorer ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400" : "bg-slate-800 border border-slate-700 text-slate-500"
                    }`}>
                      {result?.explorer ? "Ready" : "Scanning..."}
                    </span>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center items-center">
                    {result?.explorer?.screenshot_b64 ? (
                      <div className="w-full space-y-3">
                        <div className="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-900 p-1 group relative">
                          <img
                            src={`data:image/png;base64,${result.explorer.screenshot_b64}`}
                            alt="Sandbox Browser Preview"
                            className="w-full object-contain rounded-lg hover:scale-[1.02] transition-transform duration-300 max-h-[300px]"
                          />
                        </div>
                        <div className="text-[10px] text-slate-500 text-center font-mono italic">
                          Screenshot captured after dynamic Playwright crawling session
                        </div>
                      </div>
                    ) : (
                      <div className="text-slate-600 italic text-xs text-center py-16 space-y-2">
                        <div className="text-3xl animate-pulse">🌐</div>
                        <p>No browser preview available.</p>
                        <p className="text-[10px] text-slate-500 max-w-[200px] mx-auto not-italic">
                          Preview is generated when dynamic browser analysis completes for web applications.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Bugs Cards */}
            {activeTab === "bugs" && (
              <div className="space-y-4">
                {!result && (
                  <div className="glass-panel border border-slate-800/40 rounded-2xl py-16 text-center">
                    <p className="text-slate-500 text-sm font-mono animate-pulse">
                      {status === "running" ? "Agents are scanning for runtime bugs..." : "No bugs analyzed."}
                    </p>
                  </div>
                )}
                {result?.bugs?.length === 0 && (
                  <div className="glass-panel border border-slate-800/40 rounded-2xl py-16 text-center space-y-3">
                    <div className="text-5xl">✨</div>
                    <h4 className="font-display font-bold text-slate-200 text-lg">codebase clean!</h4>
                    <p className="text-slate-500 text-xs max-w-sm mx-auto">
                      Explorer navigated all endpoints successfully without encountering uncaught client crashes.
                    </p>
                  </div>
                )}
                {result?.bugs?.map((bug, idx) => (
                  <BugCard key={idx} bug={bug} />
                ))}
              </div>
            )}

            {/* Tab: Code Diffs Split Viewer */}
            {activeTab === "diffs" && (
              <div className="space-y-4">
                {!result?.diffs?.length && (
                  <div className="glass-panel border border-slate-800/40 rounded-2xl py-16 text-center">
                    <p className="text-slate-500 text-sm font-mono">
                      {status === "running" ? "Generating code edits with Gemini..." : "No diffs generated."}
                    </p>
                  </div>
                )}
                
                {isMounted && result?.diffs?.map((diff, idx) => (
                  <DiffCollapse key={idx} diff={diff} />
                ))}

                {/* Human approval button */}
                {result?.diffs && result.diffs.length > 0 && !prUrl && (
                  <div className="glass-panel border border-slate-700/50 rounded-2xl p-6 shadow-xl space-y-4 mt-8">
                    <div>
                      <h4 className="font-display font-bold text-slate-200 text-base">
                        Awaiting Human Gate Approval
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed mt-1">
                        Review the code diffs above. Upon approval, RepoGuardian will create a new git branch, apply the changes, and create a Pull Request on your repository.
                      </p>
                    </div>

                    {approveError && (
                      <p className="text-rose-400 font-mono text-xs">{approveError}</p>
                    )}

                    <button
                      onClick={handleApprove}
                      disabled={approving}
                      className="relative group w-full sm:w-auto active:scale-95 transition-transform"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl opacity-45 group-hover:opacity-75 blur-[3px]" />
                      <div className="relative bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2">
                        {approving ? (
                          <>
                            <svg className="animate-spin w-4 h-4 text-slate-950" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            <span>Creating Pull Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Approve & Push PR to GitHub</span>
                            <span>✓</span>
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                )}

                {/* PR created alert box */}
                {prUrl && (
                  <div className="glass-panel border border-emerald-500/40 bg-emerald-500/5 rounded-2xl p-6 shadow-xl space-y-3">
                    <h4 className="font-display font-bold text-emerald-400 text-lg flex items-center gap-2">
                      🎉 PR Created Successfully!
                    </h4>
                    <p className="text-slate-300 text-sm">
                      The branch has been pushed and a PR is open:
                    </p>
                    <a
                      href={prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 underline font-mono text-xs break-all hover:text-cyan-300 block"
                    >
                      {prUrl}
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Tab: Architecture Review Details */}
            {activeTab === "architecture" && (
              <div className="space-y-4">
                {!result ? (
                  <div className="glass-panel border border-slate-800/40 rounded-2xl py-16 text-center">
                    <p className="text-slate-500 text-sm font-mono animate-pulse">
                      Running static analysis checks...
                    </p>
                  </div>
                ) : (
                  <ArchitecturePanel result={result} />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Global Pipeline error banner */}
        {status === "error" && errorMsg && (
          <div className="glass-panel border border-rose-500/40 bg-rose-500/5 rounded-2xl p-5 shadow-lg space-y-2">
            <h4 className="font-display font-bold text-rose-400 text-sm flex items-center gap-2">
              ⚠️ Pipeline Failed
            </h4>
            <p className="text-slate-400 text-xs font-mono">{errorMsg}</p>
            <p className="text-slate-500 text-xs">
              Check if the repository URL is correct, exists publicly, and contains a buildable stack.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

// ── Sub-components for Bug card lists ──────────────────────────────────────────

function BugCard({ bug }: { bug: Bug }) {
  const [open, setOpen] = useState(false);
  const severityColors = {
    critical: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    warning: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    info: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
  };

  return (
    <div className="glass-panel border border-slate-850 rounded-xl overflow-hidden shadow-sm transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-900/30 hover:bg-slate-900/60 transition-colors gap-3 text-left"
      >
        <div className="flex items-center gap-3">
          <span className={`text-[9px] font-bold tracking-wider px-2 py-0.5 rounded border uppercase ${severityColors[bug.severity]}`}>
            {bug.severity}
          </span>
          <span className="font-mono text-xs text-cyan-400 break-all">{bug.file}</span>
          {bug.line_number && (
            <span className="text-slate-600 text-[10px] font-mono shrink-0">:{bug.line_number}</span>
          )}
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-slate-300 text-xs font-medium truncate flex-1 sm:max-w-md">
            {bug.error_description}
          </span>
          <span className="text-slate-500 text-[10px] shrink-0 font-mono ml-auto">
            {open ? "COLLAPSE ▲" : "EXPAND ▼"}
          </span>
        </div>
      </button>

      {open && (
        <div className="p-5 border-t border-slate-900 bg-slate-950/60 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] font-display font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Category
              </p>
              <p className="text-slate-200 text-xs font-mono bg-slate-900 px-3 py-1 rounded border border-slate-800 inline-block">
                {bug.error_type}
              </p>
            </div>
          </div>

          {bug.code_snippet && (
            <div className="space-y-1.5">
              <p className="text-[10px] font-display font-semibold text-slate-500 uppercase tracking-wider">
                Unsafe Snippet
              </p>
              <pre className="bg-rose-950/10 border border-rose-900/20 text-rose-300 p-3.5 rounded-lg text-xs font-mono overflow-x-auto">
                {bug.code_snippet}
              </pre>
            </div>
          )}

          <div className="space-y-1.5">
            <p className="text-[10px] font-display font-semibold text-slate-500 uppercase tracking-wider">
              Recommended Fix
            </p>
            <pre className="bg-emerald-950/10 border border-emerald-900/20 text-emerald-300 p-3.5 rounded-lg text-xs font-mono overflow-x-auto whitespace-pre-wrap">
              {bug.suggested_fix}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Sub-component for Diffs tab view ─────────────────────────────────────────

function DiffCollapse({ diff }: { diff: Diff }) {
  const [open, setOpen] = useState(false);

  if (!diff.success) {
    return (
      <div className="glass-panel border border-slate-800/40 rounded-xl p-4 bg-slate-950/50">
        <p className="text-slate-500 text-xs font-mono">
          <span className="text-rose-400 font-bold">{diff.file}</span>: Failed to generate fix details. ({diff.error})
        </p>
      </div>
    );
  }

  return (
    <div className="glass-panel border border-slate-850 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 bg-slate-900/30 hover:bg-slate-900/60 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs text-emerald-400 font-bold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
            PR Fix Available
          </span>
          <span className="font-mono text-xs text-cyan-400 truncate max-w-[200px] sm:max-w-md">
            {diff.file}
          </span>
        </div>
        <span className="text-slate-500 text-[10px] font-mono font-semibold">
          {open ? "HIDE DIFF ▲" : "SHOW DIFF ▼"}
        </span>
      </button>

      {open && (
        <div className="border-t border-slate-900/80 bg-slate-950 font-mono overflow-hidden">
          <ReactDiffViewer
            oldValue={diff.original}
            newValue={diff.fixed}
            splitView={true}
            useDarkTheme={true}
            leftTitle="Original Source"
            rightTitle="Proposed Fix"
          />
        </div>
      )}
    </div>
  );
}

// ── Sub-component for Architecture reports ───────────────────────────────────

function ArchitecturePanel({ result }: { result: JobResult }) {
  const { static_issues, ai_analysis, summary } = result.architecture;

  const severityGlows = {
    critical: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    warning: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    info: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  };

  return (
    <div className="space-y-6">
      
      {/* Top summary row */}
      <div className="flex flex-wrap gap-3">
        <span className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border ${severityGlows.critical}`}>
          🚨 {summary.critical} Critical Security
        </span>
        <span className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border ${severityGlows.warning}`}>
          ⚠️ {summary.warnings} Warnings
        </span>
        <span className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border ${severityGlows.info}`}>
          ℹ️ {summary.info} Structural Notes
        </span>
      </div>

      {/* Grid: Left lists the specific static analysis issues, right is AI analysis summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left static checks list */}
        <div className="space-y-3">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-2">
            Static Lint Issues ({static_issues.length})
          </h4>
          {static_issues.length === 0 ? (
            <p className="text-slate-600 text-xs italic">No critical configuration risks or security variables detected in standard files.</p>
          ) : (
            static_issues.map((issue, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border ${
                  issue.severity === "critical" ? "bg-rose-950/10 border-rose-900/30" : "bg-slate-900/40 border-slate-800/80"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold ${issue.severity === "critical" ? "text-rose-400" : "text-amber-400"}`}>
                    {issue.title}
                  </span>
                  {issue.file && (
                    <span className="font-mono text-[9px] text-cyan-400 px-2 py-0.5 bg-slate-950 rounded border border-slate-800">
                      {issue.file}{issue.line ? `:${issue.line}` : ""}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-2">
                  {issue.description}
                </p>
                <div className="text-slate-200 text-xs font-medium bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60">
                  💡 {issue.suggestion}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Gemini detailed review */}
        <div className="space-y-3">
          <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-2">
            AI Architectural Report
          </h4>
          <div className="glass-panel border border-slate-800/60 rounded-xl p-5 shadow-md">
            <div className="text-xs text-purple-400 font-display font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <span>🏗️</span> Gemini 1.5 Flash Architect Review
            </div>
            <div className="text-slate-300 text-xs leading-relaxed whitespace-pre-wrap font-sans space-y-4">
              {ai_analysis}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
