import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";
import Script from 'next/script'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "e-formularz pobrania danych z tachografu cyfrowego",
  description:
    "e-formularz pobierania danych z tachografów, procedura pobierania danych, elektroniczny formularz, aplikacja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning zapobiega błędom przy przełączaniu Dark/Light Mode
    <html lang="pl" suppressHydrationWarning>
      <head>
        {/* Skrypt Google AdSense */}
        <Script
          id="adsense-init"
          strategy="afterInteractive" // Ładuje skrypt zaraz po tym, jak strona stanie się interaktywna
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5044844456739196"
          crossOrigin="anonymous"
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
