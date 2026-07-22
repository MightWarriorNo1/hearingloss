"use client";

import type { ReactNode } from "react";

export default function AnswerPill({
  children,
  onClick,
  selected = false,
  disabled = false,
}: {
  children: ReactNode;
  onClick: () => void;
  selected?: boolean;
  disabled?: boolean;
}) {
  const base =
    "w-full rounded-full py-4 text-center font-semibold transition-colors border";
  const state = selected
    ? "bg-[var(--cta)] text-[var(--cta-foreground)] border-[var(--cta)]"
    : "bg-[var(--surface)] text-[var(--foreground)] border-[var(--border-strong)] hover:bg-[var(--surface-muted)]";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${state} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
