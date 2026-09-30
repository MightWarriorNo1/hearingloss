import type { NextConfig } from "next";
import { EMBED_FRAME_ANCESTORS } from "./src/lib/testFlowPaths";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Allow Fleming Medical (and self) to iframe the standalone test.
        source: "/embed/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors ${EMBED_FRAME_ANCESTORS.join(" ")}`,
          },
        ],
      },
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors ${EMBED_FRAME_ANCESTORS.join(" ")}`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
