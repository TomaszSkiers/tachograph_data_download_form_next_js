"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

// Prosta subskrypcja stanu zamontowania
const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // Client: zamontowany
    () => false // Server: niezamontowany
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  // Jeśli komponent nie jest zamontowany, renderujemy pusty placeholder o tej samej wielkości
  if (!isMounted) return <div className="p-2 w-10 h-10" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg border border-ui-border bg-ui-surface text-ui-text hover:bg-ui-ghost-hover transition-colors"
      aria-label="Przełącz motyw"
    >
      {isDark ? (
        <Sun size={24} className="text-ui-warning" />
      ) : (
        <Moon size={24} className="text-brand-primary" />
      )}
    </button>
  );
}