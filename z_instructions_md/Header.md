# 📘 Poradnik: Jak używać komponentu Header

## 🎯 Podstawowe użycie
```tsx
import Header from '@/components/Header';

export default function MojaStrona() {
  return (
    <div>
      <Header title="Tytuł strony" />
      {/* Reszta zawartości */}
    </div>
  );
}
```

## 🔧 Wszystkie dostępne propsy

| Prop | Typ | Domyślnie | Opis |
|------|-----|-----------|------|
| `title` | `string` | **Wymagany** | Tekst wyświetlany w nagłówku |
| `backButton` | `ReactNode` | `undefined` | Custom ikona/element zamiast strzałki |
| `backButtonLabel` | `string` | `"Powrót do strony głównej"` | Tekst dostępności dla czytników |
| `backButtonHref` | `string` | `"/"` | Adres docelowy linku powrotu |
| `className` | `string` | `""` | Dodatkowe klasy dla `<header>` |
| `innerClassName` | `string` | `""` | Dodatkowe klasy dla wewnętrznego kontenera |

## 📱 Przykłady użycia

### 1. **Podstawowa strona**
```tsx
<Header title="Dashboard" />
```

### 2. **Strona z custom powrotem**
```tsx
<Header 
  title="Ustawienia konta"
  backButtonHref="/profil"
  backButtonLabel="Powrót do profilu"
/>
```

### 3. **Z inną ikoną**
```tsx
import { Home, ArrowLeft, X } from 'lucide-react';

// Ikona domku
<Header 
  title="Panel administracyjny" 
  backButton={<Home size={36} />}
/>

// Krzyżyk zamiast strzałki
<Header 
  title="Nowy projekt" 
  backButton={<X size={36} />}
  backButtonLabel="Zamknij"
/>
```

### 4. **Z dodatkowym stylowaniem**
```tsx
<Header 
  title="Notatki"
  className="shadow-lg" // Cień
  innerClassName="bg-gradient-to-r from-blue-50 to-indigo-50" // Gradient
/>
```

### 5. **Pełny przykład strony**
```tsx
export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="Mój artykuł"
        backButtonHref="/blog"
        backButtonLabel="Powrót do listy artykułów"
        className="shadow-sm"
      />
      
      <main className="max-w-3xl mx-auto px-4 py-8">
        <article className="prose prose-lg">
          {/* Treść artykułu */}
        </article>
      </main>
    </div>
  );
}
```

## 🎨 Customizacja wyglądu

### **Zmiana rozmiaru ikony**
```tsx
<Header 
  title="Mała ikona"
  backButton={<CircleArrowLeft size={24} />}
/>
```

### **Zmiana kolorów przez klasy Tailwind**
```tsx
<Header 
  title="Ciemny motyw"
  className="bg-gray-900"
  innerClassName="border-gray-700"
  backButton={
    <CircleArrowLeft size={36} className="text-white" />
  }
/>
```

### **Dodanie dodatkowych elementów obok tytułu**
```tsx
// Niestandardowe - trzeba modyfikować komponent
// Ale można dodać przez children w przyszłości
```

## ⚠️ Najczęstsze błędy

### ❌ **Źle: Brak tytułu**
```tsx
<Header /> // Błąd: brak wymaganego prop 'title'
```

### ✅ **Dobrze: Z tytułem**
```tsx
<Header title="Moja strona" />
```

### ❌ **Źle: Nieprawidłowy import ikon**
```tsx
// Brak importu lucide-react
<Header backButton={<Home />} /> // Błąd: Home nie jest zdefiniowany
```

### ✅ **Dobrze: Poprawny import**
```tsx
import { Home } from 'lucide-react';
<Header backButton={<Home />} />
```

## 🔄 Rozszerzanie komponentu

Jeśli potrzebujesz więcej funkcji, możesz rozszerzyć komponent:

### **Dodanie przycisków po prawej**
```tsx
// W przyszłości możesz dodać prop 'actions'
<Header 
  title="Edycja"
  actions={
    <button className="btn btn-primary">
      Zapisz
    </button>
  }
/>
```

### **Dodanie breadcrumbs**
```tsx
<Header 
  title="Ostatni krok"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Projekty', href: '/projects' },
  ]}
/>
```

## 📱 Responsywność

Komponent jest w pełni responsywny:
- **Mobile**: padding 16px (`px-4`)
- **Tablet**: padding 24px (`sm:px-6`)
- **Desktop**: padding 32px (`lg:px-8`)
- **Szerokość**: ograniczona do `max-w-5xl` (~1100px)

## ♿ Dostępność

Komponent ma wbudowaną dostępność:
- `aria-label` na linku powrotu
- Focus outline (`focus:ring-2 focus:ring-primary`)
- Semantyczny `<header>` i `<h1>`

## 💡 Tips & Tricks

1. **Spójne tytuły**: Używaj podobnej konwencji na całej stronie
2. **Opisy dostępności**: Zmieniaj `backButtonLabel` by opisywały dokąd prowadzi link
3. **Testowanie**: Zawsze sprawdzaj działanie na mobile i z klawiaturą (Tab)
4. **Ikony**: Używaj consistent rozmiaru ikon (24px, 32px, 36px)

---

**Gotowe komponenty do kopiowania** znajdziesz w pliku `components/Header.tsx` 😊