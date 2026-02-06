import React from "react";

interface FooterProps {
  className?: string;
}

const Footer = ({className}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full border-t border-ui-border bg-ui-bg text-ui-text ${className}`}>
      <div className="mx-auto max-w-5xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        {/* Sekcja Brandingowa / Logo */}
        <div className="flex flex-col gap-4 md:order-1 md:mt-0">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-brand-primary" />
            <span className="text-xl font-bold tracking-tight">TwojaMarka</span>
          </div>
          <p className="max-w-xs text-sm text-ui-text-muted">
            Budujemy nowoczesne interfejsy z pasją. Twój system projektowy w
            Next.js i Tailwind CSS.
          </p>
        </div>

        {/* Linki Nawigacyjne */}
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:order-2 md:mt-0 lg:gap-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ui-text">
              Produkt
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-ui-text-muted hover:text-brand-primary transition-colors"
                >
                  Funkcje
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-ui-text-muted hover:text-brand-primary transition-colors"
                >
                  Cennik
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ui-text">
              Firma
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-ui-text-muted hover:text-brand-primary transition-colors"
                >
                  O nas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-ui-text-muted hover:text-brand-primary transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ui-text">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-ui-text-muted hover:text-brand-primary transition-colors"
                >
                  Prywatność
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-ui-text-muted hover:text-brand-primary transition-colors"
                >
                  Regulamin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dolny pasek (Copyright) */}
      <div className="border-t border-ui-border bg-ui-surface/50 py-6">
        <div className="mx-auto max-w-5xl px-6 md:flex md:items-center md:justify-between lg:px-8">
          <p className="text-xs text-ui-text-muted">
            &copy; {currentYear} TwojaMarka Inc. Wszystkie prawa zastrzeżone.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <span className="text-xs text-ui-text-muted">
              System:{" "}
              <span className="text-brand-primary font-medium">
                Ubuntu Linux
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
