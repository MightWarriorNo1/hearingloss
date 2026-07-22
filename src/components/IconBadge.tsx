import type { ReactNode } from "react";

export default function IconBadge({
  children,
  size = 56,
}: {
  children: ReactNode;
  size?: number;
}) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full border-2 border-[var(--border-strong)] bg-[var(--surface)] text-[var(--foreground)] shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {children}
    </span>
  );
}

export function FreeBadge({ size = 56 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full border-2 border-[var(--border-strong)] bg-[var(--border-strong)] text-[var(--cta-foreground)] shrink-0 text-[10px] font-bold tracking-wider"
      style={{ width: size, height: size }}
      aria-hidden
    >
      FREE
    </span>
  );
}
