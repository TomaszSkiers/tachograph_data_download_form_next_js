import React from "react";
import Header from "@/components/ui/Header";

export const metadata = {
  title: "Polityka Prywatności | e-Formularz",
  description:
    "Informacje o bezpieczeństwie danych z tachografu oraz zasadach reklam Google AdSense.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-ui-bg min-h-screen transition-colors duration-300">
      <Header
        title="Polityka prywatności"
        backButtonHref="/"
        backButtonLabel="Powrót do strony startowej"
        className=" bg-ui-surface border-b border-ui-border"
      />
      <main className="max-w-4xl mx-auto py-12 px-6 sm:px-8 text-ui-text">
        <section className="space-y-10">
          {/* SEKCJA 1: BEZPIECZEŃSTWO DANYCH Z FORMULARZA */}
          <div className="bg-ui-surface p-6 rounded-xl border border-ui-border shadow-sm">
            <h2 className="text-xl font-bold mb-3 text-brand-primary flex items-center">
              <span className="mr-2">🛡️</span> Twoje dane są bezpieczne
            </h2>
            <p className="font-medium mb-3">
              Jako autor aplikacji gwarantuję, że Twoje dane z tachografu są w
              pełni prywatne:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-ui-text-muted">
              <li>
                <strong className="text-ui-text">
                  Brak przesyłania danych:
                </strong>{" "}
                Żadne informacje wpisywane do e-formularza nie trafiają na mój
                serwer ani do nikogo innego.
              </li>
              <li>
                <strong className="text-ui-text">
                  Wszystko zostaje u Ciebie:
                </strong>{" "}
                Przetwarzanie danych odbywa się wyłącznie w Twojej przeglądarce.
                To Twój komputer wykonuje wszystkie obliczenia.
              </li>
              <li>
                <strong className="text-ui-text">
                  Automatyczne czyszczenie:
                </strong>{" "}
                Zamknięcie strony powoduje natychmiastowe usunięcie wpisanych
                danych z pamięci urządzenia.
              </li>
            </ul>
          </div>

          {/* SEKCJA 2: GOOGLE ADSENSE - JEDYNE POBIERANE DANE */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              1. Reklamy Google AdSense
            </h2>
            <p className="mb-4 text-ui-text-muted">
              Jedynymi informacjami, które są pobierane z tej strony przez
              podmioty zewnętrzne, są dane zbierane przez system Google AdSense.
            </p>
            <div className="bg-ui-input p-5 rounded-lg border border-ui-border space-y-3 text-sm">
              <p>
                • Służą one wyłącznie do tego, aby wyświetlać Ci reklamy
                dopasowane do Twoich zainteresowań.
              </p>
              <p>
                • Możesz zarządzać tymi ustawieniami lub je wyłączyć w dowolnej
                chwili na stronie
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary underline ml-1"
                >
                  Ustawień reklam Google
                </a>
                .
              </p>
            </div>
          </div>

          {/* SEKCJA 3: PROSTE WYJAŚNIENIE LOGÓW I ADMINISTRATORA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-ui-border">
            <div>
              <h3 className="text-lg font-bold mb-2">
                2. Administrator Strony
              </h3>
              <p className="text-sm text-ui-text-muted">
                Stronę prowadzi osoba prywatna:
                <span className="text-ui-text font-semibold block mt-1">
                  [Twoje Imię i Nazwisko]
                </span>
                Kontakt:{" "}
                <span className="text-brand-primary font-semibold">
                  [Twój E-mail]
                </span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">3. Logi Serwera</h3>
              <p className="text-sm text-ui-text-muted text-justify italic">
                Wyjaśniając najprościej: kiedy wchodzisz na dowolną stronę,
                serwer, który ją udostępnia, zapisuje techniczny ślad Twojej
                wizyty (np. datę i rodzaj przeglądarki). Jest to standardowy
                mechanizm działania internetu. Dane te nie służą mi do Twojej
                identyfikacji i nie mają nic wspólnego z danymi, które wpisujesz
                do formularza.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* FOOTER */}
      <footer className=" border-t border-ui-border">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-center text-ui-muted">
          <div className="mb-2">
            © {new Date().getFullYear()} e-Formularz – pobranie danych z
            tachografu cyfrowego. Wszystkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </div>
  );
}
