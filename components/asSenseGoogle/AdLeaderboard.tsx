"use client";

import { useEffect } from "react";

interface AdLeaderboardProps {
  className?: string;
}

// Definiujemy typ dla tablicy AdSense, aby uniknąć 'any'
declare global {
  interface Window {
    adsbygoogle: Array<unknown>;
  }
}

export default function AdLeaderboard({ className }: AdLeaderboardProps) {
  useEffect(() => {
    try {
      // Sprawdzamy bezpiecznie, czy window i adsbygoogle istnieją
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("Błąd inicjalizacji AdSense:", err);
    }
  }, []);

  return (
    <section className="w-full flex justify-center my-4">
      <div
        className={`
          w-full 
          max-w-182 
          min-h-22.5 
          bg-gray-50 dark:bg-gray-900
          border border-dashed border-gray-300 
          flex flex-col items-center justify-center 
          relative 
          overflow-hidden
          ${className || ""}
        `}
      >
        <div className="absolute top-0 left-0 bg-yellow-200 text-[10px] px-2 py-0.5 text-gray-700 uppercase font-bold z-10">
          Tryb Testowy AdSense
        </div>

        <ins
          className="adsbygoogle"
          style={{ display: "inline-block", width: "728px", height: "90px" }}
          data-ad-client="ca-pub-5044844456739196"
          data-ad-slot="1234567890"
          data-ad-test="on"
        ></ins>

        <div className="absolute text-gray-400 text-xs italic pointer-events-none">
          Weryfikacja komunikacji z Google...
        </div>
      </div>
    </section>
  );
}