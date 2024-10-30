// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import getConfig from "next/config";
import { headers } from "next/headers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const { publicRuntimeConfig } = getConfig();

function getConfigForDomain(domain: string) {
  if (domain === "ca") {
    return {
      canonicalUrl: publicRuntimeConfig.canonicalUrlCa,
      gaId: publicRuntimeConfig.gaIdCa,
      metaTitle: publicRuntimeConfig.metaTitleCa,
      metaDescription: publicRuntimeConfig.metaDescriptionCa,
    };
  }
  return {
    canonicalUrl: publicRuntimeConfig.canonicalUrlCom,
    gaId: publicRuntimeConfig.gaIdCom,
    metaTitle: publicRuntimeConfig.metaTitleCom,
    metaDescription: publicRuntimeConfig.metaDescriptionCom,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const domain = (await headers()).get("x-custom-domain") || "com";
  const { canonicalUrl, gaId, metaTitle, metaDescription } = getConfigForDomain(domain);

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={canonicalUrl} />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {gaId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          ></script>
        )}
        {gaId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `,
            }}
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
