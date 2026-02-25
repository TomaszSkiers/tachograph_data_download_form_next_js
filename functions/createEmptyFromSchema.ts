import { z } from 'zod';

/**
 * Tworzy pusty obiekt na podstawie schematu Zod
 * @param schema - Schemat Zod
 * @returns Pusty obiekt z polami string o wartości ''
 * @throws Error gdy schema jest nieprawidłowa
 */
export const createEmptyFromSchema = <T extends z.ZodObject<Record<string, z.ZodTypeAny>>>(
  schema: T
): z.infer<T> => {
  if (!schema?.shape) {
    throw new Error('Invalid schema provided');
  }
  
  return Object.keys(schema.shape).reduce((acc, key) => ({
    ...acc,
    [key]: ''
  }), {}) as z.infer<T>;
};