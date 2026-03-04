"use client";

import { useFormContext } from "react-hook-form";
import { useRef, useEffect, useState, RefObject } from "react";

// --- Definicja brakującego interfejsu ---
interface FormInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  maxLength?: number;
}

// --- Komponent wewnętrzny (odpowiada za izolowany render licznika) ---
function CharacterCounter({ 
  inputRef, 
  maxLength 
}: { 
  inputRef: RefObject<HTMLInputElement | null>, 
  maxLength?: number 
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    const updateCount = () => setCount(el.value.length);
    
    // Inicjalizacja przy montowaniu (np. dla wartości domyślnych)
    updateCount();

    // Słuchamy natywnie zmian w DOM (omijamy rerender całego formularza)
    el.addEventListener("input", updateCount);
    return () => el.removeEventListener("input", updateCount);
  }, [inputRef]);

  if (!maxLength) return null;

  return (
    <span className="text-[10px] text-gray-400 tabular-nums">
      {count} / {maxLength}
    </span>
  );
}

// --- Komponent Główny ---
export default function FormInputTest({
  name,
  label,
  type = "text",
  placeholder,
  maxLength,
}: FormInputProps) {
  const { register, formState: { errors } } = useFormContext();
  
  // Tworzymy własną referencję do manipulacji DOM
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Wyciągamy ref z register, by przekazać go do inputa ręcznie
  const { ref: registerRef, ...rest } = register(name);

  const error = errors[name];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <label htmlFor={name} className="text-sm font-medium text-ui-text">
          {label}
        </label>
        {/* Licznik, który rerenderuje się niezależnie */}
        <CharacterCounter inputRef={inputRef} maxLength={maxLength} />
      </div>

      <input
        {...rest}
        id={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        className="border border-ui-border p-2 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
        ref={(e) => {
          registerRef(e);    // Rejestrujemy w react-hook-form
          inputRef.current = e; // Rejestrujemy w naszym lokalnym refie
        }}
      />
      
      {error && (
        <span className="text-xs text-ui-warning font-medium">
          {error.message?.toString()}
        </span>
      )}
    </div>
  );
}