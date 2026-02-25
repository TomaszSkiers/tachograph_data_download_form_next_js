/**
 * Uniwersalna funkcja do inicjowania tworzenia nowego elementu.
 * @template T - Typ wynikowego obiektu (np. Technician).
 * @template S - Typ schematu (np. ZodSchema).
 * @param {S} schema - Schemat używany do generowania danych.
 * @param {(s: S) => T} factory - Funkcja tworząca pusty obiekt ze schematu.
 * @param {(obj: T) => void} setEntry - Funkcja aktualizująca stan obiektu.
 * @param {(view: number) => void} setView - Funkcja zmieniająca widok.
 * @param {number} targetView - ID docelowego widoku.
 */
export const handleCreateNew = <T, S>(
  schema: S,
  factory: (s: S) => T,
  setEntry: (obj: T) => void,
  setView: (view: number) => void,
  targetView: number = 7,
): void => {
  try {
    const emptyObject = factory(schema);
    setEntry(emptyObject);
    setView(targetView);
  } catch (error) {
    console.error("Błąd podczas tworzenia pustego obiektu:", error);
  }
};

// onClick={() => handleCreateNew(HOOK_TECHNICIAN_SCHEMA, createEmptyFromSchema, setObj, setFormView)}

  //? poprzednio
  // const handleAddWorkshop = () => {
  //   const empty: props_technician_schema = createEmptyFromSchema(
  //     HOOK_TECHNICIAN_SCHEMA,
  //   );
  //   setObj(empty);
  //   setFormView(7);
  // };