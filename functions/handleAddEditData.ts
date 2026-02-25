import { Dispatch, SetStateAction } from 'react';

/**
 * Interfejs bazowy dla obiektów posiadających identyfikator.
 */
interface Identifiable {
  id: string;
}

/**
 * Uniwersalna funkcja do obsługi danych (Tworzenie / Edycja), z obiektu RHF formularza, 
 * * @template T - Typ obiektu danych (musi posiadać pole 'id').
 * @param {Omit<T, 'id'>} item - Dane obiektu bez ID.
 * @param {string} id - Identyfikator obiektu (pusty string = nowy obiekt).
 * @param {Dispatch<SetStateAction<T[]>>} setData - Hook setState do aktualizacji listy danych.
 * @param {(view: number) => void} onSuccess - Funkcja zmieniająca widok, przyjmująca numer widoku jako argument.
 * @param {number} targetView - Numer widoku, który ma zostać ustawiony po sukcesie. 
 */
export const handleSaveData = <T extends Identifiable>(
  item: Omit<T, 'id'>,
  id: string,
  setData: Dispatch<SetStateAction<T[]>>,
  onSuccess: (view: number) => void,
  targetView: number
): void => {
  try {
    const isNewItem = id === '';

    if (isNewItem) {
      const newItem = {
        ...item,
        id: crypto.randomUUID(),
      } as T;

      setData((prev) => [...prev, newItem]);
    } else {
      const updatedItem = {
        ...item,
        id: id,
      } as T;

      setData((prev) =>
        prev.map((existingItem) =>
          existingItem.id === id ? updatedItem : existingItem
        )
      );
    }

    // Wywołanie funkcji onSuccess z przekazanym argumentem targetView
    onSuccess(targetView);
    
  } catch (error) {
    console.error('Błąd podczas operacji na danych:', error);
  }
};