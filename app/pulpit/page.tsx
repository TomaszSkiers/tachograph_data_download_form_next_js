import Link from "next/link";
// import { CircleArrowLeft } from "lucide-react";
import Header from "@/components/ui/Header";
import { ghostButton, outlineButton, primaryButton } from "@/styles/buttonsStyles";

export default function Pulpit() {
  return (
    <div className="border border-ui-border h-svh flex flex-col">
      <Header
        title="Pulpit"
        backButtonHref="/"
        backButtonLabel="Powrót do strony startowej"
      />
      <section className="flex flex-col gap-1 mt-1 border border-ui-border w-full max-w-5xl mx-auto">
        <Link href={`/`} className={`${ghostButton}py-1 w-full p-2 font-bold`}>
          <span>ustawienia</span>
          <span>tutaj ustawisz: nazwę serwisu i adres serserwisu, techników, pojazdy, i inne potrzebne parametry</span>
        </Link>
        <Link href={`/`} className={`${primaryButton}  w-full font-bold `}>
          <span>wniosek i pokwitowanie pobrania danych z tachografu</span>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsum dolorem iste reprehenderit neque hic totam voluptates odi quasi quas!</span>
        </Link>
        <Link href={`/`} className={`${primaryButton} w-full font-bold `}>
          <span>poświadczenie braku możliwości pobrania danych z tachografu cyfrowego</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, eos! Explicabo praesentium, dignissimos ex excepturi id ab molestiae veniam porro tenet</span>
        </Link>
        <Link href={`/`} className={`${primaryButton}  w-full font-bold `}>
          <span>protokół usunięcia danych przez warsztat</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit officia veniam quibusdam, doloremque aliquid eum debitis animi reiciendis blanditiis </span>
        </Link>
        <Link href={`/`} className={`${primaryButton}  w-full font-bold `}>
          <span>procedura pobierania danych z tachografu cyfrowego</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit officia veniam quibusdam, doloremque aliquid eum debitis animi reiciendis blanditiis </span>
        </Link>
      </section>
    </div>
  );
}
