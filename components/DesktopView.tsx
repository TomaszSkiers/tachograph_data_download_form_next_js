
import { Footer } from "./ui/Footer";
import Header from "./ui/Header";
import { buttonsDesktopViewForms } from "../app/pulpit/variables";
import { ghostButton } from "../styles/buttonsStyles";
import Link from "next/link";
import SettingsWrapper from "./settingsForms/settingsWrapper";
import {memo} from 'react'

const buttonStyle = `${ghostButton} flex-col items-center gap-5 w-full p-2 font-bold border border-ui-border flex-1`;

const Buttons = memo(function Buttons() {
  return(
    <div className="flex-1 mx-auto w-full max-w-5xl mt-6  grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {buttonsDesktopViewForms.map((button, index) => (
          <Link key={index} href={button.href} className={buttonStyle}>
            <div className="flex flex-1 w-full items-center justify-start gap-5">
              <div className="flex-1">{button.icon}</div>
              <span className="flex-10">{button.title}</span>
            </div>
            <p className="flex-1 text-sm text-ui-text-muted">
              {button.description}
            </p>
          </Link>
        ))}
        {/** advertising box */}
        <div className="min-h-30 border border-ui-border rounded-lg col-span-2 flex items-center justify-center">
          miejsce na reklamkę
        </div>
      </div>
  )
})


export default function DesktopView() {
  return (
    <div className="h-svh flex flex-col ">
      <Header
        title="Pulpit Desktop"
        backButtonHref="/"
        backButtonLabel="Powrót do poprzedniej strony"
        className=" bg-ui-surface border-b border-ui-border"
      />

      {/**forms and advertising box*/}
      <Buttons />      

      {/** settings */}
      <SettingsWrapper />

      <Footer />
    </div>
  );
}




