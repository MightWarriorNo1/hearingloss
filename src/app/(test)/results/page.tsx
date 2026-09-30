"use client";

import ResultsView from "@/components/test/ResultsView";
import { siteTestPaths } from "@/lib/testFlowPaths";

export default function ResultsPage() {
  return (
    <ResultsView paths={siteTestPaths} backHref="/" homeHref="/" />
  );
}
