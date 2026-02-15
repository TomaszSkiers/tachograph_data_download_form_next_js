"use client";
import { primaryButton } from "@/styles/buttonsStyles";
import { serviceStorage } from "@/hooks/storage";
import { useEffect, useState } from "react";
import { useZodStorage } from "@/hooks/useLocalStorage_test_2";
import { hookDataSchema, useServiceData } from "./schemas";

export default function SetTechnicianData() {
  const [serviceData, setServiceData] = useZodStorage(
    "serviceData",
    hookDataSchema,
  );

  const handleData = () => {
    localStorage.setItem("serviceData", "urwyjspane");
    console.log("ognia");
  };

  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1>ustawiasz dane o technikach</h1>
      <div className="h-40"></div>
      <p>
        aktualne dane <br />
      </p>
       <pre>{JSON.stringify(serviceData, null, 2)}</pre>
      <div className="h-40"></div>
      <button className={`${primaryButton} px-5 py-4`} onClick={handleData}>
        zapisz do locala
      </button>
    </div>
  );
}
//todo  działa bo przy śmieciach mam nula i wykasowanie z pamięci uszkodzonej zmiennej
//todo  tylko jak to później w komponencie ogarnąc
//todo  najlepiej
