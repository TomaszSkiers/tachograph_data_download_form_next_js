// app/page.tsx - BEZ 'use client'!
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { primaryButton } from "@/styles/buttonsStyles";
import Footer from "@/components/ui/Footer";
import AdLeaderboard from "@/components/asSenseGoogle/AdLeaderboard";

export default function Home() {
  return (
    <div className=" h-svh flex flex-col">
      <header className="h-16 flex bg-ui-surface mx-auto w-full  border-b border-ui-border">
        <div className="flex w-full max-w-5xl mx-auto justify-between px-6">
          <div className="flex items-center m-2">
            <ThemeToggle />
          </div>
          <span className="flex items-center text-xl font-black tracking-wide">
            Strona startowa
          </span>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <section className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-black tracking-wide">
            e-formularz
          </h1>
          <p className="text-xl sm:text-2xl font-bold tracking-wide text-center">
            pobranie danych z tachografu cyfrowego
          </p>
        </section>

        <section className="flex-1 flex items-center justify-center">
          <Link
            href="/pulpit"
            className={`${primaryButton} h-20 px-20 text-2xl items-center font-bold tracking-wide`}
          >
            Start
          </Link>
        </section>

        <section className="flex-1 flex items-center justify-center">
          <AdLeaderboard className="hidden sm:block" />
        </section>
      </main>
      <Footer className="hidden sm:block"></Footer>
      <AdLeaderboard className="sm:hidden" />
    </div>
  );
}
