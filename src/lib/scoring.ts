import type {
  AnswerRecord,
  AudioResponseRecord,
  AudioTest,
  Question,
  ResultCategory,
  SiteContent,
} from "./types";

export function scoreQuestionnaire(
  answers: AnswerRecord[],
  questions: Question[],
): number {
  const byId = new Map(questions.map((q) => [q.id, q]));
  return answers.reduce((sum, { questionId, answer }) => {
    const q = byId.get(questionId);
    if (!q) return sum;
    return sum + (answer === "yes" ? q.yesWeight : q.noWeight);
  }, 0);
}

export function scoreAudio(
  responses: AudioResponseRecord[],
  tests: AudioTest[],
): number {
  const byId = new Map(tests.map((t) => [t.id, t]));
  return responses.reduce((sum, { audioId, answer }) => {
    const t = byId.get(audioId);
    if (!t) return sum;
    return sum + (answer === "yes" ? t.heardWeight : t.notHeardWeight);
  }, 0);
}

export function findCategory(
  score: number,
  categories: ResultCategory[],
): ResultCategory | undefined {
  return categories.find((c) => score >= c.minScore && score <= c.maxScore);
}

export interface ScoreBreakdown {
  questionnaireScore: number;
  audioScore: number;
  totalScore: number;
  category?: ResultCategory;
}

export function scoreAll(
  questionnaireAnswers: AnswerRecord[],
  audioAnswers: AudioResponseRecord[],
  content: SiteContent,
): ScoreBreakdown {
  const questionnaireScore = scoreQuestionnaire(
    questionnaireAnswers,
    content.questionnaire,
  );
  const audioScore = scoreAudio(audioAnswers, content.audioTests);
  const totalScore = questionnaireScore + audioScore;
  return {
    questionnaireScore,
    audioScore,
    totalScore,
    category: findCategory(totalScore, content.results),
  };
}

/**
 * Follow branching to find the next question index. Falls back to
 * sequential order if no branching rule applies.
 */
export function nextQuestionIndex(
  currentIndex: number,
  answer: "yes" | "no",
  questions: Question[],
): number {
  const current = questions[currentIndex];
  const targetId =
    answer === "yes" ? current?.branch?.onYes : current?.branch?.onNo;
  if (targetId) {
    const idx = questions.findIndex((q) => q.id === targetId);
    if (idx >= 0) return idx;
  }
  return currentIndex + 1;
}
