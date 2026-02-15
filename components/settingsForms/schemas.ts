import z from "zod";
// =====================================================
// schema for setWorkshopData.tsx component for Form
// =====================================================
export const addressSchema = z.object({
  city: z
    .string()
    .min(2, "nazwa miasta musi mieć min 2 znaki")
    .max(80, "max 80 znaków"),
  street: z
    .string()
    .min(2, "nazwa ulicy musi mieć nim 2 znaki")
    .max(80, "maz 80 znaków"),
  serviceName: z
    .string()
    .min(1, "nazwa serwisu musi mieć min  1 znak")
    .max(100, "max 100 znaków"),
});

export type formTypes = z.infer<typeof addressSchema>;

// =====================================================
//  schema for hook useLocalStroage -> 'serviceData'
// =====================================================

export const useServiceData = z.object({
  city: z
    .string()
    .min(2, "nazwa miasta musi mieć min 2 znaki")
    .max(80, "max 80 znaków"),
  street: z
    .string()
    .min(2, "nazwa ulicy musi mieć nim 2 znaki")
    .max(80, "maz 80 znaków"),
  serviceName: z
    .string()
    .min(1, "nazwa serwisu musi mieć min  1 znak")
    .max(100, "max 100 znaków"),
  id: z.string(),
});

// types for hook
export type hookTypes = z.infer<typeof useServiceData>;

// types for hook to check data from local storage
export const hookDataSchema = z.array(useServiceData);

// =====================================================
//  schema for setTechnician.tsx
// =====================================================

export const RHF_TECHNICIAN_SCHEMA = z.object({
  fullName: z
    .string()
    .min(2, "Imię i nazwisko musi mieć minimum 2 znaki")
    .max(80, "max 80 znaków"),
  technicianCardNumber: z
    .string()
    .min(16,'nr karty musi mieć min 16 znaków')
    .max(16,'nr karty może mieć max 16 znaków')
});

export type rhf_technician_schema = z.infer<typeof RHF_TECHNICIAN_SCHEMA>
