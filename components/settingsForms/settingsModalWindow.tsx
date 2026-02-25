import { handleDeleteData } from "@/functions/confirmDelete";
import { useZodStorage } from "@/hooks/useLocalStorage_test_2";
import { primaryButton, warningButton } from "@/styles/buttonsStyles";
import { Dispatch, SetStateAction } from "react";
import { z } from "zod";


//* Wymaga, aby każdy obiekt przekazany do modala posiadał unikalny identyfikator.

interface Identifiable {
  id: string;
}

/**
 * Właściwości komponentu SettingsModalWindow.
 * * @template T - Typ obiektu przechowywanego w tablicy (musi zawierać pole `id`).
 */

interface Props<T extends Identifiable> {
  /** Funkcja aktualizująca stan usuniętego ID. Przekazanie `null` zamyka modal. */
  setDeletedId: Dispatch<SetStateAction<string | null>>;
  /** ID elementu, który ma zostać usunięty. */
  deletedId: string;
  /** Główny nagłówek wyświetlany w modalu. */
  header: string;
  /** Opcjonalny, dodatkowy tekst informacyjny wyświetlany pod nagłówkiem. */
  info?: string;
  /** Klucz, pod którym dane są zapisane w LocalStorage. */
  dataName: string;
  /** Schemat Zod służący do walidacji danych wyciąganych z LocalStorage. */
  schema: z.ZodSchema<T[]>;
}

/**
 * Generyczne okno modalne służące do potwierdzania usunięcia danych.
 * * @example
 * <SettingsModalWindow
 * deletedId={selectedId}
 * setDeletedId={setSelectedId}
 * header="Czy na pewno usunąć ten element"
 * dataName="nazwa zmiennej w local stroage"
 * schema={ObjectSchemaArray}
 * />
 */

export default function SettingsModalWindow<T extends Identifiable>({
  setDeletedId,
  header,
  info,
  deletedId,
  dataName,
  schema,
}: Props<T>) {
  const [, setData] = useZodStorage(dataName, schema);

  return (
    <>
      {/**background with blur */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40" />

      {/**modal window */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="flex flex-col gap-5 bg-ui-surface p-5 border border-ui-warning rounded-2xl">
          <h2 className="font-bold">
            {header} <br />
            {info} ?
          </h2>
          <div className="flex justify-between pointer-events-auto">
            <button
              className={`${primaryButton} px-4 py-1 min-w-25 justify-center font-bold`}
              onClick={() => setDeletedId(null)}
            >
              anuluj
            </button>
            <button
              className={`${warningButton} px-4 py-1 min-w-25 justify-center font-bold`}
              onClick={() => {
                handleDeleteData(deletedId, setData, () => setDeletedId(null));
              }}
            >
              usuń
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


