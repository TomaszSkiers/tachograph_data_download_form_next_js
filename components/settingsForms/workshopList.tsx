"use client";

import {
  primaryButton,
  successButton,
  warningButton,
} from "@/styles/buttonsStyles";
import { hookTypes, hookDataSchema } from "./schemas";
import { Dispatch, SetStateAction, useState } from "react";
import { useZodStorage } from "@/hooks/useLocalStorage_test_2";

interface formView {
  setFormView: Dispatch<SetStateAction<number>>;
  setObj: Dispatch<SetStateAction<hookTypes>>;
}

export default function WorkshopList({ setFormView, setObj }: formView) {
  const [serviceData, setServiceData] = useZodStorage(
    "serviceData",
    hookDataSchema,
  );

  const [deleteId, setDeleteId] = useState<string | null>(null);

  const confirmDelete = () => {
    if (!deleteId) return;

    setServiceData((prev) => prev.filter((item) => item.id !== deleteId));
    setDeleteId(null);
  };

  const handleEdit = (obj: hookTypes) => {
    setObj(obj);
    setFormView(6);
  };

  const handleAddWorkshop = () => {
    const empty: hookTypes = {
      city: "",
      street: "",
      serviceName: "",
      id: "",
    };
    setObj(empty);
    setFormView(6);
  };

  return (
    <div
      className="
                    flex 
                    flex-col 
                    gap-2
                    w-full
                    h-full
                    p-3
        "
    >
      {serviceData.map((service) => (
        <div
          key={service.id}
          className="
                        border 
                        border-ui-border
                        p-3
                        rounded-md
                        bg-ui-surface
                        flex
                        
                    "
        >
          <div className="flex flex-col flex-1 overflow-auto">
            <h3 className="text-xl font-bold text-ui-text leading-tight ">
              {service.serviceName}
            </h3>
            <p className="text-lg text-ui-text ">
              {`${service.city} ${service.street}`}
            </p>
          </div>

          <div className="flex gap-6">
            <button
              className={`${primaryButton} px-5 py-3 min-w-30 justify-center items-center`}
              onClick={() => {
                handleEdit(service);
              }}
            >
              edytuj
            </button>
            <button
              className={`${warningButton} px-5 py-3 min-w-30 justify-center items-center`}
              onClick={() => setDeleteId(service.id)}
            >
              usuń
            </button>
          </div>
        </div>
      ))}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-ui-surface p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">
              Czy na pewno chcesz usunąć?
            </h2>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setDeleteId(null)}
                className={`${primaryButton} px-4 py-2`}
              >
                anuluj
              </button>

              <button
                onClick={confirmDelete}
                className={`${warningButton} px-4 py-2`}
              >
                usuń
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex-1"></div>
      <button
        className={`${successButton} max-w-40 px-4 py-2 justify-center font-bold`}
        onClick={handleAddWorkshop}
      >
        dodaj warsztat
      </button>
    </div>
  );
}
