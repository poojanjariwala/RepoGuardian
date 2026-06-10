"use client";

interface AgentCardProps {
  name: string;
  emoji: string;
  description: string;
  active?: boolean;
  done?: boolean;
  lastMessage?: string;
}

export default function AgentCard({
  name,
  emoji,
  description,
  active = false,
  done = false,
  lastMessage,
}: AgentCardProps) {
  return (
    <div
      className={`border rounded-xl p-4 transition-all duration-300 ${
        active
          ? "border-cyan-400 bg-cyan-400/5 shadow-lg shadow-cyan-500/10"
          : done
          ? "border-green-700/50 bg-green-500/5"
          : "border-gray-800 bg-gray-900"
      }`}
    >
      {/* Header row */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{emoji}</span>
        <div className="flex-1 min-w-0">
          <p className={`font-bold text-sm ${active ? "text-cyan-400" : done ? "text-green-400" : "text-gray-300"}`}>
            {name}
          </p>
          <p className="text-gray-600 text-xs truncate">{description}</p>
        </div>
        {active && (
          <span className="flex items-center gap-1 text-xs text-cyan-400 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            ACTIVE
          </span>
        )}
        {done && !active && (
          <span className="text-green-400 text-sm shrink-0">✓</span>
        )}
      </div>

      {/* Last message */}
      {lastMessage && (
        <p className="text-gray-500 text-xs font-mono truncate mt-1 pl-8">
          {lastMessage}
        </p>
      )}
    </div>
  );
}