import React, { forwardRef, useEffect, useId, useRef, useState, useImperativeHandle } from "react";
import { FieldError } from "react-hook-form";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

// --- KOMPONENT LICZNIKA (TYLKO ON BĘDZIE SIĘ RE-RENDEROWAĆ) ---
const CharCounter = ({ inputRef, maxLength }: { inputRef: React.RefObject<HTMLInputElement | null>, maxLength: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    // Funkcja aktualizująca tylko ten mały komponent
    const handleInput = () => setCount(el.value.length);
    
    // Ustawiamy wartość początkową (np. przy edycji danych)
    setCount(el.value.length);

    // Podpinamy się bezpośrednio pod natywne zdarzenie przeglądarki
    el.addEventListener("input", handleInput);
    
    // Czyścimy po sobie, gdy komponent znika
    return () => el.removeEventListener("input", handleInput);
  }, [inputRef]);

  return (
    <span className="text-[10px] font-semibold text-gray-400">
      {count}/{maxLength}
    </span>
  );
};

// --- GŁÓWNY KOMPONENT ---
const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, maxLength, ...props }, forwardedRef) => {
    const generatedId = useId();
    const inputId = props.id || generatedId;
    
    // Tworzymy wewnętrzny "wskaźnik", żeby móc go przekazać do licznika
    const internalRef = useRef<HTMLInputElement>(null);

    // Ta funkcja łączy nasz wewnętrzny ref z tym, co przychodzi z React Hook Form
    useImperativeHandle(forwardedRef, () => internalRef.current!);

    return (
      <div className="w-full mb-4 flex flex-col gap-1.5">
        <div
          className={`
            relative flex flex-col justify-center
            w-full bg-gray-900/60 border-2 rounded-xl px-4 py-2
            transition-all duration-300
            ${error
              ? "border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
              : "border-white/10 focus-within:border-emerald-500 focus-within:bg-emerald-950/20"
            }
            ${props.disabled ? "opacity-50 cursor-not-allowed" : "hover:border-emerald-500/30"}
            ${className}
          `}
        >
          <div className="flex items-center justify-between">
            <label
              htmlFor={inputId}
              className={`text-[10px] font-black uppercase tracking-widest ${
                error ? "text-red-400" : "text-emerald-400"
              }`}
            >
              {label}
            </label>

            {/* Licznik znaków jako oddzielny, zoptymalizowany byt */}
            {maxLength && (
              <CharCounter inputRef={internalRef} maxLength={maxLength} />
            )}
          </div>

          <input
            {...props}
            id={inputId}
            ref={internalRef}
            maxLength={maxLength}
            className="bg-transparent text-white outline-none w-full py-1 text-lg placeholder:text-gray-600 disabled:cursor-not-allowed"
          />
        </div>

        {error && (
          <span className="text-xs font-semibold text-red-400 ml-2 animate-pulse">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
export default FormInput;