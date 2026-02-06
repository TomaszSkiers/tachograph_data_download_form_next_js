import Link from 'next/link'

export function Footer () {
    return (
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
    )
}