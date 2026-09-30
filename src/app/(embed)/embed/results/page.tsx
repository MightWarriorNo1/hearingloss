"use client";

import ResultsView from "@/components/test/ResultsView";
import { embedTestPaths } from "@/lib/testFlowPaths";

export default function EmbedResultsPage() {
  return (
    <ResultsView paths={embedTestPaths} ctaTarget="_top" />
  );
}
