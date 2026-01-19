Read home.tsxThought for 9s# Analiza SEO Twojego pliku

Widzę kilka problemów z aktualnym kodem pod kątem SEO:

## Problemy:

1. **`'use client'`** - cała strona renderuje się po stronie klienta, co utrudnia indeksowanie przez Google
2. **Brak metadanych** - brak title, description, Open Graph
3. **Brak semantycznego HTML** - nie ma `<header>`, `<main>`, `<footer>`, `<section>`
4. **`button` z `router.push`** - lepszy dla SEO jest `<Link>`


## Rekomendacje SEO dla Next.js:

### 1. Metadata w `layout.tsx`lub `page.tsx`

```typescriptreact
// app/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "e-formularz - Pobieranie danych z tachografu",
    template: "%s | e-formularz"
  },
  description: "Aplikacja do pobierania i zarządzania danymi z tachografu cyfrowego. Szybko, łatwo i bezpiecznie.",
  keywords: ["tachograf", "tachograf cyfrowy", "pobieranie danych", "e-formularz"],
  authors: [{ name: "Twoja Firma" }],
  openGraph: {
    title: "e-formularz - Pobieranie danych z tachografu",
    description: "Aplikacja do pobierania danych z tachografu cyfrowego",
    url: "https://twoja-domena.pl",
    siteName: "e-formularz",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "e-formularz",
    description: "Pobieranie danych z tachografu cyfrowego",
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### 2. Semantyczny HTML (poprawiona strona)

```typescriptreact
// app/page.tsx - BEZ 'use client'!
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { primaryButton } from "@/styles/buttonsStyles"

export default function Home() {
  return (
    <div className="border border-ui-border min-h-dvh flex flex-col">
      <header className="flex gap-2 border-b border-ui-border">
        <div className="flex items-center m-1">
          <ThemeToggle />
        </div>
        <span className="flex items-center font-black tracking-wide">
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
            className={`${primaryButton} h-20 px-20 text-2xl font-bold tracking-wide`}
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
```

### 3. Dodatkowe pliki SEO

| Plik | Opis
|-----|-----
| `app/sitemap.ts` | Mapa strony dla Google
| `app/robots.ts` | Instrukcje dla crawlerów
| `public/manifest.json` | PWA manifest


### 4. Przykład `sitemap.ts`

```typescriptreact
// app/sitemap.ts
export default function sitemap() {
  return [
    { url: "https://twoja-domena.pl", lastModified: new Date() },
    { url: "https://twoja-domena.pl/pulpit", lastModified: new Date() },
  ]
}
```

### 5. Przykład `robots.ts`

```typescriptreact
// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://twoja-domena.pl/sitemap.xml",
  }
}
```

---

## Checklist SEO:

- Usuń `'use client'` gdzie możliwe
- Dodaj `metadata` w layout.tsx
- Używaj semantycznych tagów (`header`, `main`, `section`, `article`)
- Zamień `button + router.push` na `<Link>`
- Dodaj `sitemap.ts` i `robots.ts`
- Używaj `h1` tylko raz na stronę
- Dodaj alt do obrazków
- Zadbaj o szybkość ładowania (Lighthouse)


Chcesz, żebym zaimplementował te zmiany w Twoim projekcie?