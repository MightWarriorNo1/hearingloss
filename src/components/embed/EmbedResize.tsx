"use client";

import { useEffect } from "react";

const MESSAGE_TYPE = "hearing-test:resize";

/**
 * Posts the document height to the parent window so CorePortal can
 * optionally auto-size the iframe. Safe no-op when not framed.
 */
export default function EmbedResize() {
  useEffect(() => {
    if (typeof window === "undefined" || window.parent === window) return;

    const postHeight = () => {
      const height = Math.ceil(
        Math.max(
          document.documentElement.scrollHeight,
          document.body?.scrollHeight ?? 0,
        ),
      );
      // Height-only message; * is fine and avoids origin mismatches (www vs apex).
      window.parent.postMessage({ type: MESSAGE_TYPE, height }, "*");
    };

    postHeight();

    const observer = new ResizeObserver(postHeight);
    observer.observe(document.documentElement);

    window.addEventListener("load", postHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("load", postHeight);
    };
  }, []);

  return null;
}

export { MESSAGE_TYPE as EMBED_RESIZE_MESSAGE_TYPE };
