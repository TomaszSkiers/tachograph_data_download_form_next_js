// app/page.tsx - BEZ 'use client'!
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { primaryButton } from "@/styles/buttonsStyles";

export default function Home() {

console.log(process.env.NODE_ENV)
console.log('test env')

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
      </main>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <details className="group">
          <summary className="cursor-pointer text-lg font-bold text-primary">
            Więcej informacji o aplikacji
          </summary>

          <article className="mt-6 space-y-4 text-sm sm:text-base">
            <p>
              Aplikacja umożliwia autoryzowanym warsztatom tachografów szybkie
              generowanie poświadczeń pobrania danych z tachografu cyfrowego w
              formacie PDF zgodnie z obowiązującymi przepisami.
            </p>

            <p>
              System umożliwia zapis danych w formacie JSON lub PDF, co pozwala
              na ich ponowne wykorzystanie przy kolejnych pobraniach danych i
              znacząco skraca czas obsługi klienta.
            </p>
          </article>
        </details>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ui-border">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-center text-ui-muted">
          <div className="mb-2">
            © {new Date().getFullYear()} e-Formularz – pobranie danych z
            tachografu cyfrowego. Wszystkie prawa zastrzeżone.
          </div>
          <div className="flex justify-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-ui-foreground transition-colors  "
            >
              Polityka Prywatności
            </Link>
            {/* Tu możesz w przyszłości dodać np. Regulamin */}
          </div>
        </div>
      </footer>
    </div>
  );
}
