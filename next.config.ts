import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    canonicalUrlCom: process.env.CANONICAL_URL_COM,
    canonicalUrlCa: process.env.CANONICAL_URL_CA,
  },
};

export default nextConfig;
