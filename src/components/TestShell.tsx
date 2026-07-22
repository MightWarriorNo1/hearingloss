"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import ProgressBar from "./ProgressBar";
import { ArrowLeftIcon } from "./Icons";

interface Props {
  percent: number;
  backHref?: string;
  onBack?: () => void;
  showPill?: boolean;
  children: ReactNode;
}

export default function TestShell({
  percent,
  backHref = "/",
  onBack,
  showPill = true,
  children,
}: Props) {
  const backContent = (
    <>
      <ArrowLeftIcon size={16} />
      Back
    </>
  );
  const backClass =
    "inline-flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] hover:text-[var(--muted)]";

  return (
    <div className="min-h-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="relative flex items-start">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className={`absolute left-0 top-0 ${backClass}`}
            >
              {backContent}
            </button>
          ) : (
            <Link href={backHref} className={`absolute left-0 top-0 ${backClass}`}>
              {backContent}
            </Link>
          )}
          <div className="flex-1 text-center">
            <p className="text-sm text-[var(--foreground)]">
              Complete our{" "}
              <span className="font-semibold">3-minute Free hearing Test</span>{" "}
              to get personalized results.
            </p>
            <div className="mt-4">
              <ProgressBar percent={percent} showPill={showPill} />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {children}
      </div>
    </div>
  );
}
