// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    canonicalUrlCom: process.env.CANONICAL_URL_COM,
    canonicalUrlCa: process.env.CANONICAL_URL_CA,
    gaIdCom: process.env.GA_ID_COM,
    gaIdCa: process.env.GA_ID_CA,
    metaTitleCom: process.env.META_TITLE_COM,
    metaTitleCa: process.env.META_TITLE_CA,
    metaDescriptionCom: process.env.META_DESCRIPTION_COM,
    metaDescriptionCa: process.env.META_DESCRIPTION_CA,
  },
};

export default nextConfig;
