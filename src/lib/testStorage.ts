import type { AnswerRecord, AudioResponseRecord } from "./types";

const KEY = "hl:session";

export interface StoredSession {
  questionnaireAnswers: AnswerRecord[];
  audioAnswers: AudioResponseRecord[];
  completedAt: string;
}

// Snapshot cache — required so useSyncExternalStore consumers get a
// stable reference across calls (React compares with Object.is).
let cachedRaw: string | null = null;
let cachedSession: StoredSession | null = null;
let cachePrimed = false;

function readRaw(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return sessionStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function saveSession(session: StoredSession): void {
  if (typeof window === "undefined") return;
  const raw = JSON.stringify(session);
  try {
    sessionStorage.setItem(KEY, raw);
  } catch {
    // storage may be disabled; keep in-memory cache anyway
  }
  cachedRaw = raw;
  cachedSession = session;
  cachePrimed = true;
}

export function loadSession(): StoredSession | null {
  if (typeof window === "undefined") return null;
  const raw = readRaw();
  if (cachePrimed && raw === cachedRaw) return cachedSession;

  cachedRaw = raw;
  cachePrimed = true;
  if (!raw) {
    cachedSession = null;
    return null;
  }
  try {
    cachedSession = JSON.parse(raw) as StoredSession;
  } catch {
    cachedSession = null;
  }
  return cachedSession;
}

export function clearSession(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    // no-op
  }
  cachedRaw = null;
  cachedSession = null;
  cachePrimed = true;
}
