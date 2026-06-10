"use client";

interface RepoInputProps {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  loading?: boolean;
  error?: string;
}

export default function RepoInput({
  value,
  onChange,
  onSubmit,
  loading = false,
  error,
}: RepoInputProps) {
  return (
    <div className="w-full max-w-2xl">
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
        GitHub Repository URL
      </label>

      <div className="flex gap-2">
        {/* GitHub icon inside input */}
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none select-none">
            🔗
          </span>
          <input
            type="url"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !loading && onSubmit()}
            placeholder="https://github.com/username/repository"
            className={`w-full pl-9 pr-4 py-3.5 bg-gray-800 rounded-xl text-white text-sm placeholder-gray-600
              border transition-colors focus:outline-none
              ${error ? "border-red-500 focus:border-red-400" : "border-gray-700 focus:border-cyan-500"}`}
          />
        </div>

        <button
          onClick={onSubmit}
          disabled={!value.trim() || loading}
          className="shrink-0 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-700 disabled:text-gray-500
            disabled:cursor-not-allowed text-black font-bold px-6 py-3.5 rounded-xl text-sm
            transition-colors flex items-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Starting...
            </>
          ) : (
            <>Analyze →</>
          )}
        </button>
      </div>

      {error ? (
        <p className="mt-2 text-red-400 text-xs">{error}</p>
      ) : (
        <p className="mt-2 text-gray-600 text-xs">
          Supports public GitHub repos. Private repos require a GitHub token in backend settings.
        </p>
      )}
    </div>
  );
}