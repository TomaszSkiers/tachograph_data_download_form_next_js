"use client";

interface AdLeaderboardProps {
  className?: string;
}

export default function AdLeaderboard({className}: AdLeaderboardProps) {
  return (
    <section className="w-full flex justify-center ">
      {/* Kontener o sztywnych wymiarach dla Desktopu i elastyczny dla Mobile */}
      <div
        className={`
          w-full 
          max-w-182 
          min-h-22.5 
          bg-gray-50 
          border border-dashed border-gray-300 
          flex flex-col items-center justify-center 
          relative 
          overflow-hidden
          ${className}
          `}
          
          
        
      >
        {/* Etykieta widoczna tylko podczas developmentu */}
        <div className="absolute top-0 left-0 bg-gray-200 text-[10px] px-2 py-0.5 text-gray-500 uppercase font-bold tracking-tighter">
          Ad: Leaderboard 728x90
        </div>

        {/* Miejsce na skrypt AdSense */}
        {/* Tutaj docelowo wkleisz kod <ins> z AdSense.
          Dzięki min-h-[90px] treść strony nie "podskoczy", 
          gdy reklama się załaduje.
        */}
        <div className="text-gray-400 text-sm italic">Miejsce na reklamę</div>
      </div>
    </section>
  );
}
