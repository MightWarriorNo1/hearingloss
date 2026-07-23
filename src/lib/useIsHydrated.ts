"use client";

import { useSyncExternalStore } from "react";

const noSubscribe = () => () => {};
const trueOnClient = () => true;
const falseOnServer = () => false;

/**
 * Returns false during SSR and the initial client render (hydration),
 * then true once React has committed post-hydration. Use to gate any
 * rendering that depends on browser-only APIs (sessionStorage, window,
 * etc.) so server and hydration output match.
 */
export function useIsHydrated(): boolean {
  return useSyncExternalStore(noSubscribe, trueOnClient, falseOnServer);
}
