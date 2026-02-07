Markdown
# 🛡️ Custom Hook: useLocalStorage z walidacją Zod

Ten hook zapewnia bezpieczne zarządzanie danymi w `localStorage` w środowisku **Next.js**. Dzięki integracji z biblioteką **Zod**, aplikacja jest odporna na błędy parsowania oraz nieprawidłowe dane zapisane w przeglądarce.

## 📋 Wymagania

Wymagana jest biblioteka **Zod** do walidacji schematów:

```bash
npm install zod
🛠️ 1. Implementacja Hooka
Zapisz ten kod w pliku src/hooks/useLocalStorage.ts.

TypeScript
import { useState, useEffect } from 'react';
import { z } from 'zod';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  schema: z.ZodType<T>
) {
  // Stan domyślny (bezpieczny dla SSR)
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Odczyt danych po zamontowaniu komponentu (Client-side)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        const parsed = JSON.parse(item);
        
        // Walidacja schematem Zod
        const result = schema.safeParse(parsed);

        if (result.success) {
          setStoredValue(result.data);
        } else {
          console.error(`[LocalStorage] Nieprawidłowy format danych dla "${key}":`, result.error.format());
        }
      }
    } catch (error) {
      console.error(`[LocalStorage] Błąd odczytu klucza "${key}":`, error);
    }
  }, [key, schema]);

  // Funkcja zapisu
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Walidacja przed zapisem
      const result = schema.safeParse(valueToStore);
      if (!result.success) {
        throw new Error("Dane nie są zgodne ze schematem Zod");
      }

      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`[LocalStorage] Błąd zapisu klucza "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}
📐 2. Definicja Schematu i Typów
Stwórz plik ze schematem, np. src/types/technician.ts.

TypeScript
import { z } from 'zod';

export const TechnicianSchema = z.object({
  name: z.string().min(2),
  nr: z.string().toUpperCase(),
});

export const TechniciansArraySchema = z.array(TechnicianSchema);

// Automatyczne wygenerowanie typu TS ze schematu Zod
export type Technician = z.infer<typeof TechnicianSchema>;
🚀 3. Przykład użycia w komponencie
Przykład dla Next.js (Client Component):

TypeScript
'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { TechniciansArraySchema, Technician } from '@/types/technician';

export default function TechniciansPage() {
  const [techs, setTechs] = useLocalStorage<Technician[]>(
    'my-tech-key', 
    [], 
    TechniciansArraySchema
  );

  const addTechnician = () => {
    const newTech: Technician = { name: "Tomasz Skierś", nr: "PL0011" };
    setTechs(prev => [...prev, newTech]);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Lista Techników</h1>
      <ul className="space-y-2 mb-4">
        {techs.map((t, idx) => (
          <li key={idx} className="p-2 bg-gray-800 text-white rounded">
            {t.name} ({t.nr})
          </li>
        ))}
      </ul>
      <button 
        onClick={addTechnician}
        className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500"
      >
        Dodaj technika
      </button>
    </div>
  );
}
💎 Zalety tego rozwiązania
Brak błędów Hydracji: Dzięki useEffect dane są doczytywane dopiero po stronie klienta.

Bezpieczeństwo typów: TypeScript pilnuje Cię w edytorze, a Zod pilnuje danych w trakcie działania programu.

Automatyczna Transformacja: Możesz używać .toUpperCase() lub .trim() w schematach Zod, a hook sam wyczyści dane przed zapisem.

Odporność na błędy: Jeśli dane w localStorage zostaną ręcznie uszkodzone, aplikacja nie "wywali się" – po prostu zaloguje błąd i użyje wartości domyślnej.


---

Mam nadzieję, że ten plik ułatwi Ci pracę nad projektami w Next.js! Czy chciałbyś, abym przygotował teraz skrypt w Bashu do automatycznego tworzenia struktury tych plików na Twoim Ubuntu?