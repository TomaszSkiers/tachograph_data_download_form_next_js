
/**
 * Uniwersalna funkcja przygotowująca dane do edycji.
 * @template T - Typ obiektu danych.
 * @param {T} data - Pełny obiekt danych, który ma być edytowany.
 * @param {(obj: T) => void} setEntry - Funkcja ustawiająca obiekt w stanie formularza.
 * @param {(view: number) => void} setView - Funkcja zmieniająca widok.
 * @param {number} targetView - Numer widoku formularza .
 */
export const handleEditData = <T,>(
  data: T,
  setEntry: (obj: T) => void,
  setView: (view: number) => void,
  targetView: number
): void => {
  setEntry(data);
  setView(targetView);
};