import type { SiteContent } from "@/lib/types";

/**
 * Content source of truth. Real client questions and 4-tier result
 * categories are in place; homepage copy, disclaimer, privacy, and
 * audio-test spec are still placeholder pending client delivery.
 */
export const siteContent: SiteContent = {
  site: {
    // Client is providing branding/logo/name later. Placeholder for now.
    brandName: "HearWell",
    title: "HearWell — Free Online Hearing Screening",
    description:
      "A quick, private hearing screening you can take at home in about 5 minutes.",
    tagline: "Check your hearing in 5 minutes",
  },

  // ---- Placeholder — client to send homepage copy ----
  home: {
    heroHeadline: "How well are you hearing?",
    heroSubheadline:
      "Take our free online hearing screening. It only takes a few minutes, and your results are completely private.",
    ctaLabel: "Start the free test",
    features: [
      {
        title: "5 minutes",
        description: "A short questionnaire and audio test — no scheduling, no waiting.",
      },
      {
        title: "Private & free",
        description: "No account, no email required. Everything stays on your device.",
      },
      {
        title: "Instant results",
        description: "Get a clear summary of your hearing as soon as you finish.",
      },
    ],
  },

  test: {
    intro:
      "This screening has two parts: a set of questions about your hearing in everyday situations, followed by a short audio listening test.",
    questionnaireIntro:
      "Answer each question based on your hearing over the last few months.",
    audioIntro:
      "For the audio portion, please use headphones or earbuds in a quiet room.",
    audioInstructions: [
      "Put on headphones or earbuds.",
      "Set your device volume to about 50%.",
      "You'll hear a series of short tones — answer whether you heard each one.",
    ],
  },

  // ---- Placeholder disclaimer — client to send final medical wording ----
  disclaimer:
    "This screening is for informational purposes only and is not a medical diagnosis. If you have concerns about your hearing, please consult a licensed audiologist or physician.",

  /**
   * Real questions from client (Basecamp, 2026-07-24).
   *
   * Scoring rationale:
   *   Q1 overall hearing        0 (excellent) → 4 (significant difficulty)
   *   Q2 phone difficulty       0 (never)     → 4 (always)
   *   Q3 mumbling               0 (never)     → 4 (always)
   *   Q4 asymmetric hearing     0 (both same) or 1 (one ear worse) — asymmetry
   *                             is often diagnostic rather than severity-driven
   *   Q5 noisy environments     0 (never)     → 4 (always)
   *
   *   Maximum score: 17
   *
   * Client has NOT yet provided per-answer weights. These weights are
   * my best-guess placeholders — flag for review when client responds.
   */
  questionnaire: [
    {
      id: "q1",
      section: "Self-assessment",
      prompt: "How would you rate your overall hearing ability?",
      options: [
        { id: "significant", label: "I experience significant difficulty hearing", weight: 4 },
        { id: "some", label: "I experience some difficulty hearing", weight: 3 },
        { id: "minor", label: "I experience minor difficulty hearing", weight: 2 },
        { id: "good", label: "My hearing is good", weight: 1 },
        { id: "excellent", label: "My hearing is excellent", weight: 0 },
      ],
    },
    {
      id: "q2",
      section: "Everyday situations",
      prompt:
        "How often do you have difficulty hearing during phone conversations?",
      options: [
        { id: "always", label: "Always", weight: 4 },
        { id: "frequently", label: "Frequently", weight: 3 },
        { id: "sometimes", label: "Sometimes", weight: 2 },
        { id: "rarely", label: "Rarely", weight: 1 },
        { id: "never", label: "Never", weight: 0 },
      ],
    },
    {
      id: "q3",
      section: "Everyday situations",
      prompt:
        "How often does it seem that people are mumbling, even in quiet settings?",
      options: [
        { id: "always", label: "Always", weight: 4 },
        { id: "frequently", label: "Frequently", weight: 3 },
        { id: "sometimes", label: "Sometimes", weight: 2 },
        { id: "rarely", label: "Rarely", weight: 1 },
        { id: "never", label: "Never", weight: 0 },
      ],
    },
    {
      id: "q4",
      section: "Self-assessment",
      prompt: "Do you hear better with one ear than the other?",
      options: [
        { id: "left", label: "My left ear hears better", weight: 1 },
        { id: "right", label: "My right ear hears better", weight: 1 },
        { id: "same", label: "Both ears hear about the same", weight: 0 },
      ],
    },
    {
      id: "q5",
      section: "Everyday situations",
      prompt:
        "How often do you have difficulty understanding speech in noisy environments (restaurants, crowds, background noise)?",
      options: [
        { id: "always", label: "Always", weight: 4 },
        { id: "frequently", label: "Frequently", weight: 3 },
        { id: "sometimes", label: "Sometimes", weight: 2 },
        { id: "rarely", label: "Rarely", weight: 1 },
        { id: "never", label: "Never", weight: 0 },
      ],
    },
  ],

  /**
   * PLACEHOLDER audio tests. Client's real spec is:
   *   "Right Ear + Left Ear assessments, each with three volume adjustment
   *    tasks using +/- controls (max comfortable loudness, speech clarity
   *    threshold, three barely audible sound tests)."
   *
   * This requires a very different UI (per-ear channel routing, +/- volume
   * adjustment, threshold detection). Awaiting client clarification on
   * the exact mechanism before rebuilding — kept as tone screening in the
   * interim so the flow remains demonstrable.
   */
  audioTests: [
    { id: "a1", frequencyHz: 500,  volume: 0.15, durationMs: 1200, prompt: "Did you hear the tone?", heardWeight: 0, notHeardWeight: 1 },
    { id: "a2", frequencyHz: 1000, volume: 0.12, durationMs: 1200, prompt: "Did you hear the tone?", heardWeight: 0, notHeardWeight: 1 },
    { id: "a3", frequencyHz: 2000, volume: 0.10, durationMs: 1200, prompt: "Did you hear the tone?", heardWeight: 0, notHeardWeight: 1 },
    { id: "a4", frequencyHz: 4000, volume: 0.08, durationMs: 1200, prompt: "Did you hear the tone?", heardWeight: 0, notHeardWeight: 1 },
    { id: "a5", frequencyHz: 8000, volume: 0.08, durationMs: 1200, prompt: "Did you hear the tone?", heardWeight: 0, notHeardWeight: 1 },
  ],

  /**
   * 4 result categories per client:
   *   No indication / Mild / Moderate / Severe
   *
   * Score thresholds are placeholders — client should confirm cut-offs.
   * Total possible score: 17 (questionnaire) + 5 (audio) = 22
   */
  results: [
    {
      id: "none",
      label: "No indication of hearing loss",
      minScore: 0,
      maxScore: 4,
      headline: "Your hearing appears healthy.",
      description:
        "Your responses suggest your hearing is likely within a normal range.",
      recommendation:
        "Continue protecting your hearing from loud environments and screen again in a year.",
      tone: "success",
    },
    {
      id: "mild",
      label: "Mild hearing loss",
      minScore: 5,
      maxScore: 9,
      headline: "You may have mild hearing loss.",
      description:
        "Your responses suggest you may be experiencing some early signs of hearing difficulty.",
      recommendation:
        "Consider scheduling a full hearing evaluation with a licensed audiologist.",
      ctaLabel: "Learn about next steps",
      ctaHref: "#",
      tone: "warning",
    },
    {
      id: "moderate",
      label: "Moderate hearing loss",
      minScore: 10,
      maxScore: 15,
      headline: "You may have moderate hearing loss.",
      description:
        "Your responses suggest meaningful hearing difficulty that could benefit from professional support.",
      recommendation:
        "We encourage you to book a hearing evaluation with a licensed audiologist.",
      ctaLabel: "Find an audiologist",
      ctaHref: "#",
      tone: "warning",
    },
    {
      id: "severe",
      label: "Severe hearing loss",
      minScore: 16,
      maxScore: 100,
      headline: "You may have severe hearing loss.",
      description:
        "Your responses suggest significant hearing difficulty across multiple everyday situations.",
      recommendation:
        "We strongly recommend booking a full hearing evaluation with an audiologist as soon as possible.",
      ctaLabel: "Book a hearing evaluation",
      ctaHref: "#",
      tone: "danger",
    },
  ],

  contact: {
    email: "hello@example.com",
  },
};
