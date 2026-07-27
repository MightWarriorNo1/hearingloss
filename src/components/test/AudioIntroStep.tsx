"use client";

import { useState, type CSSProperties } from "react";
import { Button } from "../Button";
import { HeadphonesIcon, SpeakerIcon, ArrowRightIcon } from "../Icons";
import { playTone } from "@/lib/audio";

const CALIBRATION_TONE = {
  frequencyHz: 1000,
  volume: 0.15,
  durationMs: 1500,
};

const delay = (ms: number): CSSProperties =>
  ({ ["--anim-delay" as string]: `${ms}ms` }) as CSSProperties;

export default function AudioIntroStep({
  instructions,
  onContinue,
}: {
  instructions: string[];
  onContinue: () => void;
}) {
  const [playing, setPlaying] = useState(false);

  const handlePlayTest = async () => {
    if (playing) return;
    setPlaying(true);
    try {
      await playTone(CALIBRATION_TONE);
    } finally {
      setPlaying(false);
    }
  };

  return (
    <div className="bg-[var(--surface)] rounded-3xl p-8 sm:p-12 shadow-sm a-fade">
      <div className="flex justify-center a-pop" style={delay(0)}>
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[var(--border-strong)] bg-[var(--surface)]">
          <HeadphonesIcon size={28} />
        </span>
      </div>

      <h1
        className="mt-6 text-2xl sm:text-3xl font-bold text-center a-drop"
        style={delay(140)}
      >
        Audio Test — Get Ready
      </h1>

      <p
        className="mt-3 text-center text-[var(--muted)] max-w-md mx-auto a-fade"
        style={delay(240)}
      >
        Please follow these steps before we begin. The test only takes a minute.
      </p>

      <ol className="mt-8 space-y-4 max-w-md mx-auto">
        {instructions.map((line, i) => (
          <li
            key={i}
            className="flex items-start gap-3 a-rise"
            style={delay(340 + i * 90)}
          >
            <span className="mt-0.5 inline-flex items-center justify-center shrink-0 w-6 h-6 rounded-full bg-[var(--cta)] text-[var(--cta-foreground)] text-xs font-semibold">
              {i + 1}
            </span>
            <span className="text-sm sm:text-base">{line}</span>
          </li>
        ))}
      </ol>

      <div
        className="mt-10 max-w-md mx-auto p-5 rounded-2xl bg-[var(--surface-muted)] text-center a-scale"
        style={delay(340 + instructions.length * 90 + 120)}
      >
        <p className="text-sm text-[var(--muted)] mb-3">
          Play a reference tone to check your volume.
        </p>
        <Button
          variant="outline"
          onClick={handlePlayTest}
          disabled={playing}
        >
          <SpeakerIcon size={18} />
          {playing ? "Playing…" : "Play test tone"}
        </Button>
      </div>

      <div
        className="mt-10 flex justify-center a-rise"
        style={delay(340 + instructions.length * 90 + 260)}
      >
        <Button size="lg" onClick={onContinue}>
          I&apos;m ready — Start audio test
          <ArrowRightIcon size={18} />
        </Button>
      </div>
    </div>
  );
}
