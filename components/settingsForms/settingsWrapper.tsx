"use client";
import { settingsPageButtons } from "@/app/pulpit/variables";
import { ghostButton } from "@/styles/buttonsStyles";
import { useState } from "react";
import DefaultSettingsScreen from "./defaultSettingsScreen";
import SetTechnicianData from "./setTechnicianData";
import SetVehiclesData from "./setVehiclesData";
import SetReasonDownloadData from "./setReasonDownloadData";
import SetWorkshopData from "./setWorkshopData";
import WorkshopList from "./workshopList";
import { hookTypes } from "./schemas";


export default function SettingsWrapper() {
  const [formView, setFormView] = useState(0);
  const [obj, setObj] = useState<hookTypes>({
    city: '',
    street:'',
    serviceName: '',
    id: ''
  })
  
  // console.log('objekt ze scraperka',obj)


  return (
    <div className="flex-2  mx-auto w-full max-w-5xl mt-6 mb-6 rounded-2xl flex  gap-3 ">
      <div className=" flex-1 flex flex-col gap-3">
        {settingsPageButtons.map((button, index) => (
          <button
            key={index}
            type="button" 
            className={`${ghostButton} flex-col items-center gap-5 h-30 p-2 font-bold border        border-ui-border flex-1 min-h-35 ${formView === index + 1 ? "bg-ui-surface" : ""}`}
            onClick={() => setFormView(index + 1)}
          >
            <div className="flex flex-1 w-full items-center justify-start gap-5 text-left">
              {button.icon}
              <span>{button.title}</span>
            </div>
            <p className="flex-1 text-sm text-ui-text-muted text-left">
              {button.description}
            </p>
          </button>
        ))}
      </div>

      <div
        className="
                    border 
                    border-ui-border 
                    flex-3 
                    rounded-lg 
                    flex 
                    items-center 
                    justify-center
                    max-h-180
                    overflow-auto
                    "
      >
        {formView === 0 && <DefaultSettingsScreen />}
        {formView === 1 && <WorkshopList setFormView={setFormView} setObj={setObj}/>}
        {formView === 2 && <SetTechnicianData />}
        {formView === 3 && <SetVehiclesData />}
        {formView === 4 && <SetReasonDownloadData />}
        {formView === 6 && <SetWorkshopData obj={obj} formView={setFormView}/>}
      </div>
    </div>
  );
}


