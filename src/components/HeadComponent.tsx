"use client";

import Head from 'next/head';

interface HeadComponentProps {
  title: string;
  description: string;
  canonicalUrl?: string;  // Make canonicalUrl optional
}

const HeadComponent = ({ title, description, canonicalUrl }: HeadComponentProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Head>
  );
};

export default HeadComponent;
