"use client";
import { primaryButton } from "@/styles/buttonsStyles";
import { useZodStorage } from "@/hooks/useLocalStorage_test_2";
import {
  hookTechnicianSchema,
  RHF_TECHNICIAN_SCHEMA,
  rhf_technician_schema,
  props_technician_schema,
} from "./schemas";
import FormInput from "../formComponents/FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { handleSaveData } from "@/functions/handleAddEditData";

interface props {
  obj: props_technician_schema;
  formView: Dispatch<SetStateAction<number>>;
}

export default function SetTechnicianData({ formView, obj }: props) {
  const [, setTechnicianData] = useZodStorage(
    "technicianData",
    hookTechnicianSchema,
  );

  console.log("add technician", obj);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<rhf_technician_schema>({
    resolver: zodResolver(RHF_TECHNICIAN_SCHEMA),
    defaultValues: {
      fullName: obj.fullName,
      technicianCardNumber: obj.technicianCardNumber,
    },
  });


  const onSubmit = (data: rhf_technician_schema) => {
    handleSaveData(data, obj.id, setTechnicianData, formView, 2 );
  };

  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="p-5 text-2xl font-extrabold">Dane techników:</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-3 flex-1 flex flex-col"
      >
        <FormInput
          label="Imię i nazwisko"
          maxLength={80}
          placeholder="Jan Przykładowy"
          error={errors.fullName}
          {...register("fullName")}
        />
        <FormInput
          label="Nr karty warsztatowej"
          maxLength={16}
          placeholder="PL00000000000013"
          error={errors.technicianCardNumber}
          {...register("technicianCardNumber")}
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
