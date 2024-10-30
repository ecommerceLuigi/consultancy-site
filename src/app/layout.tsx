// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";
import getConfig from "next/config";

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

function getCanonicalUrl(hostname: string): string {
  return hostname.includes("luigimoccia.ca")
    ? publicRuntimeConfig.canonicalUrlCa
    : publicRuntimeConfig.canonicalUrlCom;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const canonicalUrl = getCanonicalUrl(
    typeof window !== "undefined" ? window.location.hostname : ""
  );

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
