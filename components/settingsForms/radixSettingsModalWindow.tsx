"use client";
import { handleDeleteData } from "@/functions/confirmDelete";
import { useZodStorage } from "@/hooks/useLocalStorage_test_2";
import { primaryButton, warningButton } from "@/styles/buttonsStyles";
import * as Dialog from "@radix-ui/react-dialog";
import z from "zod";

/**
 * Interfejs wymuszający obecność unikalnego identyfikatora.
 * Zapobiega próbom usuwania obiektów, których nie da się jednoznacznie zidentyfikować.
 */
interface Identifiable {
  id: string;
}

/**
 * @template T - Typ danych rozszerzający Identifiable, który jest przechowywany w Local Storage.
 */
interface ModalProps<T extends Identifiable> {
  /** Funkcja wywoływana przy zamykaniu modala (np. ustawienie selectedId na null). */
  onClose: () => void;
  /** ID elementu wybranego do usunięcia. Jeśli null, modal pozostaje zamknięty. */
  selectedId: string | null;
  /** Nagłówek wyświetlany w modalu. */
  header: string;
  /** Opcjonalna dodatkowa informacja lub doprecyzowanie pytania. */
  info?: string;
  /** Klucz, pod którym dane są zapisane w Local Storage. */
  dataName: string;
  /** Schemat Zod do walidacji tablicy obiektów typu T. */
  schema: z.ZodSchema<T[]>;
}

/**
 * Generyczny komponent modala potwierdzającego usunięcie elementu,
 * zintegrowany z Radix UI oraz customowym hookiem do obsługi Local Storage.
 * * @example
 * <RadixSettingsModalWindow
 * selectedId={id}
 * onClose={() => setId(null)}
 * header="Czy na pewno?"
 * dataName="user_tasks"
 * schema={TaskSchema}
 * />
 */
export default function RadixSettingsModalWindow<T extends Identifiable>({
  selectedId,
  onClose,
  header,
  info,
  dataName,
  schema,
}: ModalProps<T>) {
  
  const [, setData] = useZodStorage(dataName, schema);

  return (
    <Dialog.Root open={Boolean(selectedId)} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />

        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-ui-surface border border-ui-warning p-6 rounded-lg z-50">
          <Dialog.Title className="text-xl font-bold text-ui-text">
            {header} <br />
            {info && <span className="text-sm font-normal">{info} ?</span>}
          </Dialog.Title>

          <div className="flex justify-around my-5">
            <Dialog.Close
              className={`${primaryButton} px-4 py-1 min-w-25 justify-center `}
            >
              anuluj
            </Dialog.Close>

            <button
              className={`${warningButton} px-4 py-1 min-w-25 justify-center`}
              onClick={() => {
                handleDeleteData(selectedId, setData, onClose);
              }}
            >
              usuń
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
