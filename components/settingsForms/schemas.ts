import z from "zod";
// =====================================================
// scheme for setWorkshopData.tsx component for Form 
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
})

export type formTypes = z.infer<typeof addressSchema>





// =====================================================
//  scheme for hook useLocalStroage -> 'serviceData'
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
  id: z.string()
});

// types for hook
export type hookTypes = z.infer<typeof useServiceData>;

// types for hook to check data from local storage
export const hookDataSchema = z.array(useServiceData)
