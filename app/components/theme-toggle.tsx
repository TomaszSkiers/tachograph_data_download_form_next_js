"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

// Funkcja pomocnicza, która mówi Reactowi, że na serwerze komponent nie jest jeszcze "zamontowany"
const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Sprawdzamy, czy jesteśmy po stronie klienta (czy komponent jest "mounted")
  // bez wywoływania dodatkowego renderu przez useEffect
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Jeśli nie jesteśmy na kliencie, renderujemy szkielet (placeholder)
  if (!isMounted) {
    return <div className="w-10 h-10" aria-hidden="true" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 
                 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 
                 transition-all duration-200 active:scale-95"
      aria-label="Przełącz motyw"
    >
      <span className="text-xl">
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}