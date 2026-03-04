"use client";

import { useEffect, useState, RefObject } from "react";

interface CounterProps {
  inputRef: RefObject<HTMLInputElement | null>;
  maxLength?: number;
}

export default function CharacterCounter({ inputRef, maxLength }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    const updateCount = () => setCount(el.value.length);

    // Synchronizacja początkowa
    updateCount();

    // Nasłuchiwanie natywne - omija cykl życia Reacta dla reszty formy
    el.addEventListener("input", updateCount);
    return () => el.removeEventListener("input", updateCount);
  }, [inputRef]);

  return (
    <span className="text-[10px] text-gray-400 tabular-nums">
      {count}{maxLength ? ` / ${maxLength}` : ""}
    </span>
  );
}