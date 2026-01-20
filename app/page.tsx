// app/page.tsx - BEZ 'use client'!
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { primaryButton } from "@/styles/buttonsStyles"

export default function Home() {
  return (
    <div className="border border-ui-border h-svh flex flex-col">
      <header className="h-16 flex bg-ui-surface mx-auto w-full max-w-5xl gap-2 border-b border-ui-border">
        <div className="flex items-center m-2">
          <ThemeToggle />
        </div>
        <span className="flex items-center text-xl font-black tracking-wide">
          Strona startowa
        </span>
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
          <p>informacje dodatkowe</p>
        </section>
      </main>
    </div>
  )
}