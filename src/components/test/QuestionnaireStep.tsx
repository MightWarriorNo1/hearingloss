"use client";

import type { Question, YesNoAnswer } from "@/lib/types";
import AnswerPill from "./AnswerPill";

export default function QuestionnaireStep({
  question,
  questionNumber,
  totalQuestions,
  currentAnswer,
  onAnswer,
}: {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  currentAnswer?: YesNoAnswer;
  onAnswer: (answer: YesNoAnswer) => void;
}) {
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
        Question {questionNumber} of {totalQuestions}
        {question.section ? ` · ${question.section}` : ""}
      </p>
      <h1 className="mt-4 text-2xl sm:text-3xl font-semibold max-w-xl mx-auto">
        {question.prompt}
      </h1>

      <ul className="mt-10 space-y-4 max-w-md mx-auto">
        <li>
          <AnswerPill
            selected={currentAnswer === "yes"}
            onClick={() => onAnswer("yes")}
          >
            Yes
          </AnswerPill>
        </li>
        <li>
          <AnswerPill
            selected={currentAnswer === "no"}
            onClick={() => onAnswer("no")}
          >
            No
          </AnswerPill>
        </li>
      </ul>
    </div>
  );
}
