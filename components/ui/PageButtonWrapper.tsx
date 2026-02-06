import { Footer } from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

interface ButtonWrapper {
  children: React.ReactNode;
}

export default function PageButtonWrapper({ children }: ButtonWrapper) {
  return (
    <div className="h-svh flex flex-col">
      <Header
        title="Pulpit"
        backButtonHref="/pulpit"
        backButtonLabel="Powrót do strony startowej"
        className=" bg-ui-surface border-b border-ui-border"
      />
      <div className="flex-1 justify-center items-center  border border-ui-border w-full max-w-5xl mx-auto rounded-2xl mt-5 hidden sm:flex">
        reklama
      </div>

      <section className=" flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-1  w-full max-w-5xl mx-auto p-3 h-full">
        {children}
      </section>

      <div className="flex-2 justify-center items-center border border-ui-border w-full max-w-5xl mx-auto rounded-2xl mb-5 hidden sm:flex">
        reklama
      </div>

      <Footer />
    </div>
  );
}
