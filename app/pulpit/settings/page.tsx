import { Footer } from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function Settings() {
  return (
    <div className="h-svh flex flex-col">
      <Header
        title="Pulpit"
        backButtonHref="/pulpit"
        backButtonLabel="Powrót do strony startowej"
        className=" bg-ui-surface border-b border-ui-border"
      />
      <div className="flex-1 border border-ui-border w-full max-w-5xl mx-auto rounded-2xl mt-5 hidden sm:block">
        reklama
      </div>
      <section>main</section>

      <div className="flex-2 border border-ui-border w-full max-w-5xl mx-auto rounded-2xl mb-5 hidden sm:block"></div>
      <Footer />
    </div>
  );
}
