'use client'
import Link from "next/link";
import Header from "@/components/ui/Header";
import { ghostButton } from "@/styles/buttonsStyles";
import { buttons, buttonsDesktop } from "./variables";


const buttonStyle = `${ghostButton} flex-col items-center gap-5 w-full p-2 font-bold border border-ui-border flex-1`;

export default function Pulpit() {
  return (
    <div className="h-svh flex flex-col">
      <Header
        title="Pulpit"
        backButtonHref="/"
        backButtonLabel="Powrót do strony startowej"
        className=" bg-ui-surface border-b border-ui-border"
      />
      
      <section className="sm:hidden flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-1  w-full max-w-5xl mx-auto p-3 h-full">
        {buttons.map((button, index) => (
          <Link key={index} href={button.href} className={buttonStyle}>
            <div className="flex flex-1 w-full items-center justify-start gap-5">
              {button.icon}
              <span>{button.title}</span>
            </div>
            <p className="flex-1 text-sm text-ui-text-muted">
              {button.description}
            </p>
          </Link>
        ))}
      </section>
      <section className="hidden sm:grid flex-1  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-1  w-full max-w-5xl mx-auto p-3 h-full">
        {buttonsDesktop.map((button, index) => (
          <Link key={index} href={button.href} className={buttonStyle}>
            <div className="flex flex-1 w-full items-center justify-start gap-5">
              {button.icon}
              <span>{button.title}</span>
            </div>
            <p className="flex-1 text-sm text-ui-text-muted">
              {button.description}
            </p>
          </Link>
        ))}
      </section>

      
      {/* FOOTER */}
      <footer className=" border-t border-ui-border">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-center text-ui-muted">
          <div className="mb-2">
            © {new Date().getFullYear()} e-Formularz – pobranie danych z
            tachografu cyfrowego. Wszystkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </div>
  );
}
