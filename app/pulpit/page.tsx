'use client'
import Link from "next/link";
import Header from "@/components/ui/Header";
import { ghostButton } from "@/styles/buttonsStyles";
import { buttons, } from "./variables";
import { Footer } from "@/components/ui/Footer";



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

      <div className="flex-1 border border-ui-border w-full max-w-5xl mx-auto rounded-2xl mt-5 hidden sm:block">
        
      </div>
      
      <section className=" flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-1  w-full max-w-5xl mx-auto p-3 h-full">
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
      
        <div className="flex-2 border border-ui-border w-full max-w-5xl mx-auto rounded-2xl mb-5 hidden sm:block"></div>
      
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
