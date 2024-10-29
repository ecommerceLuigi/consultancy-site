import Head from 'next/head';
import getConfig from 'next/config';
import { useEffect, useState } from 'react';

const { publicRuntimeConfig } = getConfig();

const HeadComponent = ({ title, description }: { title: string; description: string }) => {
  const [canonicalUrl, setCanonicalUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check the current hostname
      const hostname = window.location.hostname;
      // Set the canonical URL based on the hostname
      setCanonicalUrl(
        hostname.includes('luigimoccia.ca')
          ? publicRuntimeConfig.canonicalUrlCa
          : publicRuntimeConfig.canonicalUrlCom
      );
    }
  }, []);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Add other SEO meta tags here */}
    </Head>
  );
};

export default HeadComponent;
