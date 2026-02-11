'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../formComponents/FormInput";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { primaryButton } from "@/styles/buttonsStyles";
import { useLocalStorage } from "@/hooks/useLocalStorage_Test_1";
import { useEffect } from "react";

const addressSchema = z.object({
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
  id: z.string().optional(),
});

type AddressFormValues = z.infer<typeof addressSchema>;
const formData = z.array(addressSchema);

export default function SetWorkshopData() {

  const [serviceData, setServiceData] = useLocalStorage<AddressFormValues[]>(
    "serviceData",
    [],
    formData,
  );

  useEffect(() => {
    console.log('dane serwisu', serviceData)
  },[serviceData])

  const addServiceData = (item: AddressFormValues) => {
    setServiceData((prv) => [...prv, item])
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: { city: "", street: "", serviceName: "" },
  });

  const onSubmit = async (data: AddressFormValues) => {
    // console.log("dane do zapisania", data);
    const dataIdUpdated = {...data, id: crypto.randomUUID()}
    // console.log("dane po dodaniu id", dataIdUpdated)
    addServiceData(dataIdUpdated)    
  };

  return (
    <div className="w-full h-full">
      <h1 className="p-5 text-2xl font-extrabold">
        Ustawienia danych serwisu:
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" p-3">
        <FormInput
          label="Nazwa serwisu"
          maxLength={100}
          error={errors.serviceName}
          {...register("serviceName")}
        />
        <FormInput
          label="Miejscowość"
          maxLength={80}
          error={errors.city}
          {...register("city")}
        />
        <FormInput
          label="Ulica"
          maxLength={80}
          error={errors.street}
          {...register("street")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${primaryButton} px-5 py-3`}
        >
          zapisz
        </button>
      </form>
    </div>
  );
}
