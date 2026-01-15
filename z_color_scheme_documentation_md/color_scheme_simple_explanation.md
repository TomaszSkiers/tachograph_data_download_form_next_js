# 📚 Dokumentacja Systemu Kolorów - Dla Każdego

## 🌞🌚 Dwa Motywy: Jasny (Light) i Ciemny (Dark)

System automatycznie zmienia kolory między motywami. Używaj tak samo w obu!

---

## 🎨 12 ZMIENNYCH - CO DO CZEGO

### 🏗️ **1. PODSTAWY - TŁA**
**Użyj, gdy potrzebujesz:** Tła całej strony, sekcji, kontenerów

```html
<!-- GŁÓWNE TŁO CAŁEJ STRONY -->
<body class="bg-ui-bg">
  <!-- cała twoja strona -->
</body>

<!-- TŁO KARTY / MODALA / PANELU -->
<div class="bg-ui-surface p-4">
  <h2>Nazwa produktu</h2>
  <p>Opis produktu</p>
</div>

<!-- MOTYWY: Działa w obu! -->
<!-- Light: białe tło -->
<!-- Dark: ciemno-granatowe tło -->
```

**Jakie elementy użyją tego koloru:**
- ✅ Całe tło strony (body)
- ✅ Karty produktów
- ✅ Modale (pop-up okna)
- ✅ Panele boczne
- ✅ Dropdown menu

---

### ✏️ **2. POLA FORMULARZY**
**Użyj, gdy potrzebujesz:** Inputy, select, textarea, pola do wpisywania

```html
<!-- POLE TEKSTOWE -->
<input 
  type="text" 
  placeholder="Twoje imię"
  class="bg-ui-input text-ui-text"
/>

<!-- LISTA ROZWIJANA -->
<select class="bg-ui-input text-ui-text">
  <option>Wybierz...</option>
</select>

<!-- MOTYWY: -->
<!-- Light: jasno-szare tło pola -->
<!-- Dark: ciemno-granatowe tło pola -->
```

**Jakie elementy użyją tego koloru:**
- ✅ `<input type="text">`
- ✅ `<input type="email">`
- ✅ `<select>` (dropdown)
- ✅ `<textarea>`
- ✅ Wyszukiwarka

---

### 📝 **3. TEKSTY**
**Mamy 3 rodzaje tekstów:**

#### **A. GŁÓWNY TEKST** (`text-ui-text`)
**Użyj dla:** Nagłówki, akapity, ważne teksty
```html
<h1 class="text-ui-text">Witaj na stronie!</h1>
<p class="text-ui-text">To jest ważna informacja.</p>
<label class="text-ui-text">Email:</label>

<!-- MOTYWY: -->
<!-- Light: prawie czarny tekst -->
<!-- Dark: prawie biały tekst -->
```

#### **B. TEKST POMOCNICZY** (`text-ui-text-muted`)
**Użyj dla:** Placeholdery, podpisy, mniej ważne teksty
```html
<input placeholder="jan@example.com" class="placeholder:text-ui-text-muted">
<p class="text-ui-text-muted text-sm">Hasło min. 8 znaków</p>
<span class="text-ui-text-muted">Dodano 5 min temu</span>

<!-- MOTYWY: -->
<!-- Light: szary tekst -->
<!-- Dark: jasno-szary tekst -->
```

#### **C. OBRAMOWANIA** (`border-ui-border`)
**Użyj dla:** Ramki, linie, separatory
```html
<div class="border border-ui-border p-4">Ramka wokół</div>
<hr class="border-ui-border my-4"> <!-- Linia pozioma -->
<div class="border-b border-ui-border">Separator</div>

<!-- MOTYWY: -->
<!-- Light: jasno-szara linia -->
<!-- Dark: ciemno-szara linia -->
```

---

### 🖱️ **4. INTERAKCJE (hover, focus)**

#### **A. HOVER DLA PRZEZROCZYSTYCH** (`hover:bg-ui-ghost-hover`)
**Użyj, gdy:** Przycisk jest przezroczysty, element listy
```html
<!-- PRZYCISK ANULUJ -->
<button class="hover:bg-ui-ghost-hover p-2">
  Anuluj
</button>

<!-- ELEMENT LISTY -->
<li class="hover:bg-ui-ghost-hover p-2">
  Opcja 1
</li>

<!-- MOTYWY: -->
<!-- Light: lekko szare tło po najechaniu -->
<!-- Dark: ciemniejsze tło po najechaniu -->
```

#### **B. FOCUS RING** (`focus:ring-ui-ring`)
**Użyj zawsze dla:** Inputy, przyciski, linki (dla klawiatury!)
```html
<input class="focus:ring-2 focus:ring-ui-ring">
<button class="focus:ring-2 focus:ring-ui-ring">Kliknij</button>
<a href="#" class="focus:ring-2 focus:ring-ui-ring">Link</a>

<!-- MOTYWY: -->
<!-- Light: niebieskie kółko -->
<!-- Dark: jasno-niebieskie kółko -->
```

---

## 🎯 **5. PRZYCISKI AKCJI (najważniejsze!)**

### **NIEBIESKI** - GŁÓWNA AKCJA (`bg-brand-primary`)
```html
<!-- UPDATE / ZAPISZ / DALEJ -->
<button class="bg-brand-primary text-white">
  Zapisz zmiany
</button>

<button class="bg-brand-primary text-white">
  Aktualizuj
</button>

<button class="bg-brand-primary text-white">
  Kontynuuj
</button>

<!-- MOTYWY: -->
<!-- Light: ciemno-niebieski -->
<!-- Dark: jasno-niebieski -->
```

### **ZIELONY** - TWORZENIE / SUKCES (`bg-ui-success`)
```html
<!-- CREATE / DODAJ / POTWIERDŹ -->
<button class="bg-ui-success text-white">
  + Dodaj nowy
</button>

<button class="bg-ui-success text-white">
  ✅ Potwierdź
</button>

<!-- KOMUNIKAT SUKCESU -->
<div class="text-ui-success">
  Sukces! Dane zapisane.
</div>

<!-- MOTYWY: -->
<!-- Light: ciemno-zielony -->
<!-- Dark: jasno-zielony -->
```

### **CZERWONY** - USUWANIE / BŁĘDY (`bg-ui-danger`)
```html
<!-- DELETE / USUŃ / ANULUJ -->
<button class="bg-ui-danger text-white">
  🗑️ Usuń
</button>

<button class="bg-ui-danger text-white">
  Anuluj zamówienie
</button>

<!-- KOMUNIKAT BŁĘDU -->
<div class="text-ui-danger">
  ❌ Wystąpił błąd
</div>

<!-- MOTYWY: -->
<!-- Light: ciemno-czerwony -->
<!-- Dark: jasno-różowy -->
```

### **POMARAŃCZOWY** - OSTRZEŻENIA (`bg-ui-warning`)
```html
<!-- UWAGA / OCZEKUJĄCE -->
<button class="bg-ui-warning text-white">
  ⚠️ Ostrzeżenie
</button>

<!-- STATUS -->
<span class="text-ui-warning">
  ⏳ Oczekuje na akceptację
</span>

<!-- MOTYWY: -->
<!-- Light: ciemno-pomarańczowy -->
<!-- Dark: żółty -->
```

---

## 🎓 PRZYKŁADY OD ZERA

### **PRZYKŁAD 1: Prosta strona**
```html
<body class="bg-ui-bg text-ui-text">
  <!-- Nagłówek -->
  <header class="bg-ui-surface border-b border-ui-border p-4">
    <h1 class="text-2xl">Moja Strona</h1>
  </header>
  
  <!-- Główna zawartość -->
  <main class="p-4">
    <!-- Karta -->
    <div class="bg-ui-surface border border-ui-border p-4 rounded">
      <h2 class="text-lg mb-2">Tytuł karty</h2>
      <p class="text-ui-text-muted mb-4">Opis karty...</p>
      
      <!-- Przyciski -->
      <div class="flex gap-2">
        <button class="bg-brand-primary text-white px-4 py-2 rounded">
          Edytuj
        </button>
        <button class="bg-ui-danger text-white px-4 py-2 rounded">
          Usuń
        </button>
      </div>
    </div>
  </main>
</body>
```

### **PRZYKŁAD 2: Formularz rejestracji**
```html
<div class="max-w-md mx-auto mt-8">
  <div class="bg-ui-surface border border-ui-border rounded-lg p-6">
    <h2 class="text-xl mb-4">Zarejestruj się</h2>
    
    <!-- Pole email -->
    <div class="mb-4">
      <label class="text-ui-text block mb-1">Email:</label>
      <input 
        type="email"
        placeholder="twoj@email.com"
        class="w-full bg-ui-input border border-ui-border 
               rounded px-3 py-2 placeholder:text-ui-text-muted
               focus:outline-none focus:ring-2 focus:ring-ui-ring"
      />
    </div>
    
    <!-- Pole hasła -->
    <div class="mb-6">
      <label class="text-ui-text block mb-1">Hasło:</label>
      <input 
        type="password"
        placeholder="Wpisz hasło"
        class="w-full bg-ui-input border border-ui-border 
               rounded px-3 py-2 placeholder:text-ui-text-muted
               focus:outline-none focus:ring-2 focus:ring-ui-ring"
      />
      <p class="text-ui-text-muted text-sm mt-1">
        Minimum 8 znaków
      </p>
    </div>
    
    <!-- Przyciski -->
    <div class="flex gap-3">
      <button class="flex-1 hover:bg-ui-ghost-hover py-2 rounded">
        Wróć
      </button>
      <button class="flex-1 bg-brand-primary text-white py-2 rounded">
        Załóż konto
      </button>
    </div>
  </div>
</div>
```

### **PRZYKŁAD 3: Lista zadań (todo list)**
```html
<div class="bg-ui-surface rounded-lg p-4">
  <h3 class="text-lg mb-4">Moje zadania</h3>
  
  <ul class="space-y-2">
    <!-- Zadanie wykonane -->
    <li class="flex items-center justify-between p-3 
                bg-ui-input rounded hover:bg-ui-ghost-hover">
      <span class="text-ui-text">Kupić mleko</span>
      <span class="text-ui-success">✅ Wykonane</span>
    </li>
    
    <!-- Zadanie w trakcie -->
    <li class="flex items-center justify-between p-3 
                bg-ui-input rounded hover:bg-ui-ghost-hover">
      <span class="text-ui-text">Napisać raport</span>
      <span class="text-ui-warning">⏳ W trakcie</span>
    </li>
    
    <!-- Zadanie z błędem -->
    <li class="flex items-center justify-between p-3 
                bg-ui-input rounded hover:bg-ui-ghost-hover">
      <span class="text-ui-text">Wysłać email</span>
      <span class="text-ui-danger">❌ Błąd</span>
    </li>
  </ul>
  
  <!-- Przycisk dodaj -->
  <button class="w-full mt-4 bg-ui-success text-white py-2 rounded">
    + Dodaj nowe zadanie
  </button>
</div>
```

---

## 🎮 ĆWICZENIE: Zbuduj sam!

### **Zadanie 1: Alert box**
```html
<!-- Sukces -->
<div class="bg-[JAKI KOLOR?] text-white p-4 rounded">
  ✅ Płatność zaakceptowana!
</div>

<!-- Błąd -->
<div class="bg-[JAKI KOLOR?] text-white p-4 rounded">
  ❌ Wystąpił błąd płatności
</div>

<!-- Ostrzeżenie -->
<div class="bg-[JAKI KOLOR?] text-white p-4 rounded">
  ⚠️ Hasło jest za słabe
</div>
```

**Odpowiedź:**
```html
<!-- Sukces -->
<div class="bg-ui-success text-white p-4 rounded">✅</div>

<!-- Błąd -->
<div class="bg-ui-danger text-white p-4 rounded">❌</div>

<!-- Ostrzeżenie -->
<div class="bg-ui-warning text-white p-4 rounded">⚠️</div>
```

### **Zadanie 2: Przyciski formularza**
```html
<!-- Główny przycisk -->
<button class="bg-[JAKI KOLOR?] text-white px-4 py-2">
  Zapisz produkt
</button>

<!-- Przycisk usuwania -->
<button class="bg-[JAKI KOLOR?] text-white px-4 py-2">
  Usuń produkt
</button>

<!-- Przycisk anuluj -->
<button class="text-ui-text hover:bg-[JAKI KOLOR?] px-4 py-2">
  Anuluj
</button>
```

**Odpowiedź:**
```html
<button class="bg-brand-primary text-white">Zapisz produkt</button>
<button class="bg-ui-danger text-white">Usuń produkt</button>
<button class="text-ui-text hover:bg-ui-ghost-hover">Anuluj</button>
```

---

## 📋 CHEAT SHEET - Szybka ściągawka

| Kiedy chcesz... | Użyj tego! | Przykład |
|----------------|------------|----------|
| **Tło strony** | `bg-ui-bg` | `<body class="bg-ui-bg">` |
| **Tło karty** | `bg-ui-surface` | `<div class="bg-ui-surface">` |
| **Pole input** | `bg-ui-input` | `<input class="bg-ui-input">` |
| **Nagłówek** | `text-ui-text` | `<h1 class="text-ui-text">` |
| **Placeholder** | `placeholder:text-ui-text-muted` | `<input placeholder="...">` |
| **Ramka** | `border-ui-border` | `<div class="border border-ui-border">` |
| **Hover (przezroczysty)** | `hover:bg-ui-ghost-hover` | `<button class="hover:bg-ui-ghost-hover">` |
| **Focus (klawiatura)** | `focus:ring-ui-ring` | `<input class="focus:ring-ui-ring">` |
| **Przycisk ZAPISZ** | `bg-brand-primary` | `<button class="bg-brand-primary">` |
| **Przycisk DODAJ** | `bg-ui-success` | `<button class="bg-ui-success">` |
| **Przycisk USUŃ** | `bg-ui-danger` | `<button class="bg-ui-danger">` |
| **Komunikat BŁĄD** | `text-ui-danger` | `<p class="text-ui-danger">` |
| **Status OCZEKUJE** | `text-ui-warning` | `<span class="text-ui-warning">` |

---

## 🚀 Proste zasady:

1. **TŁA** → Zaczynaj od `bg-ui-` (bg-ui-bg, bg-ui-surface, bg-ui-input)
2. **TEKSTY** → Zaczynaj od `text-ui-` (text-ui-text, text-ui-text-muted)
3. **PRZYCISKI AKCJI** → Używaj konkretnych nazw (brand-primary, ui-success, ui-danger)
4. **INTERAKCJE** → `hover:bg-ui-ghost-hover` i `focus:ring-ui-ring`
5. **MOTYWY** → Nie martw się! System sam zmienia kolory między light/dark

---

## 💡 Najczęstsze pytania:

**Q: Który kolor dla przycisku "Zaloguj"?**
A: `bg-brand-primary` (niebieski) - to główna akcja

**Q: Który kolor dla komunikatu "Dodano pomyślnie"?**
A: `text-ui-success` lub `bg-ui-success` (zielony)

**Q: Jak zrobić szare tło dla inputa?**
A: `bg-ui-input` - działa w obu motywach!

**Q: Jak zrobić przezroczysty przycisk który się podświetla?**
A: 
```html
<button class="hover:bg-ui-ghost-hover">
  Anuluj
</button>
```

**Pamiętaj:** Wystarczy że użyjesz tych 12 zmiennych. System zrobi resztę! 🎉