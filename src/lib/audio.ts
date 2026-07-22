/**
 * Web Audio API tone generator. Plays a single sine tone at a target
 * frequency and gain, with short fade-in/out to prevent audible clicks.
 * Returns a Promise that resolves when playback ends.
 *
 * Must be called in response to a user gesture (browsers block audio
 * contexts otherwise). Handle the promise for cleanup.
 */
export async function playTone({
  frequencyHz,
  volume,
  durationMs,
}: {
  frequencyHz: number;
  volume: number;
  durationMs: number;
}): Promise<void> {
  if (typeof window === "undefined") return;

  const AudioCtx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext })
      .webkitAudioContext;
  if (!AudioCtx) return;

  const ctx = new AudioCtx();
  // Some browsers start the context suspended until an explicit resume.
  if (ctx.state === "suspended") {
    await ctx.resume();
  }

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = frequencyHz;

  const now = ctx.currentTime;
  const durationSec = durationMs / 1000;
  const fade = 0.03;

  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume, now + fade);
  gain.gain.setValueAtTime(volume, now + durationSec - fade);
  gain.gain.linearRampToValueAtTime(0, now + durationSec);

  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start(now);
  oscillator.stop(now + durationSec + 0.05);

  await new Promise<void>((resolve) => {
    oscillator.onended = () => resolve();
  });

  await ctx.close();
}
