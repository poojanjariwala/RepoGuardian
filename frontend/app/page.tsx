"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { startAnalysis, listJobs, getScoreColorClass } from "@/lib/api";
import type { JobRow } from "@/lib/supabase";
import RepoInput from "@/components/RepoInput";

const AGENT_CARDS = [
  {
    emoji: "📚",
    name: "Scanner",
    desc: "Maps structure & deps",
    colorClass: "from-blue-500/10 to-transparent border-blue-500/20 text-blue-400"
  },
  {
    emoji: "🌐",
    name: "Explorer",
    desc: "Runs app with Playwright",
    colorClass: "from-emerald-500/10 to-transparent border-emerald-500/20 text-emerald-400"
  },
  {
    emoji: "🔍",
    name: "Auditor",
    desc: "RepoGuardian Analyst + Reviewer",
    colorClass: "from-amber-500/10 to-transparent border-amber-500/20 text-amber-400"
  },
  {
    emoji: "🏗️",
    name: "Architect",
    desc: "Security & performance scan",
    colorClass: "from-violet-500/10 to-transparent border-violet-500/20 text-violet-400"
  },
  {
    emoji: "🤖",
    name: "Executor",
    desc: "Writes fixes & opens PR",
    colorClass: "from-rose-500/10 to-transparent border-rose-500/20 text-rose-400"
  },
  {
    emoji: "📊",
    name: "Market",
    desc: "Competitor analysis & startup roadmap",
    colorClass: "from-cyan-500/10 to-transparent border-cyan-500/20 text-cyan-400"
  }
];

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentJobs, setRecentJobs] = useState<JobRow[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function loadRecent() {
      try {
        const jobs = await listJobs(6);
        setRecentJobs(jobs);
      } catch (err) {
        console.error("Failed to load recent jobs", err);
      }
    }
    loadRecent();
  }, []);

  const handleAnalyze = async (targetUrl?: string) => {
    const activeUrl = targetUrl || url;
    const trimmed = activeUrl.trim();
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

  const handleChipClick = (demoUrl: string) => {
    setUrl(demoUrl);
    handleAnalyze(demoUrl);
  };

  const stripGithubPrefix = (repoUrl: string) => {
    return repoUrl.replace(/^https?:\/\/(www\.)?github\.com\//, "");
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-between p-6 md:p-12 overflow-hidden bg-[#020817]">
      {/* Animated CSS Grid background + radial glow orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden animated-grid-bg">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Main Container */}
      <div className="max-w-6xl w-full text-center relative z-10 space-y-16 my-auto">
        {/* Top Center Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-slate-700/50 shadow-md text-xs font-semibold text-cyan-400 select-none animate-pulse-glow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span>6-Agent AI System · RepoGuardian · $0 Cost</span>
        </div>

        {/* Title Section */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 leading-none text-white font-display">
            We don't just fix <br />
            <span className="grad-cyan">your code.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-semibold font-display">
            We tell you if it's worth building.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            RepoGuardian runs your application dynamically using Playwright, validates bugs with dual-AI reviews (Analyst + Reviewer), and automatically evaluates business viability, startup roadmaps, and competitive intelligence.
          </p>
        </div>

        {/* Input Card and Demo Chips */}
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="glass p-1 rounded-2xl border-slate-700/50 shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-cyan-500/50 focus-within:border-cyan-500">
            <RepoInput
              value={url}
              onChange={setUrl}
              onSubmit={() => handleAnalyze()}
              loading={loading}
              error={error}
            />
          </div>
          
          {/* Demo Chips */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => handleChipClick("https://github.com/expressjs/express")}
              disabled={loading}
              className="px-3.5 py-1.5 rounded-full text-xs bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-all font-display disabled:opacity-50"
            >
              Try: express
            </button>
            <button
              onClick={() => handleChipClick("https://github.com/gothinkster/react-redux-realworld-example-app")}
              disabled={loading}
              className="px-3.5 py-1.5 rounded-full text-xs bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-all font-display disabled:opacity-50"
            >
              Try: react-redux-realworld-example-app
            </button>
          </div>
        </div>

        {/* 6 Agent Cards Grid */}
        <div className="space-y-6">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
            System Architecture
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {AGENT_CARDS.map((agent, idx) => (
              <div
                key={idx}
                className={`glass card-3d border rounded-xl p-5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[170px] bg-gradient-to-b ${agent.colorClass}`}
              >
                <div className="text-4xl mb-3 animate-float select-none" style={{ animationDelay: `${idx * 0.5}s` }}>
                  {agent.emoji}
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm tracking-wide text-white">
                    {agent.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    {agent.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why RepoGuardian is Different */}
        <div className="space-y-6">
          <h2 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
            Why RepoGuardian is Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="glass border border-slate-800/40 rounded-xl p-6 hover:border-cyan-500/10 transition-colors">
              <div className="text-3xl mb-4">🖥️</div>
              <h3 className="font-display font-bold text-base text-white mb-2">Runs your app</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                RepoGuardian executes your project inside a headless sandbox using Playwright. It crawls directories and triggers interactive events to detect runtime and route failures.
              </p>
            </div>
            <div className="glass border border-slate-800/40 rounded-xl p-6 hover:border-violet-500/10 transition-colors">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="font-display font-bold text-base text-white mb-2">Dual AI review</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Findings map directly back to files using a collaborative process: the Analyst AI identifies errors, and the Reviewer AI independently verifies the confidence level and merge safety.
              </p>
            </div>
            <div className="glass border border-slate-800/40 rounded-xl p-6 hover:border-cyan-500/10 transition-colors">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-display font-bold text-base text-white mb-2">Market intelligence</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Beyond static code issues, RepoGuardian generates strategic intelligence, including audience segmentation, competitive comparison, key startup risks, and viability ratings.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Analyses Section */}
        {recentJobs.length > 0 && (
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 text-center sm:text-left">
              Recent Repository Analyses
            </h2>
            <div className="glass border border-slate-850 rounded-2xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950/40 text-slate-400 text-xs uppercase tracking-wider font-mono">
                      <th className="px-6 py-4 font-normal">Status</th>
                      <th className="px-6 py-4 font-normal">Repository</th>
                      <th className="px-6 py-4 font-normal">Framework</th>
                      <th className="px-6 py-4 font-normal">Health Score</th>
                      <th className="px-6 py-4 font-normal text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850 bg-slate-900/10">
                    {recentJobs.map((job) => (
                      <tr 
                        key={job.id} 
                        onClick={() => router.push(`/analyze/${job.id}`)}
                        className="hover:bg-slate-800/30 transition-colors cursor-pointer group"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {job.status === "done" && (
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" title="Success" />
                            )}
                            {job.status === "running" && (
                              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" title="Running" />
                            )}
                            {job.status === "error" && (
                              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" title="Failed" />
                            )}
                            <span className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-400">
                              {job.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-200">
                          <div className="truncate max-w-[200px] sm:max-w-sm" title={job.repo_url}>
                            {stripGithubPrefix(job.repo_url)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-mono text-xs text-slate-450">
                          {job.framework || "unknown"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${getScoreColorClass(job.health_score)}`}>
                            {job.health_score !== null ? `${job.health_score}/100` : "N/A"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right whitespace-nowrap">
                          <span className="text-cyan-400 text-xs font-semibold group-hover:translate-x-1 inline-block transition-transform">
                            View Details &rarr;
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-8 relative z-10 text-[11px] text-slate-550 border-t border-slate-900/50 mt-16">
        RepoGuardian © {new Date().getFullYear()} · Autonomous Multi-Agent Strategic Code Analyst.
      </footer>
    </main>
  );
}
