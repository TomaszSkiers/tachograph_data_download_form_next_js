import {
  Settings,
  FileText,
  UserPlus,
  Warehouse,
  Truck,
  MessageCircleQuestionMark,
  BetweenHorizonalEnd,
} from "lucide-react";
import { ReactNode } from "react";

interface MenuButton {
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
    icon: <FileText size={30} color="green" />,
  },
  {
    title: "Innne dokumenty",
    description:
      "Brak możliwości pobrania danych, usunięcie danych, procedura pobierania danch itp.",
    href: "/brak-pobrania",
    icon: <FileText size={30} />,
  },
  {
    title: "Reklama",
    description:
      "Brak możliwości pobrania danych, usunięcie danych, procedura pobierania danch itp.",
    href: "/brak-pobrania",
    icon: <BetweenHorizonalEnd size={30} />,
  },
];

export const buttonsDesktopViewForms: MenuButton[] = [
  {
    title: "Formularz pobrania danych z tachografu cyfrowego",
    description: "Ten formularz wygeneruje wniosek o pobranie danych oraz pokwitowanie przekazania danych z przyrządu rejestrującego",
    href: "",
    icon: <FileText size={40}/>,
  },
  {
    title: "Formularz braku możliwości pobrania danych z tachografu",
    description: "Ten fromularz wygeneruje wniosek o pobranie danych oraz poświadczenie o braku możliwości pobrania danych z przyrządu rejestrującego",
    href: "",
    icon: <FileText size={40}/>,
  },
  {
    title: "Formularz usunięcia danych pobranych przez warsztat",
    description: "Ten formularz wygeneruje poświadczenie usunięcia danych pobranych przez warsztat",
    href: "",
    icon: <FileText size={40}/>,
  },
  {
    title: "Procedura pobierania danych",
    description: "Pełna procedura pobierania, przechowywania i przekazywania danych z tachografu cyfrowego - online",
    href: "",
    icon: <FileText size={40}/>,
  },
];

interface settingsPageButtonsProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

export const settingsPageButtons: settingsPageButtonsProps[] = [
  {
    title: "Ustaw dane twojego serwisu",
    description: "Dodaj nazwę, adres swojego serwisu",
    href: "/pulpit/settings/serviceNameAndAddress",
    icon: <Warehouse color="yellow" />,
  },
  {
    title: "Technicy",
    description: "Wprowadź imię i nazwisko technika, nr. karty warsztatowej",
    href: "/pulpit/settings/addTechnician",
    icon: <UserPlus color="lightGreen" />,
  },
  {
    title: "Lista pojazdów",
    description: "Przegladaj pojazdy, lub dodaj pojazd oraz jego typ",
    href: "/pulpit/settings/vehiclesList",
    icon: <Truck color="lightBlue" />,
  },
  {
    title: "Powód pobrania danych",
    description: "Dodaj powód pobrania danych",
    href: "/pulpit/settings/dataDownloadReason",
    icon: <MessageCircleQuestionMark color="orange" />,
  },
];
