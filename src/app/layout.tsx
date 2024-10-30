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

function getCanonicalUrl(domain: string): string {
  return domain === 'ca'
    ? publicRuntimeConfig.canonicalUrlCa
    : publicRuntimeConfig.canonicalUrlCom;
}

// Make RootLayout async to use `await headers()`
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Await headers and retrieve domain from custom header
  const domain = (await headers()).get('x-custom-domain') || 'com';
  const canonicalUrl = getCanonicalUrl(domain);

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
