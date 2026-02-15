"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../formComponents/FormInput";
import { useForm } from "react-hook-form";

import { primaryButton } from "@/styles/buttonsStyles";

import { Dispatch, SetStateAction, useEffect } from "react";

import { formTypes, addressSchema, hookDataSchema, hookTypes } from "./schemas";
import { useZodStorage } from "@/hooks/useLocalStorage_test_2";

interface objProps {
  obj: hookTypes;
  formView: Dispatch<SetStateAction<number>>;
}

export default function SetWorkshopData({ obj, formView }: objProps) {
  const [, setServiceData] = useZodStorage("serviceData", hookDataSchema);

  // useEffect(() => {
  //   console.log("dane serwisu", serviceData);
  // }, [serviceData]);

  const handleAddServiceData = (item: formTypes, id: string) => {
    if (id === "") {
      const itemUpdated = { ...item, id: crypto.randomUUID() };
      console.log(itemUpdated);
      setServiceData((prv) => [...prv, itemUpdated]);
    } else {
      const itemUpdated = { ...item, id: id };
      setServiceData((prv) =>
        prv.map((item) => (item.id === id ? itemUpdated : item)),
      );
    }
    formView(1);
  };

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

  const onSubmit = async (data: formTypes) => {
    handleAddServiceData(data, obj.id);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="p-5 text-2xl font-extrabold">
        Ustawienia danych serwisu:
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 p-3 flex flex-col" >
        <FormInput
          label="Nazwa serwisu"
          maxLength={100}
          error={errors.serviceName}
          {...register("serviceName")}
        />
        <FormInput
          label="Kod i miejscowość"
          maxLength={80}
          error={errors.city}
          {...register("city")}
        />
        <FormInput
          label="Ulica nr domu"
          maxLength={80}
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
