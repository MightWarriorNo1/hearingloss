/** Route prefixes used by the full site vs the iframe embed. */
export interface TestFlowPaths {
  intro: string;
  start: string;
  results: string;
}

export const siteTestPaths: TestFlowPaths = {
  intro: "/test",
  start: "/test/start",
  results: "/results",
};

export const embedTestPaths: TestFlowPaths = {
  intro: "/embed",
  start: "/embed/start",
  results: "/embed/results",
};

/** Parent sites allowed to iframe the embed experience. */
export const EMBED_FRAME_ANCESTORS = [
  "'self'",
  "https://www.flemingmedical.ie",
  "https://flemingmedical.ie",
] as const;
