import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    canonicalUrlCom: process.env.CANONICAL_URL_COM,
    canonicalUrlCa: process.env.CANONICAL_URL_CA,
  },
  /* other config options here if needed */
};

export default nextConfig;
