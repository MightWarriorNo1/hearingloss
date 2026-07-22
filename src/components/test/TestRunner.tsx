"use client";

import { useCallback, useMemo, useReducer } from "react";
import { useRouter } from "next/navigation";
import { siteContent } from "@/config/content";
import { nextQuestionIndex } from "@/lib/scoring";
import { saveSession } from "@/lib/testStorage";
import type {
  AnswerRecord,
  AudioResponseRecord,
  YesNoAnswer,
} from "@/lib/types";
import TestShell from "../TestShell";
import QuestionnaireStep from "./QuestionnaireStep";
import AudioIntroStep from "./AudioIntroStep";
import AudioStep from "./AudioStep";

type Phase = "questionnaire" | "audio-intro" | "audio";

interface State {
  phase: Phase;
  questionIdx: number;
  audioIdx: number;
  questionnaireAnswers: AnswerRecord[];
  audioAnswers: AudioResponseRecord[];
  done: boolean;
}

type Action =
  | { type: "ANSWER_Q"; answer: YesNoAnswer }
  | { type: "START_AUDIO" }
  | { type: "ANSWER_AUDIO"; answer: YesNoAnswer }
  | { type: "BACK" };

const initialState: State = {
  phase: "questionnaire",
  questionIdx: 0,
  audioIdx: 0,
  questionnaireAnswers: [],
  audioAnswers: [],
  done: false,
};

function reducer(state: State, action: Action): State {
  const { questionnaire, audioTests } = siteContent;

  switch (action.type) {
    case "ANSWER_Q": {
      const current = questionnaire[state.questionIdx];
      if (!current) return state;
      const answers = [
        ...state.questionnaireAnswers.filter((a) => a.questionId !== current.id),
        { questionId: current.id, answer: action.answer },
      ];
      const nextIdx = nextQuestionIndex(
        state.questionIdx,
        action.answer,
        questionnaire,
      );
      if (nextIdx >= questionnaire.length) {
        return {
          ...state,
          questionnaireAnswers: answers,
          phase: audioTests.length > 0 ? "audio-intro" : "audio",
          done: audioTests.length === 0,
        };
      }
      return {
        ...state,
        questionnaireAnswers: answers,
        questionIdx: nextIdx,
      };
    }

    case "START_AUDIO":
      return { ...state, phase: "audio", audioIdx: 0 };

    case "ANSWER_AUDIO": {
      const current = audioTests[state.audioIdx];
      if (!current) return state;
      const answers = [
        ...state.audioAnswers.filter((a) => a.audioId !== current.id),
        { audioId: current.id, answer: action.answer },
      ];
      const nextIdx = state.audioIdx + 1;
      if (nextIdx >= audioTests.length) {
        return { ...state, audioAnswers: answers, done: true };
      }
      return { ...state, audioAnswers: answers, audioIdx: nextIdx };
    }

    case "BACK": {
      if (state.phase === "audio" && state.audioIdx > 0) {
        return { ...state, audioIdx: state.audioIdx - 1 };
      }
      if (state.phase === "audio" && state.audioIdx === 0) {
        return { ...state, phase: "audio-intro" };
      }
      if (state.phase === "audio-intro") {
        return {
          ...state,
          phase: "questionnaire",
          questionIdx: Math.max(0, questionnaire.length - 1),
        };
      }
      if (state.phase === "questionnaire" && state.questionIdx > 0) {
        return { ...state, questionIdx: state.questionIdx - 1 };
      }
      return state;
    }

    default:
      return state;
  }
}

function computePercent(state: State): number {
  const total =
    siteContent.questionnaire.length + siteContent.audioTests.length;
  if (total === 0) return 0;

  let completed = 0;
  if (state.phase === "questionnaire") {
    completed = state.questionIdx;
  } else if (state.phase === "audio-intro") {
    completed = siteContent.questionnaire.length;
  } else if (state.phase === "audio") {
    completed = siteContent.questionnaire.length + state.audioIdx;
  }
  if (state.done) completed = total;

  return Math.round((completed / total) * 100);
}

export default function TestRunner() {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);

  // When flow finishes, persist and redirect.
  const finalize = useCallback(() => {
    saveSession({
      questionnaireAnswers: state.questionnaireAnswers,
      audioAnswers: state.audioAnswers,
      completedAt: new Date().toISOString(),
    });
    router.push("/results");
  }, [state.questionnaireAnswers, state.audioAnswers, router]);

  if (state.done && typeof window !== "undefined") {
    // Fire in a microtask so the render commits first.
    queueMicrotask(finalize);
  }

  const percent = useMemo(() => computePercent(state), [state]);

  const handleBack = () => dispatch({ type: "BACK" });

  const isAtStart =
    state.phase === "questionnaire" && state.questionIdx === 0;

  return (
    <TestShell
      percent={percent}
      showPill
      backHref={isAtStart ? "/test" : undefined}
      onBack={isAtStart ? undefined : handleBack}
    >
      {state.phase === "questionnaire" && (
        <QuestionnaireStep
          question={siteContent.questionnaire[state.questionIdx]}
          questionNumber={state.questionIdx + 1}
          totalQuestions={siteContent.questionnaire.length}
          currentAnswer={
            state.questionnaireAnswers.find(
              (a) =>
                a.questionId ===
                siteContent.questionnaire[state.questionIdx]?.id,
            )?.answer
          }
          onAnswer={(answer) => dispatch({ type: "ANSWER_Q", answer })}
        />
      )}

      {state.phase === "audio-intro" && (
        <AudioIntroStep
          instructions={siteContent.test.audioInstructions}
          onContinue={() => dispatch({ type: "START_AUDIO" })}
        />
      )}

      {state.phase === "audio" && siteContent.audioTests[state.audioIdx] && (
        <AudioStep
          test={siteContent.audioTests[state.audioIdx]}
          index={state.audioIdx}
          total={siteContent.audioTests.length}
          currentAnswer={
            state.audioAnswers.find(
              (a) =>
                a.audioId === siteContent.audioTests[state.audioIdx]?.id,
            )?.answer
          }
          onAnswer={(answer) => dispatch({ type: "ANSWER_AUDIO", answer })}
        />
      )}

      {state.done && (
        <div className="text-center py-20">
          <p className="text-[var(--muted)]">Calculating your results…</p>
        </div>
      )}
    </TestShell>
  );
}
