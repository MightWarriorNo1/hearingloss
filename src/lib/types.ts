export type YesNoAnswer = "yes" | "no";

export interface Question {
  id: string;
  section?: string;
  prompt: string;
  yesWeight: number;
  noWeight: number;
  branch?: {
    onYes?: string;
    onNo?: string;
  };
}

export interface AudioTest {
  id: string;
  frequencyHz: number;
  volume: number;
  durationMs: number;
  prompt: string;
  heardWeight: number;
  notHeardWeight: number;
}

export interface ResultCategory {
  id: string;
  label: string;
  minScore: number;
  maxScore: number;
  headline: string;
  description: string;
  recommendation: string;
  ctaLabel?: string;
  ctaHref?: string;
  tone: "success" | "warning" | "danger";
}

export interface SiteContent {
  site: {
    brandName: string;
    title: string;
    description: string;
    tagline: string;
  };
  home: {
    heroHeadline: string;
    heroSubheadline: string;
    ctaLabel: string;
    features: { title: string; description: string }[];
  };
  test: {
    intro: string;
    questionnaireIntro: string;
    audioIntro: string;
    audioInstructions: string[];
  };
  disclaimer: string;
  questionnaire: Question[];
  audioTests: AudioTest[];
  results: ResultCategory[];
  contact: {
    email?: string;
    phone?: string;
  };
}

export interface AnswerRecord {
  questionId: string;
  answer: YesNoAnswer;
}

export interface AudioResponseRecord {
  audioId: string;
  answer: YesNoAnswer;
}
