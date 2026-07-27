"use client";

import Link from "next/link";
import { siteContent } from "@/config/content";
import { scoreAll } from "@/lib/scoring";
import { clearSession, loadSession } from "@/lib/testStorage";
import { useIsHydrated } from "@/lib/useIsHydrated";
import { LinkButton } from "@/components/Button";
import TestShell from "@/components/TestShell";
import { CheckIcon } from "@/components/Icons";

const toneStyles: Record<string, string> = {
  success:
    "bg-[color-mix(in_srgb,var(--success)_12%,transparent)] text-[var(--success)]",
  warning:
    "bg-[color-mix(in_srgb,var(--warning)_18%,transparent)] text-[color-mix(in_srgb,var(--warning)_60%,black)]",
  danger:
    "bg-[color-mix(in_srgb,var(--danger)_12%,transparent)] text-[var(--danger)]",
};

export default function ResultsPage() {
  const isHydrated = useIsHydrated();

  // Server + first client render — deterministic loading state.
  if (!isHydrated) {
    return (
      <TestShell percent={100}>
        <div className="py-20 text-center text-[var(--muted)]">Loading…</div>
      </TestShell>
    );
  }

  const session = loadSession();
  if (!session) {
    return (
      <TestShell percent={0}>
        <div className="bg-[var(--surface)] rounded-3xl p-8 sm:p-12 shadow-sm text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">No results yet</h1>
          <p className="mt-3 text-[var(--muted)] max-w-md mx-auto">
            You haven&apos;t completed the hearing test yet. Take the test to
            see your results.
          </p>
          <div className="mt-8 flex justify-center">
            <LinkButton href="/test" size="lg">
              Start the test
            </LinkButton>
          </div>
        </div>
      </TestShell>
    );
  }

  const { category, totalScore, questionnaireScore, audioScore } = scoreAll(
    session.questionnaireAnswers,
    session.audioAnswers,
    siteContent,
  );

  return (
    <TestShell percent={100}>
      <div className="bg-[var(--surface)] rounded-3xl p-8 sm:p-12 shadow-sm a-fade">
        <div className="text-center">
          <span
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[color-mix(in_srgb,var(--success)_15%,transparent)] text-[var(--success)] a-pop"
            style={{ ["--anim-delay" as string]: "0ms" } as React.CSSProperties}
          >
            <CheckIcon size={26} />
          </span>
          <p
            className="mt-4 text-xs uppercase tracking-wider text-[var(--muted)] font-semibold a-drop"
            style={{ ["--anim-delay" as string]: "180ms" } as React.CSSProperties}
          >
            Your Result
          </p>
          <h1
            className="mt-2 text-3xl sm:text-4xl font-bold a-blur"
            style={{ ["--anim-delay" as string]: "260ms" } as React.CSSProperties}
          >
            {category ? category.headline : "Test complete"}
          </h1>
          {category && (
            <span
              className={`mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold a-scale ${
                toneStyles[category.tone] ?? toneStyles.warning
              }`}
              style={{ ["--anim-delay" as string]: "380ms" } as React.CSSProperties}
            >
              {category.label}
            </span>
          )}
        </div>

        {category && (
          <div
            className="mt-8 max-w-lg mx-auto text-center space-y-4 a-rise"
            style={{ ["--anim-delay" as string]: "480ms" } as React.CSSProperties}
          >
            <p className="text-base leading-relaxed">{category.description}</p>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {category.recommendation}
            </p>
            {category.ctaLabel && category.ctaHref && (
              <div className="pt-2">
                <LinkButton href={category.ctaHref} size="lg">
                  {category.ctaLabel}
                </LinkButton>
              </div>
            )}
          </div>
        )}

        <div
          className="mt-10 max-w-md mx-auto rounded-2xl bg-[var(--surface-muted)] p-5 a-scale"
          style={{ ["--anim-delay" as string]: "620ms" } as React.CSSProperties}
        >
          <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold text-center">
            Score breakdown
          </p>
          <dl className="mt-3 grid grid-cols-3 gap-3 text-center">
            <div>
              <dt className="text-xs text-[var(--muted)]">Questionnaire</dt>
              <dd className="mt-1 text-lg font-semibold">
                {questionnaireScore}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[var(--muted)]">Audio</dt>
              <dd className="mt-1 text-lg font-semibold">{audioScore}</dd>
            </div>
            <div>
              <dt className="text-xs text-[var(--muted)]">Total</dt>
              <dd className="mt-1 text-lg font-semibold">{totalScore}</dd>
            </div>
          </dl>
        </div>

        <p className="mt-6 text-center text-sm italic text-[var(--muted)] max-w-lg mx-auto">
          *This test is a screener designed to give you general information
          about your hearing. It is not a diagnostic test or medical assessment.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/test/start" variant="outline">
            Retake test
          </LinkButton>
          <Link
            href="/"
            className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
            onClick={() => clearSession()}
          >
            Back to home
          </Link>
        </div>
      </div>
    </TestShell>
  );
}
