'use client'

import { useEffect, useState } from 'react';
import { z } from 'zod';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  schema: z.ZodType<T>
) {
  const readValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      if (!item) return initialValue;

      const parsed = JSON.parse(item);
      const result = schema.safeParse(parsed);

      if (result.success) {
        return result.data;
      }

      console.warn(
        `[LocalStorage] Nieprawidłowe dane dla "${key}", czyszczę localStorage`,
        result.error.format()
      );

      window.localStorage.removeItem(key);
      return initialValue;
    } catch (error) {
      console.error(`[LocalStorage] Błąd odczytu "${key}"`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      const result = schema.safeParse(valueToStore);
      if (!result.success) {
        throw result.error;
      }

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`[LocalStorage] Błąd zapisu "${key}"`, error);
    }
  };

  // Synchronizacja między kartami / zakładkami
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onStorage = (event: StorageEvent) => {
      if (event.key !== key) return;

      if (event.newValue === null) {
        setStoredValue(initialValue);
        return;
      }

      try {
        const parsed = JSON.parse(event.newValue);
        const result = schema.safeParse(parsed);

        if (result.success) {
          setStoredValue(result.data);
        }
      } catch {
        setStoredValue(initialValue);
      }
    };

    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
    // schema pomijamy świadomie – zakładamy, że jest statyczny
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [storedValue, setValue] as const;
}


//todo trzeba jeszcze raz zbudować hooka do zapisu w local storage
//todo albo poszukać gotowca npm