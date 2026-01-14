import { InputHTMLAttributes } from "react";

/**
 * Główny komponent wejściowy. 
 * Obsługuje wszystkie standardowe atrybuty inputa (type, placeholder, value itp.)
 */
export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`
        w-full px-4 py-2.5 rounded-xl outline-none transition-all
        bg-ui-input text-ui-text border border-ui-border
        focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20
        placeholder:text-ui-muted/50
        ${props.className || ""}
      `}
    />
  );
}