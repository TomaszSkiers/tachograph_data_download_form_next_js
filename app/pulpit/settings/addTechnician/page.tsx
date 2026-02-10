'use client'

import PageButtonWrapper from "@/components/ui/PageButtonWrapper";
import { useLocalStorage } from "@/hooks/useLocalStorage_Test_1";
import { successButton, warningButton } from "@/styles/buttonsStyles";
import { useEffect } from "react";
import {z} from 'zod'

const itemSchema = z.object({
  id: z.string(),
  name: z.string(),
  nr: z.string(),
})

const techniciansSchema = z.array(itemSchema)


interface technicians_test {
  name: string;
  nr: string;
}

type technician = z.infer<typeof itemSchema>

const technicians_test: technicians_test[] = [
  { name: "Tomasz Skierś", nr: "PL0011" },
  { name: "Aleksandra Skierś", nr: "pl0023" },
  { name: "Nina Skierś", nr: "pl4490" },

];

export default function AddTechnician() {

const [technicians, setTechnicians] = useLocalStorage<technician[]>(
  'technicians', [], techniciansSchema
)

useEffect(() => {

  console.log('technicians', technicians)

},[technicians])

const addTechnician = (item: technician) => {
  setTechnicians((prev) => [...prev, item])
}

  return (
    <PageButtonWrapper
      pageName="Pulpit - ustawienia - technicy"
      backHref="/pulpit/settings"
    >
    
        {technicians_test.map((technicians, index) => (
          <div key={index} className="border border-ui-border rounded-xl flex flex-col ">
            <div className="p-3 bg-ui-surface rounded-xl font-extrabold tracking-wide flex-1">
              <p>{technicians.name}</p>
              <p>{technicians.nr}</p>
            </div>
            <div className="flex justify-between gap-3 flex-1 p-3">
              <button className={`${successButton} ml-3 px-4 py-2 font-bold flex-1 flex items-center justify-center`}>
                edytuj
              </button>
              <button 
                className={`${warningButton} mr-3 px-4 py-2 font-bold flex-1 flex items-center justify-center`}
                onClick={() => addTechnician({ id: crypto.randomUUID(), name: "Tomasz Skierś", nr: "PL0011" })}
              >
                zapisz
              </button>
            </div>
          </div>
        ))}
      
    </PageButtonWrapper>
  );
}
