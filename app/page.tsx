'use client'
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { primaryButton } from "@/styles/buttonsStyles";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="border border-ui-border h-screen flex flex-col">
      <div className="flex gap-2 border-b border-ui-border">
        <div className="flex items-center m-1">
          <ThemeToggle />
        </div>
        
        <span className="flex items-center font-black tracking-wide">Strona startowa</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center"> 
        <h1 className="text-3xl font-black tracking-wide">e-formularz</h1>
        <h2 className="text-xl font-bold tracking-wide text-center">pobranie danych z tachografu cyfrowego</h2>
      </div>
      <div className="flex-1 flex items-center justify-center" >
        <button 
          className={`${primaryButton} h-20 px-20 text-2xl font-bold tracking-wide`}
          onClick={()=>{router.push("/pulpit")}}
        >start</button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        informacje dodatkowe</div>
    </div>
  );
}
