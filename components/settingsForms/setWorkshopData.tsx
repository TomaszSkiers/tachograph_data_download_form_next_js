"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../formComponents/FormInput";
import { useForm } from "react-hook-form";

import { primaryButton } from "@/styles/buttonsStyles";
import { useLocalStorage } from "@/hooks/useLocalStorage_Test_1";
import { Dispatch, SetStateAction} from "react";

import { formTypes, addressSchema, hookDataSchema, hookTypes } from "./schemas";



interface objProps {
  obj: hookTypes;
  formView: Dispatch<SetStateAction<number>>
}

export default function SetWorkshopData({ obj, formView }: objProps) {
  

  const [, setServiceData] = useLocalStorage<hookTypes[]>(
    "serviceData",
    [],
    hookDataSchema,
  );

  // useEffect(() => {
  //   console.log("dane serwisu", serviceData);
  // }, [serviceData]);

  const handleAddServiceData = (item: formTypes, id: string) => {
    if (id === '') {
      const itemUpdated = {...item, id: crypto.randomUUID()}
      setServiceData((prv) => [...prv, itemUpdated]);
    }else {
        //tu zapis pod konkretny id
        //todo tylko problem z typowaniem 
        const itemUpdated = { ...item, id: id}
        setServiceData((prv) => 
          prv.map((item) => item.id === id ? itemUpdated : item))
    }
    formView(1)
    
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formTypes>({
    resolver: zodResolver(addressSchema),
    defaultValues: { city: obj.city, street: obj.street  , serviceName: obj.serviceName },
  });

  const onSubmit = async (data: formTypes) => {
    handleAddServiceData(data, obj.id)
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
