import { ThemeToggle } from "./components/theme-toggle";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Home() {
  return (
    <div>
      <nav className="p-4">
        <ThemeToggle />
      </nav>

      <main className="p-8 border border-ui-border m-4">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Witaj!
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          To jest przykładowy tekst. Kliknij przycisk żeby zmienić motyw.
        </p>
        <label className="text-ui-text font-bold">Imię:</label>
        <input className="bg-ui-bg border border-ui-border focus:border-brand-primary" />
        <button className="bg-brand-primary text-white p-2">Wyślij</button>

        <form className="max-w-md mx-auto p-6 space-y-6">
          <h1 className="text-2xl font-bold">Pobieranie danych</h1>

          <div>
            <Label htmlFor="dataset-name">Nazwa zbioru</Label>
            <Input id="dataset-name" placeholder="Np. Dane sprzedażowe..." />
          </div>

          <div>
            <Label htmlFor="date">Data początkowa</Label>
            <Input id="date" type="date" />
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Uruchom proces
          </Button>
        </form>
      </main>
    </div>
  );
}
