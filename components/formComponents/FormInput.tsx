import React, { forwardRef, useEffect, useId, useRef, useState } from "react";
import { FieldError } from "react-hook-form";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

/* ============================================================
   CHAR COUNTER
============================================================ */

interface CharCounterProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  maxLength: number;
}

const CharCounter = ({ inputRef, maxLength }: CharCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    const updateCount = () => {
      setCount(el.value.length);
    };

    updateCount();
    el.addEventListener("input", updateCount);

    return () => {
      el.removeEventListener("input", updateCount);
    };
  }, [inputRef]);

  return (
    <span className="text-[10px] font-semibold text-gray-400">
      {count}/{maxLength}
    </span>
  );
};

/* ============================================================
   MAIN COMPONENT
============================================================ */

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, maxLength, id, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    const internalRef = useRef<HTMLInputElement | null>(null);

    // Łączenie refów (RHF + nasz)
    const setRefs = (element: HTMLInputElement | null) => {
      internalRef.current = element;

      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    const hasMaxLength = typeof maxLength === "number";

    return (
      <div className="w-full mb-4 flex flex-col gap-1.5">
        <div
          className={`
            relative flex flex-col justify-center
            w-full bg-gray-900/60 border-2 rounded-xl px-4 py-2
            transition-all duration-300
            ${
              error
                ? "border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                : "border-white/10 focus-within:border-emerald-500 focus-within:bg-emerald-950/20"
            }
            ${
              disabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-emerald-500/30"
            }
            ${className ?? ""}
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

            {hasMaxLength && (
              <CharCounter
                inputRef={internalRef}
                maxLength={maxLength as number}
              />
            )}
          </div>

          <input
            {...props}
            id={inputId}
            ref={setRefs}
            disabled={disabled}
            maxLength={maxLength}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className="
                        bg-transparent 
                        text-white 
                        w-full 
                        py-1 
                        text-lg 
                        placeholder:text-gray-600 
                        disabled:cursor-not-allowed
                        outline-none 
                        focus:outline-none 
                        focus:ring-0
                        focus-visible:outline-none
                      "
          />
        </div>

        {error && (
          <span
            id={`${inputId}-error`}
            className="text-xs font-semibold text-red-400 ml-2"
          >
            {error.message}
          </span>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
export default FormInput;
