"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../formComponents/FormInput";
import { useForm } from "react-hook-form";
import { primaryButton } from "@/styles/buttonsStyles";
import { Dispatch, SetStateAction } from "react";
import { formTypes, addressSchema, hookDataSchema, hookTypes } from "./schemas";
import { useZodStorage } from "@/hooks/useLocalStorage_test_2";
import { handleSaveData } from "@/functions/handleAddEditData";

interface objProps {
  obj: hookTypes;
  formView: Dispatch<SetStateAction<number>>;
}

export default function SetWorkshopData({ obj, formView }: objProps) {
  const [, setServiceData] = useZodStorage("serviceData", hookDataSchema);

  // useEffect(() => {
  //   console.log("dane serwisu", serviceData);
  // }, [serviceData]);


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formTypes>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      city: obj.city,
      street: obj.street,
      serviceName: obj.serviceName,
    },
  });

  const onSubmit = (data: formTypes) => {
    handleSaveData(data, obj.id, setServiceData, formView, 1);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="p-5 text-2xl font-extrabold">
        Ustawienia danych serwisu:
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 p-3 flex flex-col"
      >
        <FormInput
          label="Nazwa serwisu"
          maxLength={100}
          placeholder="TACHO - SERWIS Jan Przykładowy"
          error={errors.serviceName}
          {...register("serviceName")}
        />
        <FormInput
          label="Kod i miejscowość"
          maxLength={80}
          placeholder="07-249 Maków"
          error={errors.city}
          {...register("city")}
        />
        <FormInput
          label="Ulica nr domu"
          maxLength={80}
          placeholder="Tachograficzna 1 lok. 9"
          error={errors.street}
          {...register("street")}
        />
        <div className="flex-1"></div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${primaryButton} px-10 py-3 max-w-40 justify-center font-bold`}
        >
          zapisz
        </button>
      </form>
    </div>
  );
}
