import type { ReactNode } from "react";

export default function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-6xl mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </section>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 ${className}`}
    >
      {children}
    </div>
  );
}
