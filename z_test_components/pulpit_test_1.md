```tsx
import Link from "next/link";
import { 
  Settings, 
  FileText, 
  AlertCircle, 
  FileX, 
  ClipboardList, 
  Users, 
  Truck, 
  BarChart3, 
  Calendar, 
  Shield,
  Download,
  Wrench
} from "lucide-react";
import Header from "@/components/ui/Header";
import { ghostButton, primaryButton } from "@/styles/buttonsStyles";

export default function Pulpit() {
  const mainMenuItems = [
    {
      title: "Ustawienia serwisu",
      description: "Konfiguruj nazwę serwisu, adres, dodawaj techników i pojazdy",
      href: "/ustawienia",
      icon: <Settings className="w-6 h-6" />,
      variant: "ghost" as const,
    },
    {
      title: "Wniosek i pokwitowanie pobrania danych",
      description: "Generuj dokumenty pobrania danych z tachografu cyfrowego",
      href: "/wniosek-pobranie",
      icon: <FileText className="w-6 h-6" />,
      variant: "primary" as const,
    },
    {
      title: "Poświadczenie braku możliwości pobrania",
      description: "Dokumentuj niemożność pobrania danych z tachografu",
      href: "/brak-pobrania",
      icon: <AlertCircle className="w-6 h-6" />,
      variant: "primary" as const,
    },
    {
      title: "Protokół usunięcia danych przez warsztat",
      description: "Rejestruj usunięcie danych z tachografu podczas naprawy",
      href: "/protokol-usuniecia",
      icon: <FileX className="w-6 h-6" />,
      variant: "primary" as const,
    },
    {
      title: "Procedura pobierania danych",
      description: "Instrukcje i procedury pobierania danych z tachografów",
      href: "/procedura",
      icon: <ClipboardList className="w-6 h-6" />,
      variant: "primary" as const,
    },
  ];

  const desktopOnlyItems = [
    {
      title: "Zarządzanie technikami",
      description: "Przydziel zadania i monitoruj aktywność techników",
      href: "/technicy",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Flota pojazdów",
      description: "Przeglądaj i zarządzaj pojazdami w serwisie",
      href: "/pojazdy",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      title: "Statystyki i raporty",
      description: "Analizuj dane i generuj raporty miesięczne",
      href: "/raporty",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Harmonogram pobrań",
      description: "Planuj i śledź terminy pobrań danych",
      href: "/harmonogram",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Kontrola jakości",
      description: "Standardy i procedury kontroli jakości usług",
      href: "/jakosc",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Archiwum dokumentów",
      description: "Przeglądaj i zarządzaj archiwalnymi dokumentami",
      href: "/archiwum",
      icon: <Download className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header
        title="Pulpit serwisu"
        backButtonHref="/"
        backButtonLabel="Powrót do strony startowej"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Nagłówek pulpitu */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Witaj w systemie serwisu tachografów</h2>
          <p className="text-gray-600 mt-2">Wybierz akcję, którą chcesz wykonać</p>
        </div>

        {/* Główne menu - widoczne na wszystkich urządzeniach */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {mainMenuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`
                group relative overflow-hidden rounded-xl p-5 transition-all duration-200
                ${item.variant === 'primary' 
                  ? `${primaryButton} border-2 border-transparent hover:border-primary/20` 
                  : `${ghostButton} bg-white hover:bg-gray-50 border border-gray-200`
                }
                hover:shadow-lg hover:-translate-y-0.5
                flex flex-col h-full
              `}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`
                  p-3 rounded-lg
                  ${item.variant === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-gray-100 text-gray-700'
                  }
                `}>
                  {item.icon}
                </div>
                <span className={`
                  text-xs font-semibold px-2 py-1 rounded-full
                  ${item.variant === 'primary' 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-gray-200 text-gray-700'
                  }
                `}>
                  {index === 0 ? 'KONFIGURACJA' : 'DOKUMENT'}
                </span>
              </div>
              
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm flex-grow">
                {item.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-sm font-medium">
                <span className={item.variant === 'primary' ? 'text-primary' : 'text-gray-700'}>
                  Przejdź do dokumentu →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Panel dodatkowy tylko na desktop */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Dodatkowe narzędzia</h3>
                <p className="text-gray-600">Funkcjonalności dostępne dla administratorów</p>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Wrench className="w-5 h-5" />
                <span className="text-sm font-medium">Narzędzia</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {desktopOnlyItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group p-4 rounded-lg border border-gray-200 hover:border-primary/30 hover:bg-gray-50 transition-all duration-200 flex items-start gap-3"
                >
                  <div className="p-2 bg-gray-100 text-gray-700 rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Statystyki szybkiego dostępu */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4">
              <div className="text-blue-700 font-bold text-lg">24</div>
              <div className="text-sm text-blue-600">Aktywne zadania</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4">
              <div className="text-green-700 font-bold text-lg">156</div>
              <div className="text-sm text-green-600">Dokumenty w tym miesiącu</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4">
              <div className="text-purple-700 font-bold text-lg">8</div>
              <div className="text-sm text-purple-600">Aktywni technicy</div>
            </div>
          </div>
        </div>

        {/* Mobile: Proste menu bez dodatków */}
        <div className="lg:hidden mt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600 text-center">
              Użyj przycisków powyżej do głównych operacji. Więcej funkcji dostępnych na komputerze.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 📱 Responsywność:

### **Na smartfonie:**
- Tylko 5 głównych przycisków
- Układ 1 kolumnowy
- Bez dodatkowych elementów
- Prosta informacja o desktopowych funkcjach

### **Na desktopie:**
- 5 głównych przycisków w układzie 3 kolumny
- Dodatkowe 6 przycisków "narzędzia"
- Panel statystyk szybkiego dostępu
- Gradientowe tło i lepsze cienie
- Efekty hover z animacjami

## 🎨 Kluczowe cechy:

1. **Ikony** - Każdy przycisk ma odpowiednią ikonę z lucide-react
2. **Kolory** - Używają Twoich stylów buttonStyles (ghostButton, primaryButton)
3. **Hierarchia** - Ustawienia jako ghost, dokumenty jako primary
4. **Efekty** - Hover z podniesieniem i cieniami
5. **Informacje** - Opisy zamiast lorem ipsum
6. **Różnica device** - Desktop pokazuje więcej zawartości

## 🚀 Możliwe rozszerzenia:

```tsx
// Dodaj loading state
const [isLoading, setIsLoading] = useState(false);

// Dodaj wyszukiwanie
const [searchTerm, setSearchTerm] = useState('');

// Dodaj ostatnio używane
const [recentItems, setRecentItems] = useState([]);
```

Komponent jest gotowy do użycia i wygląda profesjonalnie zarówno na mobile jak i desktop!