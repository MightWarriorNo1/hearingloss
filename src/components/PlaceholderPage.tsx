import type { ReactNode } from "react";
import Section from "./Section";

/**
 * Standard shell for pages that are stubbed pending client content.
 * Shows a clear "awaiting content" banner so nothing accidentally ships
 * with the placeholder copy still in place.
 */
export default function PlaceholderPage({
  title,
  subtitle,
  needsFromClient,
  children,
}: {
  title: string;
  subtitle?: string;
  needsFromClient?: string[];
  children?: ReactNode;
}) {
  return (
    <Section className="py-16 sm:py-24 max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] text-xs font-semibold uppercase tracking-wider">
        Placeholder · content pending
      </div>

      <h1 className="mt-5 text-3xl sm:text-5xl font-bold tracking-tight">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-4 text-lg text-[var(--muted)]">{subtitle}</p>
      )}

      {needsFromClient && needsFromClient.length > 0 && (
        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
            Awaiting from client
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {needsFromClient.map((item) => (
              <li key={item} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {children && (
        <div className="mt-10 prose prose-slate max-w-none text-[var(--foreground)]">
          {children}
        </div>
      )}
    </Section>
  );
}
