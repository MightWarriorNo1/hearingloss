"use client";

import type { CSSProperties } from "react";
import type { Question } from "@/lib/types";
import AnswerPill from "./AnswerPill";

const delay = (ms: number): CSSProperties =>
  ({ ["--anim-delay" as string]: `${ms}ms` }) as CSSProperties;

export default function QuestionnaireStep({
  question,
  questionNumber,
  totalQuestions,
  currentOptionId,
  onAnswer,
}: {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  currentOptionId?: string;
  onAnswer: (optionId: string) => void;
}) {
  return (
    <div className="text-center">
      <p
        className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold a-drop"
        style={delay(0)}
      >
        Question {questionNumber} of {totalQuestions}
        {question.section ? ` · ${question.section}` : ""}
      </p>

      <h1
        className="mt-4 text-2xl sm:text-3xl font-semibold max-w-xl mx-auto a-blur"
        style={delay(100)}
      >
        {question.prompt}
      </h1>

      <ul className="mt-10 space-y-3 max-w-md mx-auto">
        {question.options.map((option, i) => {
          const animClass = i % 2 === 0 ? "a-slide-left" : "a-slide-right";
          return (
            <li
              key={option.id}
              className={animClass}
              style={delay(220 + i * 70)}
            >
              <AnswerPill
                selected={currentOptionId === option.id}
                onClick={() => onAnswer(option.id)}
              >
                {option.label}
              </AnswerPill>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
