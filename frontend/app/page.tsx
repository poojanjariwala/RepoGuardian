"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { startAnalysis } from "@/lib/api";
import RepoInput from "@/components/RepoInput";

// ── Preview of Agent States for animated SVG ────────────────────────────────
const PREVIEW_AGENTS = [
  { name: "Scanner", emoji: "📚", color: "rgba(6, 182, 212, 0.8)", glow: "shadow-[0_0_15px_rgba(6,182,212,0.5)]" },
  { name: "Explorer", emoji: "🌐", color: "rgba(16, 185, 129, 0.8)", glow: "shadow-[0_0_15px_rgba(16,185,129,0.5)]" },
  { name: "Auditor", emoji: "🔍", color: "rgba(245, 158, 11, 0.8)", glow: "shadow-[0_0_15px_rgba(245,158,11,0.5)]" },
  { name: "Architect", emoji: "🏗️", color: "rgba(124, 58, 237, 0.8)", glow: "shadow-[0_0_15px_rgba(124,58,237,0.5)]" },
  { name: "Executor", emoji: "🤖", color: "rgba(244, 63, 94, 0.8)", glow: "shadow-[0_0_15px_rgba(244,63,94,0.5)]" },
];

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activePreviewNode, setActivePreviewNode] = useState(0);
  const router = useRouter();

  // Cycle through preview nodes to simulate the agents running in sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePreviewNode((prev) => (prev + 1) % PREVIEW_AGENTS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleAnalyze = async () => {
    const trimmed = url.trim();
    if (!trimmed) return;
    if (!trimmed.includes("github.com")) {
      setError("Please enter a valid GitHub repository URL.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const { job_id } = await startAnalysis(trimmed);
      router.push(`/analyze/${job_id}`);
    } catch (e: any) {
      setError(e.message || "Failed to start analysis. Is the backend running?");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-4xl w-full text-center relative z-10">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2.5 bg-slate-900/80 border border-slate-800/80 rounded-full px-5 py-2 mb-8 glass-panel animate-pulse-glow shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="text-cyan-400 text-xs font-display font-semibold tracking-[0.15em] uppercase">
            Multi-Agent AI • Production-Ready Fixes
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-6 leading-[1.15] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
          Autonomous <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
            Code Architect
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-base md:text-lg text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
          Paste any public GitHub repository. Five specialized AI agents map code, execute dynamic test visits with Playwright, and push fixes automatically.
        </p>

        {/* Search Input Box */}
        <div className="mb-16">
          <RepoInput
            value={url}
            onChange={setUrl}
            onSubmit={handleAnalyze}
            loading={loading}
            error={error}
          />
        </div>

        {/* Live Animated Neural Net Section */}
        <div className="glass-panel border border-slate-800/40 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto mb-16 shadow-2xl relative">
          <div className="absolute top-4 left-5 flex items-center gap-1.5 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" />
            Active Node Simulation
          </div>
          
          <h3 className="font-display font-bold text-sm text-slate-300 mb-8 mt-1 tracking-wider uppercase">
            Agent Activation Chain
          </h3>

          {/* SVG Neural Network */}
          <div className="relative h-48 w-full">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 120" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Connecting paths */}
              <path
                d="M 60 60 L 180 60 L 300 60 L 420 60 L 540 60"
                stroke="url(#lineGrad)"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="6,6"
              />
              <path
                d="M 60 60 Q 180 10, 300 60 T 540 60"
                stroke="rgba(124, 58, 237, 0.15)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 60 60 Q 180 110, 300 60 T 540 60"
                stroke="rgba(6, 182, 212, 0.15)"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Node Connections/Lines highlight for active node */}
              {PREVIEW_AGENTS.map((_, idx) => {
                if (idx === activePreviewNode && idx < PREVIEW_AGENTS.length - 1) {
                  const x1 = 60 + idx * 120;
                  const x2 = 60 + (idx + 1) * 120;
                  return (
                    <line
                      key={`active-line-${idx}`}
                      x1={x1}
                      y1="60"
                      x2={x2}
                      y2="60"
                      stroke={PREVIEW_AGENTS[idx].color}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                  );
                }
                return null;
              })}

              {/* Render Circles */}
              {PREVIEW_AGENTS.map((agent, idx) => {
                const cx = 60 + idx * 120;
                const cy = 60;
                const isActive = idx === activePreviewNode;

                return (
                  <g key={`node-${idx}`} className="cursor-pointer">
                    {/* Glowing pulse rings under the active node */}
                    {isActive && (
                      <>
                        <circle
                          cx={cx}
                          cy={cy}
                          r="32"
                          fill="none"
                          stroke={agent.color}
                          strokeWidth="1.5"
                          opacity="0.35"
                          className="animate-ping"
                          style={{ animationDuration: "2s" }}
                        />
                        <circle
                          cx={cx}
                          cy={cy}
                          r="24"
                          fill="none"
                          stroke={agent.color}
                          strokeWidth="1"
                          opacity="0.5"
                          className="animate-pulse"
                        />
                      </>
                    )}
                    
                    {/* Main Node Circle */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="18"
                      fill={isActive ? agent.color : "#0f172a"}
                      stroke={isActive ? "#fff" : "rgba(255,255,255,0.08)"}
                      strokeWidth="2"
                      className="transition-all duration-500"
                    />

                    {/* Emoji Label inside node */}
                    <text
                      x={cx}
                      y={cy + 5}
                      textAnchor="middle"
                      className="text-base select-none pointer-events-none"
                    >
                      {agent.emoji}
                    </text>

                    {/* Node Text underneath */}
                    <text
                      x={cx}
                      y={cy + 36}
                      textAnchor="middle"
                      fill={isActive ? "#f8fafc" : "#64748b"}
                      className={`text-[10px] font-display font-bold uppercase tracking-wider transition-colors duration-300`}
                    >
                      {agent.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Bottom agents details grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { emoji: "📚", name: "Scanner", desc: "Maps project framework & layout" },
            { emoji: "🌐", name: "Explorer", desc: "Runs code & checks UI links" },
            { emoji: "🔍", name: "Auditor", desc: "Correlates bugs to source code" },
            { emoji: "🏗️", name: "Architect", desc: "Scans performance & structure" },
            { emoji: "🤖", name: "Executor", desc: "Builds code fixes & sends PRs" },
          ].map((agent, idx) => (
            <div
              key={idx}
              className={`glass-card border rounded-2xl p-5 hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 ${
                idx === activePreviewNode ? "border-cyan-500/35 bg-cyan-500/5 shadow-md shadow-cyan-500/5" : "border-slate-800/40 bg-slate-950/20"
              }`}
            >
              <div className="text-3xl mb-3">{agent.emoji}</div>
              <h4 className={`font-display font-bold text-sm tracking-wide mb-1 ${idx === activePreviewNode ? "text-cyan-400" : "text-slate-200"}`}>
                {agent.name}
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">{agent.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
