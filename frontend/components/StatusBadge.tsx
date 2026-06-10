"use client";

type Status = "running" | "done" | "error" | "pending";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const CONFIG: Record<Status, { dot: string; text: string; bg: string; border: string; label: string }> = {
  running: {
    dot: "bg-blue-400 animate-pulse",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    label: "Running...",
  },
  done: {
    dot: "bg-green-400",
    text: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    label: "Complete",
  },
  error: {
    dot: "bg-red-400",
    text: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    label: "Failed",
  },
  pending: {
    dot: "bg-gray-500",
    text: "text-gray-400",
    bg: "bg-gray-500/10",
    border: "border-gray-500/30",
    label: "Pending",
  },
};

export default function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const c = CONFIG[status];
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium
        ${c.bg} ${c.border} ${c.text} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
      {c.label}
    </span>
  );
}