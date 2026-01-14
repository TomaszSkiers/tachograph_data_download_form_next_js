"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * KOMPONENT DOSTAWCY MOTYWU (THEME PROVIDER)
 * -------------------------------------------------------------------------
 * Ten komponent "otacza" całą naszą aplikację. 
 * 'attribute="class"' mówi bibliotece, aby dodawała klasę .dark do tagu <html>.
 * 'defaultTheme="dark"' sprawia, że przy pierwszej wizycie strona od razu ustawi dark
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}