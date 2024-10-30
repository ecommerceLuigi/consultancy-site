// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    canonicalUrlCom: process.env.CANONICAL_URL_COM,
    canonicalUrlCa: process.env.CANONICAL_URL_CA,
    // Add more environment-based configurations here if needed
  },
};

export default nextConfig;
