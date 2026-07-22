import type { SiteContent } from "@/lib/types";

/**
 * Placeholder content. Replace values here as the client delivers copy,
 * questions, audio specs, and result recommendations. All UI reads from
 * this single source of truth.
 */
export const siteContent: SiteContent = {
  site: {
    brandName: "HearWell",
    title: "HearWell — Free Online Hearing Screening",
    description:
      "A quick, private hearing screening you can take at home in about 5 minutes.",
    tagline: "Check your hearing in 5 minutes",
  },

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
      "This screening has two parts: a set of yes/no questions about your hearing in everyday situations, followed by a short audio listening test.",
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

  disclaimer:
    "This screening is for informational purposes only and is not a medical diagnosis. If you have concerns about your hearing, please consult a licensed audiologist or physician.",

  // ---- Placeholder questionnaire — swap in real questions from client ----
  questionnaire: [
    {
      id: "q1",
      section: "Daily Situations",
      prompt: "Do you find it difficult to follow a conversation in a noisy restaurant?",
      yesWeight: 1,
      noWeight: 0,
    },
    {
      id: "q2",
      section: "Daily Situations",
      prompt: "Do people often seem to mumble when they speak to you?",
      yesWeight: 1,
      noWeight: 0,
    },
    {
      id: "q3",
      section: "Daily Situations",
      prompt: "Do you frequently turn up the TV or radio louder than others prefer?",
      yesWeight: 1,
      noWeight: 0,
    },
    {
      id: "q4",
      section: "Daily Situations",
      prompt: "Do you have trouble hearing on the phone?",
      yesWeight: 1,
      noWeight: 0,
    },
    {
      id: "q5",
      section: "Medical History",
      prompt: "Have you been regularly exposed to loud noise (concerts, machinery, firearms)?",
      yesWeight: 1,
      noWeight: 0,
    },
    {
      id: "q6",
      section: "Medical History",
      prompt: "Do you experience ringing or buzzing in your ears (tinnitus)?",
      yesWeight: 1,
      noWeight: 0,
    },
  ],

  // ---- Placeholder audio tests — swap in real files/frequencies from client ----
  audioTests: [
    {
      id: "a1",
      frequencyHz: 500,
      volume: 0.15,
      durationMs: 1200,
      prompt: "Did you hear the tone?",
      heardWeight: 0,
      notHeardWeight: 1,
    },
    {
      id: "a2",
      frequencyHz: 1000,
      volume: 0.12,
      durationMs: 1200,
      prompt: "Did you hear the tone?",
      heardWeight: 0,
      notHeardWeight: 1,
    },
    {
      id: "a3",
      frequencyHz: 2000,
      volume: 0.1,
      durationMs: 1200,
      prompt: "Did you hear the tone?",
      heardWeight: 0,
      notHeardWeight: 1,
    },
    {
      id: "a4",
      frequencyHz: 4000,
      volume: 0.08,
      durationMs: 1200,
      prompt: "Did you hear the tone?",
      heardWeight: 0,
      notHeardWeight: 1,
    },
    {
      id: "a5",
      frequencyHz: 8000,
      volume: 0.08,
      durationMs: 1200,
      prompt: "Did you hear the tone?",
      heardWeight: 0,
      notHeardWeight: 1,
    },
  ],

  // ---- Placeholder result categories — swap in client copy + real thresholds ----
  results: [
    {
      id: "none",
      label: "No signs of hearing loss",
      minScore: 0,
      maxScore: 2,
      headline: "Your hearing appears healthy.",
      description:
        "Your responses suggest your hearing is likely within a normal range.",
      recommendation:
        "Continue protecting your hearing from loud environments and screen again in a year.",
      tone: "success",
    },
    {
      id: "mild",
      label: "Possible mild hearing loss",
      minScore: 3,
      maxScore: 5,
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
      id: "moderate-severe",
      label: "Possible moderate to severe hearing loss",
      minScore: 6,
      maxScore: 100,
      headline: "You may have significant hearing loss.",
      description:
        "Your responses suggest you may be experiencing meaningful hearing difficulty.",
      recommendation:
        "We strongly encourage you to book a full hearing evaluation with an audiologist soon.",
      ctaLabel: "Find an audiologist",
      ctaHref: "#",
      tone: "danger",
    },
  ],

  contact: {
    email: "hello@example.com",
  },
};
