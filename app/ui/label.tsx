import { ReactNode } from "react";

/**
 * Ustandaryzowany opis pola (Label)
 */
export function Label({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return (
    <label 
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-ui-text mb-1.5 ml-1"
    >
      {children}
    </label>
  );
}