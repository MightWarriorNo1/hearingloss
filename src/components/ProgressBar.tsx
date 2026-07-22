export default function ProgressBar({
  percent,
  showPill = true,
}: {
  percent: number;
  showPill?: boolean;
}) {
  const clamped = Math.max(0, Math.min(100, percent));
  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="relative h-1 rounded-full bg-[var(--surface-muted)]"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-[var(--accent-progress)] transition-[width] duration-300"
          style={{ width: `${clamped}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[var(--accent-progress)] transition-[left] duration-300"
          style={{ left: `${clamped}%` }}
        />
      </div>
      {showPill && (
        <div className="mt-4 flex justify-center">
          <span className="px-3 py-1 rounded-full bg-[var(--accent-pill)] text-[var(--accent-pill-text)] text-xs font-semibold">
            {Math.round(clamped)}%
          </span>
        </div>
      )}
    </div>
  );
}
