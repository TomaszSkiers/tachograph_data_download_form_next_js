import { Dispatch, SetStateAction } from "react";
/**
 * Wspólny interfejs bazowy - musi być zdefiniowany tutaj, 
 * aby funkcje niżej mogły z niego korzystać.
 */
interface Identifiable {
  id: string;
}
/**
 * Uniwersalna funkcja do usuwania elementu z listy na podstawie ID.
 * @template T - Typ obiektu (musi posiadać pole 'id').
 * @param {string | null} id - ID elementu do usunięcia.
 * @param {Dispatch<SetStateAction<T[]>>} setData - Hook setState do aktualizacji listy.
 * @param {() => void} [onSuccess] - Opcjonalny callback wywoływany po usunięciu (np. zamknięcie modala).
 */
export const handleDeleteData = <T extends Identifiable>(
  id: string | null,
  setData: Dispatch<SetStateAction<T[]>>,
  onSuccess?: () => void
): void => {
  if (!id) return;

  setData((prev) => prev.filter((item) => item.id !== id));
  
  if (onSuccess) {
    onSuccess();
  }
};