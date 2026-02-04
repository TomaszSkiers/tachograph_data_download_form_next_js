import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Script from "next/script"; // Importujemy dedykowany komponent
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "e-Formularz pobrania danych z tachografu cyfrowego",
  description:
    "Elektroniczny formularz pobierania danych z tachografów. Bezpieczna procedura i szybka aplikacja webowa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <meta name="monetag" content="5808406a58cc1101993436aa775b46a5"></meta>
        
        {/* Skrypt Monetag zoptymalizowany dla Next.js */}
        <Script
          id="monetag-in-page-push"
          src="https://nap5k.com/tag.min.js"
          data-zone="10564900"
          strategy="lazyOnload" 
        />
        
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5044844456739196"
          crossOrigin="anonymous"
          strategy="afterInteractive" 
        />

      </head>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-ui-bg text-ui-text transition-colors duration-300
        `}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}