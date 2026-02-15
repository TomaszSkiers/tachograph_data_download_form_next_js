import { useCallback, useEffect, useSyncExternalStore, useRef } from 'react';
import { z } from 'zod';

export function useZodStorage<T>(key: string, schema: z.ZodSchema<T[]>) {
  const lastRawData = useRef<string | null>(null);
  const cachedData = useRef<T[]>([]);
  const schemaRef = useRef(schema);

  // Aktualizacja referencji do schematu – pozwala uniknąć niepotrzebnych przebudów funkcji
  useEffect(() => {
    schemaRef.current = schema;
  }, [schema]);

  // 1. SUBSKRYPCJA – poprawna obsługa zdarzenia 'storage'
  const subscribe = useCallback((callback: () => void) => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === key) callback();
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener('local-storage-update', callback);

    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('local-storage-update', callback);
    };
  }, [key]);

  // 2. ODCZYT – zależny tylko od klucza, schemat pobierany z ref
  const getSnapshot = useCallback(() => {
    if (typeof window === 'undefined') return [];

    const item = window.localStorage.getItem(key);

    // Jeśli dane nie zmieniły się od ostatniego razu, zwróć zapisaną tablicę
    if (item === lastRawData.current) {
      return cachedData.current;
    }

    lastRawData.current = item;

    if (!item) {
      cachedData.current = [];
      return cachedData.current;
    }

    try {
      const parsed = JSON.parse(item);
      const result = schemaRef.current.safeParse(parsed);
      cachedData.current = result.success ? result.data : [];
    } catch {
      cachedData.current = [];
    }

    return cachedData.current;
  }, [key]);

  const getServerSnapshot = () => [];

  const data = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // 3. ZAPIS – używa getSnapshot, aby zawsze mieć aktualne dane
  const setValue = useCallback((value: T[] | ((val: T[]) => T[])) => {
    try {
      const currentData = getSnapshot(); // gwarantuje świeżość danych
      const valueToStore = value instanceof Function ? value(currentData) : value;
      const validation = schemaRef.current.safeParse(valueToStore);

      if (validation.success) {
        window.localStorage.setItem(key, JSON.stringify(validation.data));
        window.dispatchEvent(new Event('local-storage-update'));
      }
    } catch (error) {
      console.error('LocalStorage Save Error:', error);
    }
  }, [key, getSnapshot]);

  // 4. SAMONAPRAWA – naprawia uszkodzone dane przy starcie
  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      try {
        if (!schemaRef.current.safeParse(JSON.parse(item)).success) {
          throw new Error('Invalid data');
        }
      } catch {
        window.localStorage.setItem(key, JSON.stringify([]));
        window.dispatchEvent(new Event('local-storage-update'));
      }
    }
  }, [key]);

  return [data, setValue] as const;
}