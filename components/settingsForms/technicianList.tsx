"use client";

import { useZodStorage } from "@/hooks/useLocalStorage_test_2";
import { hookTechnicianSchema } from "./schemas";
import {
  primaryButton,
  successButton,
  warningButton,
} from "@/styles/buttonsStyles";
import { SetStateAction, useState, Dispatch } from "react";

interface props {
  setFormView: Dispatch<SetStateAction<number>>;
}

export default function TechniciansList({ setFormView }: props) {
  const [technicians, setTechnicians] = useZodStorage(
    "technicianData",
    hookTechnicianSchema,
  );

  const [deletedId, setDeletedId] = useState<string | null>(null);

  const confirmDelete = () => {
    if (!deletedId) return;

    setTechnicians((p) => p.filter((i) => i.id !== deletedId));
    setDeletedId(null);
  };

  return (
    <div className={`flex flex-col gap-2 w-full h-full p-3 `}>
      test komponentu TechnicianList
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
        onClick={()=> setFormView(7)}
      >
        
        dodaj
      </button>
      {/** modal window edit - delete */}
      {deletedId && (
        <>
          {/* background with blur */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40" />

          {/* modal window without blur*/}
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="bg-ui-surface p-6 rounded-lg shadow-lg w-96 border border-ui-warning pointer-events-auto">
              <h2 className="text-lg font-semibold mb-4">
                Czy na pewno usunąć technika?
              </h2>
              <div className="flex justify-end gap-4">
                <button
                  className={`${primaryButton} px-4 py-1`}
                  onClick={() => setDeletedId(null)}
                >
                  anuluj
                </button>
                <button
                  className={`${warningButton} px-4 py-1`}
                  onClick={confirmDelete}
                >
                  usuń
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
