# 📦 useLocalStorage – zapis tablicy obiektów (React + TypeScript + Zod)

Ten poradnik pokazuje **krok po kroku**, jak **bezpiecznie zapisywać tablicę obiektów do `localStorage`** przy użyciu:

* React
* TypeScript
* własnego hooka `useLocalStorage`
* Zod (walidacja danych)

Całość jest gotowa do **skopiowania i użycia w projekcie produkcyjnym**.

---

## 🎯 Cel

Chcemy zapisywać i odczytywać z `localStorage` **tablicę obiektów**, np.:

* koszyk sklepu
* listę zadań (TODO)
* zapisane produkty
* cache danych

Przykładowy obiekt:

```ts
{
  id: string;
  name: string;
  quantity: number;
  price: number;
}
```

---

## 1️⃣ Zdefiniuj schemat POJEDYNCZEGO obiektu (Zod)

Najpierw **zawsze opisujemy jeden obiekt**, a dopiero potem robimy z niego tablicę.

```ts
import { z } from 'zod';

export const itemSchema = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number().int().min(1),
  price: z.number().nonnegative(),
});
```

---

## 2️⃣ Zdefiniuj schemat TABLICY obiektów

```ts
export const itemsSchema = z.array(itemSchema);
```

To **ten schemat będzie walidowany przed zapisem i po odczycie z `localStorage`**.

---

## 3️⃣ (Opcjonalnie) Wyciągnij typ z Zoda

Najlepsza praktyka: **nie pisz ręcznie interfejsów**.

```ts
export type Item = z.infer<typeof itemSchema>;
```

---

## 4️⃣ Użyj hooka `useLocalStorage`

```ts
const [items, setItems] = useLocalStorage<Item[]>(
  'items',
  [],
  itemsSchema
);
```

* `items` → zawsze tablica
* dane są walidowane
* złe dane w `localStorage` zostaną automatycznie usunięte

---

## 5️⃣ Dodawanie obiektu do tablicy

```ts
const addItem = (item: Item) => {
  setItems((prev) => [...prev, item]);
};
```

Przykład użycia:

```ts
addItem({
  id: crypto.randomUUID(),
  name: 'Keyboard',
  quantity: 1,
  price: 299,
});
```

---

## 6️⃣ Aktualizacja obiektu w tablicy

```ts
const updateItem = (id: string, data: Partial<Item>) => {
  setItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, ...data } : item
    )
  );
};
```

Przykład:

```ts
updateItem('123', { quantity: 3 });
```

---

## 7️⃣ Usuwanie obiektu z tablicy

```ts
const removeItem = (id: string) => {
  setItems((prev) => prev.filter((item) => item.id !== id));
};
```

---

## 8️⃣ Czyszczenie całej tablicy

```ts
const clearItems = () => {
  setItems([]);
};
```

---

## 9️⃣ Co faktycznie trafia do `localStorage`

```json
[
  {
    "id": "a1",
    "name": "Keyboard",
    "quantity": 1,
    "price": 299
  },
  {
    "id": "b2",
    "name": "Mouse",
    "quantity": 2,
    "price": 99
  }
]
```

Czytelny JSON + pełna walidacja.

---

## ❌ Najczęstsze błędy

### ❌ Brak walidacji obiektu

```ts
z.array(z.any()) // źle
```

### ❌ Mutowanie tablicy

```ts
items.push(item); // ❌
```

### ❌ Schemat tworzony inline

```ts
useLocalStorage('x', [], z.array(itemSchema)); // ❌
```

✅ Zawsze trzymaj schemat **poza komponentem**.

---

## ✅ Dobra praktyka – osobny hook domenowy

```ts
export function useItems() {
  const [items, setItems] = useLocalStorage<Item[]>(
    'items',
    [],
    itemsSchema
  );

  const addItem = (item: Item) =>
    setItems((prev) => [...prev, item]);

  const updateItem = (id: string, data: Partial<Item>) =>
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...data } : item
      )
    );

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((item) => item.id !== id));

  const clearItems = () => setItems([]);

  return {
    items,
    addItem,
    updateItem,
    removeItem,
    clearItems,
  };
}
```

---

## 🧠 Podsumowanie

* Zod = bezpieczeństwo danych
* `useLocalStorage` = prostota jak `useState`
* Tablica obiektów = **zero problemów**, jeśli masz dobry schemat
* Idealne do: koszyka, TODO, cache, ustawień użytkownika

Gotowe. Możesz kopiować i używać w projekcie 🚀
