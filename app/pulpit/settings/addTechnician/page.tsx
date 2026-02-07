import PageButtonWrapper from "@/components/ui/PageButtonWrapper";
import { successButton, warningButton } from "@/styles/buttonsStyles";

interface technicians {
  name: string;
  nr: string;
}

const technicians: technicians[] = [
  { name: "Tomasz Skierś", nr: "PL0011" },
  { name: "Aleksandra Skierś", nr: "pl0023" },
  { name: "Nina Skierś", nr: "pl4490" },

];

export default function AddTechnician() {
  return (
    <PageButtonWrapper
      pageName="Pulpit - ustawienia - technicy"
      backHref="/pulpit/settings"
    >
    
        {technicians.map((technicians, index) => (
          <div key={index} className="border border-ui-border rounded-xl flex flex-col ">
            <div className="p-3 bg-ui-surface rounded-xl font-extrabold tracking-wide flex-1">
              <p>{technicians.name}</p>
              <p>{technicians.nr}</p>
            </div>
            <div className="flex justify-between gap-3 flex-1 p-3">
              <button className={`${successButton} ml-3 px-4 py-2 font-bold flex-1 flex items-center justify-center`}>
                edytuj
              </button>
              <button className={`${warningButton} mr-3 px-4 py-2 font-bold flex-1 flex items-center justify-center`}>
                usuń
              </button>
            </div>
          </div>
        ))}
      
    </PageButtonWrapper>
  );
}
