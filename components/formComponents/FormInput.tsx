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

    const updateCount = () => setCount(el.value.length);
    
    updateCount();
    el.addEventListener("input", updateCount);
    return () => el.removeEventListener("input", updateCount);
  }, [inputRef]);

  return (
    <span className="text-[10px] font-semibold text-ui-text-muted">
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

    const setRefs = (element: HTMLInputElement | null) => {
      internalRef.current = element;
      if (typeof ref === "function") ref(element);
      else if (ref) ref.current = element;
    };

    const hasMaxLength = typeof maxLength === "number";

 return (
      <div className="w-full mb-4 flex flex-col gap-1.5">
        <div
          className={`
            relative flex flex-col justify-center
            w-full bg-ui-input border-2 rounded-xl px-4 py-2
            transition-all duration-300
            /* Usunięto focus-within:border-... */
            ${
              error
                ? "border-ui-danger/50 shadow-[0_0_15px_rgba(220,38,38,0.1)]"
                : "border-ui-border" 
            }
            ${
              disabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-ui-border/80"
            }
            ${className ?? ""}
          `}
        >
          <div className="flex items-center justify-between mb-0.5">
            <label
              htmlFor={inputId}
              className={`text-[10px] font-black uppercase tracking-widest ${
                error ? "text-ui-danger" : "text-brand-primary"
              }`}
            >
              {label}
            </label>

            {hasMaxLength && (
              <CharCounter inputRef={internalRef} maxLength={maxLength as number} />
            )}
          </div>

          <input
            {...props}
            id={inputId}
            ref={setRefs}
            disabled={disabled}
            className="
              w-full
              bg-transparent
              text-ui-text
              placeholder:text-ui-text-muted/50
              outline-none
              focus:ring-0        
              focus:outline-none  
              border-none
              p-2
              text-md
            "
          />
        </div>
        {/* ... (error message) */}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
export default FormInput;