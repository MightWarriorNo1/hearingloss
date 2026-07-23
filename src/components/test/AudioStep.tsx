"use client";

import { useEffect, useRef, useState } from "react";
import type { AudioTest, YesNoAnswer } from "@/lib/types";
import { playTone } from "@/lib/audio";
import AnswerPill from "./AnswerPill";
import { PlayIcon } from "../Icons";

export default function AudioStep({
  test,
  index,
  total,
  currentAnswer,
  onAnswer,
}: {
  test: AudioTest;
  index: number;
  total: number;
  currentAnswer?: YesNoAnswer;
  onAnswer: (answer: YesNoAnswer) => void;
}) {
  const [playing, setPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const activeTestId = useRef<string>("");

  // Reset per-question play state when the test changes.
  useEffect(() => {
    if (activeTestId.current !== test.id) {
      activeTestId.current = test.id;
      setHasPlayed(false);
      setPlaying(false);
    }
  }, [test.id]);

  const handlePlay = async () => {
    if (playing) return;
    setPlaying(true);
    try {
      await playTone({
        frequencyHz: test.frequencyHz,
        volume: test.volume,
        durationMs: test.durationMs,
      });
      setHasPlayed(true);
    } finally {
      setPlaying(false);
    }
  };

  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
        Audio {index + 1} of {total}
      </p>
      <h1 className="mt-4 text-2xl sm:text-3xl font-semibold">
        {test.prompt}
      </h1>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={handlePlay}
          disabled={playing}
          aria-label="Play tone"
          className={`relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-[var(--cta)] text-[var(--cta-foreground)] transition-transform hover:scale-105 disabled:opacity-70 ${
            playing ? "animate-pulse" : ""
          }`}
        >
          <PlayIcon size={36} />
        </button>
      </div>

      <p className="mt-4 text-sm text-[var(--muted)]">
        {playing
          ? "Playing…"
          : hasPlayed
            ? "Tone finished. Did you hear it?"
            : "Tap to play the tone"}
      </p>

      <ul className="mt-10 space-y-4 max-w-md mx-auto">
        <li className="step-rise" style={{ ["--step-delay" as string]: "80ms" }}>
          <AnswerPill
            selected={currentAnswer === "yes"}
            onClick={() => onAnswer("yes")}
            disabled={playing}
          >
            Yes, I heard it
          </AnswerPill>
        </li>
        <li className="step-rise" style={{ ["--step-delay" as string]: "160ms" }}>
          <AnswerPill
            selected={currentAnswer === "no"}
            onClick={() => onAnswer("no")}
            disabled={playing}
          >
            No, I didn&apos;t hear anything
          </AnswerPill>
        </li>
      </ul>
    </div>
  );
}
