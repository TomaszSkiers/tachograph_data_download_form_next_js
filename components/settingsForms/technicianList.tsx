"use client";

import { useZodStorage } from "@/hooks/useLocalStorage_test_2";
import {
  HOOK_TECHNICIAN_SCHEMA,
  hookTechnicianSchema,
  props_technician_schema,
} from "./schemas";
import {
  primaryButton,
  successButton,
  warningButton,
} from "@/styles/buttonsStyles";
import { SetStateAction, useState, Dispatch } from "react";
import { createEmptyFromSchema } from "@/functions/createEmptyFromSchema";
// import { handleDeleteData } from "@/functions/confirmDelete";
import { handleEditData } from "@/functions/handleEdit";
import { handleCreateNew } from "@/functions/handleAddEmpty";
import SettingsModalWindow from "./settingsModalWindow";

interface props {
  setObj: Dispatch<SetStateAction<props_technician_schema>>;
  setFormView: Dispatch<SetStateAction<number>>;
}

const SET_TECHNICIAN_DATA_FORM = 7;

export default function TechniciansList({ setFormView, setObj }: props) {
  const [technicians] = useZodStorage(
    "technicianData",
    hookTechnicianSchema,
  );

  const [deletedId, setDeletedId] = useState<string | null>(null); //open/close modal window
  const technicianNameForDelete = technicians.find((item) => item.id === deletedId)?.fullName

  return (
    <div className={`flex flex-col gap-2 w-full h-full p-3 `}>
      {technicians.map((technician) => (
        <div
          key={technician.id}
          className="border border-ui-border p-3 rounded-md bg-ui-surface flex"
        >
          <div className="flex flex-col flex-1 overflow-auto">
            <h3 className="text-xl font-bold text-ui-text leading-tight">
              {technician.fullName}
            </h3>
            <p className="text-lg text-ui-text">
              {technician.technicianCardNumber}{" "}
            </p>
          </div>

          <div className="flex gap-6">
            <button
              className={`${primaryButton} px-5 py-3 min-w-30 justify-center items-center`}
              onClick={() => {
                handleEditData(
                  technician,
                  setObj,
                  setFormView,
                  SET_TECHNICIAN_DATA_FORM,
                );
              }}
            >
              edytuj
            </button>
            <button
              className={`${warningButton} px-5 py-3 min-w-30 justify-center items-center`}
              onClick={() => setDeletedId(technician.id)}
            >
              usuń
            </button>
          </div>
        </div>
      ))}
      <div className="flex-1"></div>
      {/** button add technician */}
      <button
        className={`${successButton} max-w-40 px-10 py-3 justify-center font-bold`}
        onClick={() =>
          handleCreateNew(
            HOOK_TECHNICIAN_SCHEMA,
            createEmptyFromSchema,
            setObj,
            setFormView,
            SET_TECHNICIAN_DATA_FORM,
          )
        }
      >
        dodaj
      </button>
      {/** modal window edit - delete */}
      {deletedId && (
        <SettingsModalWindow
          setDeletedId={setDeletedId}
          header="Czy na pewno usunąć technika"
          info={technicianNameForDelete}
          deletedId={deletedId}
          dataName="technicianData"
          schema={hookTechnicianSchema}
        />
      )}
    </div>
  );
}
