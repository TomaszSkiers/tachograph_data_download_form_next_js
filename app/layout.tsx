import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

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
  description: "e-formularz pobrania danych z tachografu cyfrowego",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

/**
 * GŁÓWNY UKŁAD APLIKACJI (ROOT LAYOUT)
 * -------------------------------------------------------------------------
 * 1. Dodajemy 'suppressHydrationWarning' do <html>. Jest to konieczne, ponieważ
 * next-themes modyfikuje atrybuty HTML na kliencie, co bez tej flagi
 * powodowałoby błędy w konsoli (mismatch między serwerem a klientem).
 * * 2. ThemeProvider otacza {children}, dając dostęp do motywów w całym projekcie.
 */
