import { Settings, FileText } from "lucide-react";
import { ReactNode } from "react";

interface MenuButton {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

interface MenuButtonDesktop {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

export const buttons: MenuButton[] = [
  {
    title: "Ustawienia serwisu",
    description:
      "Ustaw nazwę serwisu, dodaj techników, pojazdy i inne parametry.",
    href: "/pulpit/settings",
    icon: <Settings size={30} color="blue" />,
  },
  {
    title: "Wniosek i pokwitowanie pobrania danych",
    description: "Generuj dokumenty pobrania danych z tachografu cyfrowego",
    href: "/wniosek-pobranie",
    icon: <FileText size={30} color="green"/>,
  },
  {
    title: "Innne dokumenty",
    description: "Brak możliwości pobrania danych, usunięcie danych, procedura pobierania danch itp.",
    href: "/brak-pobrania",
    icon: <FileText size={30} />,
  },
  // {
  //   title: "Protokół usunięcia danych przez warsztat",
  //   description: "Rejestruj usunięcie danych z tachografu podczas naprawy",
  //   href: "/protokol-usuniecia",
  //   icon: <FileText size={30} />,
  // },
  // {
  //   title: "Procedura pobierania danych",
  //   description: "Instrukcje i procedury pobierania danych z tachografów",
  //   href: "/procedura",
  //   icon: <FileText size={30} />,
  // },
];

export const buttonsDesktop: MenuButtonDesktop[] = [
  {
    title: "Ustawienia serwisu",
    description:
      "Ustaw nazwę serwisu, dodaj techników, pojazdy i inne parametry.",
    href: "/ustawienia",
    icon: <Settings size={30} color="blue" />,
  },
  {
    title: "Wniosek i pokwitowanie pobrania danych",
    description: "Generuj dokumenty pobrania danych z tachografu cyfrowego",
    href: "/wniosek-pobranie",
    icon: <FileText size={30} color="yellow"/>,
  },
  {
    title: "Innne dokumenty",
    description: "Brak możliwości pobrania danych, usunięcie danych, procedura pobierania danch itp.",
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
]