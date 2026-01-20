import Link from "next/link";
// import { CircleArrowLeft } from "lucide-react";
import Header from "@/components/ui/Header";
import { ghostButton } from "@/styles/buttonsStyles";
import { Settings, FileText } from "lucide-react";

const buttonStyle = `${ghostButton} flex-col items-center gap-5 w-full p-2 font-bold border border-ui-border flex-1`;
const buttons = [
  {
    title: "Ustawienia serwisu",
    description: "Konfiguruj nazwę serwisu, adres, dodawaj techników i pojazdy",
    href: "/ustawienia",
    icon: <Settings size={30} />,
  },
  {
    title: "Wniosek i pokwitowanie pobrania danych",
    description: "Generuj dokumenty pobrania danych z tachografu cyfrowego",
    href: "/wniosek-pobranie",
    icon: <FileText size={30} />,
  },
  {
    title: "Poświadczenie braku możliwości pobrania",
    description: "Dokumentuj niemożność pobrania danych z tachografu",
    href: "/brak-pobrania",
    icon: <FileText size={30} />,
  },
  {
    title: "Protokół usunięcia danych przez warsztat",
    description: "Rejestruj usunięcie danych z tachografu podczas naprawy",
    href: "/protokol-usuniecia",
    icon: <FileText size={30} />,
  },
  {
    title: "Procedura pobierania danych",
    description: "Instrukcje i procedury pobierania danych z tachografów",
    href: "/procedura",
    icon: <FileText size={30} />,
  },
];

export default function Pulpit() {
  return (
    <div className="border border-ui-border h-svh flex flex-col">
      <Header
        title="Pulpit"
        backButtonHref="/"
        backButtonLabel="Powrót do strony startowej"
      />
      <section className="flex flex-col gap-4 mt-1  w-full max-w-5xl mx-auto p-3 h-full">
        {buttons.map((button, index) => (
          <Link key={index} href={button.href} className={buttonStyle}>
            <div className="flex flex-1 w-full items-center justify-start gap-5">
              {button.icon}
              <span>{button.title}</span>
            </div>
            <p className="flex-1 text-sm text-ui-text-muted">{button.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
