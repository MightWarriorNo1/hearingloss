export type YesNoAnswer = "yes" | "no";

export interface QuestionOption {
  id: string;
  label: string;
  weight: number;
}

export interface Question {
  id: string;
  section?: string;
  prompt: string;
  options: QuestionOption[];
  /** Optional branching: key = option id, value = next question id to jump to. */
  branch?: Record<string, string>;
}

export interface AudioTest {
  id: string;
  frequencyHz: number;
  volume: number;
  durationMs: number;
  prompt: string;
  /** Points added when the user reports hearing the tone. */
  heardWeight: number;
  /** Points added when the user reports not hearing the tone. */
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

export interface PageSection {
  title?: string;
  paragraphs?: string[];
  list?: string[];
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
  optionId: string;
}

export interface AudioResponseRecord {
  audioId: string;
  answer: YesNoAnswer;
}
