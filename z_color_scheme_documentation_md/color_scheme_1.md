# Dokumentacja Systemu Designu - Zmienne Kolorów

## Wprowadzenie
Ten system designu używa **zmiennych funkcjonalnych** zamiast nazw kolorystycznych (np. `gray-900`). Każda zmienna ma konkretne przeznaczenie w interfejsie.

## Zmienne Główne

### 1. **`--ui-bg`** - Główne tło aplikacji
**Przeznaczenie:** Tło całej strony/body aplikacji
```html
<!-- Przykład użycia -->
<body class="bg-ui-bg">
  <!-- cała zawartość aplikacji -->
</body>
```

**Wartości:**
- Light: `#ffffff` (czysty biały)
- Dark: `#020617` (bardzo ciemny granat - Slate 950)

---

### 2. **`--ui-surface`** - Powierzchnie elementów
**Przeznaczenie:** Karty, modale, dropdowny, panele boczne
```html
<!-- Przykład: Karta produktu -->
<div class="bg-ui-surface p-6 rounded-lg shadow-lg">
  <h3 class="text-ui-text">Nazwa Produktu</h3>
  <p class="text-ui-text-muted">Opis produktu...</p>
</div>

<!-- Przykład: Modal -->
<div class="fixed inset-0 bg-black/50 flex items-center justify-center">
  <div class="bg-ui-surface p-8 rounded-xl max-w-md w-full">
    <h2 class="text-ui-text text-xl font-bold">Potwierdzenie</h2>
    <!-- zawartość modala -->
  </div>
</div>
```

**Wartości:**
- Light: `#ffffff` (biały)
- Dark: `#0f172a` (ciemny granat - Slate 900)

---

### 3. **`--ui-input`** - Tła pól formularzy
**Przeznaczenie:** Inputy, textarea, select, dropdowny
```html
<!-- Przykład: Pole tekstowe -->
<input 
  type="text" 
  placeholder="Wpisz swoje imię"
  class="bg-ui-input text-ui-text placeholder:text-ui-text-muted 
         border border-ui-border rounded-lg px-4 py-2 w-full"
/>

<!-- Przykład: Dropdown -->
<select class="bg-ui-input text-ui-text border border-ui-border rounded-lg px-4 py-2">
  <option value="1">Opcja 1</option>
  <option value="2">Opcja 2</option>
</select>
```

**Wartości:**
- Light: `#f1f5f9` (jasny szaro-niebieski - Slate 100)
- Dark: `#1e293b` (granatowy - Slate 800)

---

### 4. **`--ui-text`** - Główny tekst
**Przeznaczenie:** Nagłówki, akapity, główny tekst interfejsu
```html
<!-- Przykład: Nagłówek -->
<h1 class="text-ui-text text-3xl font-bold">Tytuł Strony</h1>
<h2 class="text-ui-text text-xl font-semibold">Podtytuł</h2>

<!-- Przykład: Akapit -->
<p class="text-ui-text leading-relaxed">
  To jest główny tekst paragrafu o wysokim kontraście.
</p>

<!-- Przykład: Etykieta -->
<label class="text-ui-text font-medium block mb-2">
  Adres email:
</label>
```

**Wartości:**
- Light: `#020617` (czarny/granat - Slate 950)
- Dark: `#f8fafc` (jasny szary - Slate 50)

---

### 5. **`--ui-text-muted`** - Tekst pomocniczy
**Przeznaczenie:** Placeholdery, tekst pomocniczy, podpisy, tekst nieaktywny
```html
<!-- Przykład: Placeholder w input -->
<input 
  type="email"
  placeholder="jan@example.com"
  class="bg-ui-input text-ui-text placeholder:text-ui-text-muted"
/>

<!-- Przykład: Tekst pomocniczy -->
<p class="text-ui-text-muted text-sm">
  Hasło musi zawierać co najmniej 8 znaków
</p>

<!-- Przykład: Nieaktywny przycisk -->
<button 
  disabled
  class="opacity-50 text-ui-text-muted cursor-not-allowed"
>
  Wyślij (nieaktywny)
</button>
```

**Wartości:**
- Light: `#64748b` (średni szary - Slate 500)
- Dark: `#94a3b8` (jasny szary - Slate 400)

---

### 6. **`--ui-border`** - Obramowania i linie
**Przeznaczenie:** Ramki, separatory, linie podziału
```html
<!-- Przykład: Separator między sekcjami -->
<div class="border-b border-ui-border pb-6 mb-6">
  <h3 class="text-ui-text">Sekcja 1</h3>
</div>
<div>
  <h3 class="text-ui-text">Sekcja 2</h3>
</div>

<!-- Przykład: Ramka kontenera -->
<div class="border border-ui-border rounded-lg p-4">
  Zawartość w ramce
</div>

<!-- Przykład: Linia pozioma -->
<hr class="border-ui-border my-8">
```

**Wartości:**
- Light: `#cbd5e1` (jasny szary - Slate 300)
- Dark: `#334155` (ciemny szary - Slate 700)

---

### 7. **`--ui-ring`** - Focus ring (dostępność)
**Przeznaczenie:** Obramowanie dla elementów w stanie focus (klawiatura)
```html
<!-- Przykład: Przycisk z focus ring -->
<button class="px-4 py-2 bg-brand-primary text-white rounded-lg
               focus-visible:ring-2 focus-visible:ring-ui-ring">
  Kliknij mnie (nawiguj Tab)
</button>

<!-- Przykład: Input z focus ring -->
<input 
  type="text"
  class="border border-ui-border rounded px-3 py-2
         focus:outline-none focus:ring-2 focus:ring-ui-ring"
/>

<!-- Przykład: Link z focus ring -->
<a href="#" class="text-brand-primary underline
                   focus-visible:ring-2 focus-visible:ring-ui-ring rounded">
  Link z focus
</a>
```

**Wartości:**
- Light: `#2563eb` (niebieski - Blue 600)
- Dark: `#60a5fa` (jasny niebieski - Blue 400)

---

### 8. **`--ui-ghost-hover`** - Tło przezroczystych elementów
**Przeznaczenie:** Hover dla przycisków "ghost", cancel, przezroczystych
```html
<!-- Przykład: Przycisk Cancel -->
<button class="px-4 py-2 text-ui-text hover:bg-ui-ghost-hover 
               rounded-lg transition-colors">
  Anuluj
</button>

<!-- Przykład: Przycisk ikony -->
<button class="p-2 rounded-full hover:bg-ui-ghost-hover
               transition-colors">
  <svg>...</svg>
</button>

<!-- Przykład: Element listy -->
<li class="px-4 py-2 hover:bg-ui-ghost-hover rounded cursor-pointer">
  Element listy
</li>
```

**Wartości:**
- Light: `#f1f5f9` (jasny szaro-niebieski - Slate 100)
- Dark: `#1e293b` (granatowy - Slate 800)

---

## Zmienne Akcji (CRUD)

### 9. **`--brand-primary`** - Akcja główna
**Przeznaczenie:** Główny przycisk akcji, Update, Zapisz, Edytuj
```html
<!-- Przykład: Główny CTA -->
<button class="px-6 py-3 bg-brand-primary text-white 
               font-semibold rounded-lg hover:opacity-90 
               transition-opacity">
  Aktualizuj Profil
</button>

<!-- Przykład: Primary button w formularzu -->
<button type="submit" 
        class="px-4 py-2 bg-brand-primary text-white rounded">
  Zapisz zmiany
</button>
```

**Wartości:**
- Light: `#2563eb` (niebieski - Blue 600)
- Dark: `#60a5fa` (jasny niebieski - Blue 400)

---

### 10. **`--ui-success`** - Akcje pozytywne
**Przeznaczenie:** Create, Potwierdź, Sukces, Dodaj, Zatwierdź
```html
<!-- Przykład: Przycisk tworzenia -->
<button class="px-4 py-2 bg-ui-success text-white rounded-lg">
  <span class="flex items-center gap-2">
    <svg>+</svg>
    Dodaj nowy
  </span>
</button>

<!-- Przykład: Komunikat sukcesu -->
<div class="bg-ui-success/10 border border-ui-success/20 
            text-ui-success rounded-lg p-4">
  <p class="font-medium">Sukces!</p>
  <p class="text-sm">Dane zostały zapisane.</p>
</div>

<!-- Przykład: Status aktywny -->
<span class="inline-flex items-center gap-1">
  <div class="w-2 h-2 bg-ui-success rounded-full"></div>
  <span class="text-ui-success text-sm">Aktywny</span>
</span>
```

**Wartości:**
- Light: `#16a34a` (zielony - Green 600)
- Dark: `#4ade80` (jasny zielony - Green 400)

---

### 11. **`--ui-danger`** - Akcje negatywne
**Przeznaczenie:** Delete, Anuluj, Usuń, Błędy, Odrzuć
```html
<!-- Przykład: Przycisk usuwania -->
<button class="px-4 py-2 bg-ui-danger text-white rounded-lg
               hover:bg-red-700 transition-colors">
  Usuń konto
</button>

<!-- Przykład: Komunikat błędu -->
<div class="bg-ui-danger/10 border border-ui-danger/20 
            text-ui-danger rounded-lg p-4">
  <p class="font-medium">Błąd!</p>
  <p class="text-sm">Wystąpił problem z połączeniem.</p>
</div>

<!-- Przykład: Ikona ostrzeżenia -->
<button class="text-ui-danger p-2 hover:bg-ui-ghost-hover rounded">
  <svg class="w-5 h-5">🗑️</svg>
</button>
```

**Wartości:**
- Light: `#dc2626` (czerwony - Red 600)
- Dark: `#fb7185` (różowy - Rose 400)

---

### 12. **`--ui-warning`** - Ostrzeżenia i stany przejściowe
**Przeznaczenie:** Ostrzeżenia, loading, pending, uwagi
```html
<!-- Przykład: Ostrzeżenie -->
<div class="bg-ui-warning/10 border border-ui-warning/20 
            text-ui-warning rounded-lg p-4">
  <p class="font-medium">Uwaga!</p>
  <p class="text-sm">Ta operacja jest nieodwracalna.</p>
</div>

<!-- Przykład: Status oczekujący -->
<span class="inline-flex items-center gap-2">
  <div class="w-3 h-3 bg-ui-warning rounded-full animate-pulse"></div>
  <span class="text-ui-warning text-sm">Oczekuje na akceptację</span>
</span>

<!-- Przykład: Przycisk z ostrzeżeniem -->
<button class="px-4 py-2 border border-ui-warning 
               text-ui-warning rounded hover:bg-ui-warning/10">
  Ręczna weryfikacja
</button>
```

**Wartości:**
- Light: `#ea580c` (pomarańczowy - Orange 600)
- Dark: `#fbbf24` (żółty - Amber 400)

---

## Przykłady Komponentów z Motywami

### Przykład 1: Kompletna karta z przyciskami akcji
```html
<div class="bg-ui-surface border border-ui-border rounded-xl p-6 
            shadow-sm transition-all hover:shadow-md">
  
  <!-- Nagłówek -->
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-ui-text font-bold text-lg">Projekt X</h3>
    <span class="text-ui-text-muted text-sm">ID: #12345</span>
  </div>
  
  <!-- Treść -->
  <p class="text-ui-text-muted mb-6">
    Opis projektu z wykorzystaniem zmiennych tekstowych.
  </p>
  
  <!-- Separator -->
  <hr class="border-ui-border my-4">
  
  <!-- Przyciski akcji -->
  <div class="flex gap-3">
    <!-- Primary - Edycja -->
    <button class="px-4 py-2 bg-brand-primary text-white rounded-lg 
                   flex-1 hover:opacity-90">
      Edytuj
    </button>
    
    <!-- Success - Zatwierdź -->
    <button class="px-4 py-2 bg-ui-success text-white rounded-lg 
                   flex-1 hover:opacity-90">
      Akceptuj
    </button>
    
    <!-- Danger - Usuń -->
    <button class="px-4 py-2 bg-ui-danger text-white rounded-lg 
                   flex-1 hover:opacity-90">
      Usuń
    </button>
  </div>
</div>
```

### Przykład 2: Formularz z różnymi stanami
```html
<div class="max-w-md mx-auto p-6 bg-ui-surface rounded-xl">
  <h2 class="text-ui-text text-2xl font-bold mb-6">Formularz</h2>
  
  <div class="space-y-4">
    <!-- Pole tekstowe -->
    <div>
      <label class="text-ui-text block mb-2 font-medium">
        Imię i nazwisko
      </label>
      <input 
        type="text"
        placeholder="Wpisz swoje dane"
        class="w-full bg-ui-input text-ui-text border border-ui-border
               rounded-lg px-4 py-3 focus:outline-none focus:ring-2 
               focus:ring-ui-ring placeholder:text-ui-text-muted"
      />
      <p class="text-ui-text-muted text-sm mt-1">
        To pole jest wymagane
      </p>
    </div>
    
    <!-- Dropdown -->
    <div>
      <label class="text-ui-text block mb-2 font-medium">
        Status
      </label>
      <select class="w-full bg-ui-input text-ui-text border border-ui-border
                     rounded-lg px-4 py-3 focus:outline-none focus:ring-2 
                     focus:ring-ui-ring">
        <option class="text-ui-text-muted" value="">
          Wybierz status
        </option>
        <option value="active" class="text-ui-success">
          Aktywny
        </option>
        <option value="pending" class="text-ui-warning">
          Oczekujący
        </option>
        <option value="inactive" class="text-ui-text-muted">
          Nieaktywny
        </option>
      </select>
    </div>
    
    <!-- Przyciski formularza -->
    <div class="flex gap-3 pt-4">
      <button type="button"
              class="px-4 py-2 text-ui-text hover:bg-ui-ghost-hover 
                     rounded-lg transition-colors flex-1">
        Anuluj
      </button>
      <button type="submit"
              class="px-4 py-2 bg-brand-primary text-white 
                     rounded-lg hover:opacity-90 flex-1">
        Zapisz
      </button>
    </div>
  </div>
</div>
```

### Przykład 3: Lista z różnymi stanami
```html
<ul class="divide-y divide-ui-border bg-ui-surface rounded-lg overflow-hidden">
  <!-- Element z sukcesem -->
  <li class="p-4 hover:bg-ui-ghost-hover transition-colors">
    <div class="flex items-center justify-between">
      <div>
        <h4 class="text-ui-text font-medium">Zadanie ukończone</h4>
        <p class="text-ui-text-muted text-sm">Dodano 5 min temu</p>
      </div>
      <span class="text-ui-success font-medium">✓ Gotowe</span>
    </div>
  </li>
  
  <!-- Element z ostrzeżeniem -->
  <li class="p-4 hover:bg-ui-ghost-hover transition-colors">
    <div class="flex items-center justify-between">
      <div>
        <h4 class="text-ui-text font-medium">Oczekujące zatwierdzenie</h4>
        <p class="text-ui-text-muted text-sm">Dodano 2 godziny temu</p>
      </div>
      <span class="text-ui-warning font-medium">⏳ Oczekuje</span>
    </div>
  </li>
  
  <!-- Element z błędem -->
  <li class="p-4 hover:bg-ui-ghost-hover transition-colors">
    <div class="flex items-center justify-between">
      <div>
        <h4 class="text-ui-text font-medium">Zadanie nieudane</h4>
        <p class="text-ui-text-muted text-sm">Dodano wczoraj</p>
      </div>
      <span class="text-ui-danger font-medium">✗ Błąd</span>
    </div>
  </li>
</ul>
```

## Zasady Użycia - Podsumowanie

1. **Zawsze używaj zmiennych funkcjonalnych** - nie bezpośrednich wartości hex
2. **Utrzymuj semantykę** - używaj kolorów zgodnie z ich przeznaczeniem
3. **Testuj kontrast** - szczególnie w trybie ciemnym
4. **Respektuj focus ring** - kluczowe dla dostępności
5. **Używaj odpowiednich hover states** - szczególnie dla przycisków ghost

## Wskazówki dla Deweloperów

### W Next.js/React komponentach:
```jsx
// DOBRZE: Używaj zmiennych funkcjonalnych
const Button = ({ variant = 'primary' }) => {
  const variants = {
    primary: 'bg-brand-primary text-white',
    success: 'bg-ui-success text-white',
    danger: 'bg-ui-danger text-white',
    ghost: 'text-ui-text hover:bg-ui-ghost-hover'
  };
  
  return (
    <button className={`px-4 py-2 rounded-lg ${variants[variant]}`}>
      Kliknij mnie
    </button>
  );
};

// ŹLE: Nie używaj bezpośrednich kolorów
const BadButton = () => (
  <button className="px-4 py-2 rounded-lg bg-blue-600">
    Nie rób tak! {/* Użyj bg-brand-primary zamiast bg-blue-600 */}
  </button>
);
```

### Customizacja w edge cases:
```css
/* Jeśli potrzebujesz niestandardowego użycia: */
.custom-element {
  background-color: var(--ui-surface);
  border: 1px solid var(--ui-border);
  color: var(--ui-text);
}

/* Jeśli potrzebujesz przezroczystości: */
.semi-transparent {
  background-color: rgba(var(--brand-primary-rgb), 0.1);
  /* Wartość RGB dostępna w rozszerzeniu zmiennych */
}
```

Ten system gwarantuje spójność, dostępność i łatwe utrzymanie przez lata.