import Link from 'next/link';
import { CircleArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface HeaderProps {
  /** Tekst wyświetlany w nagłówku */
  title: string;
  /** Opcjonalny element zamiast domyślnej ikony powrotu */
  backButton?: ReactNode;
  /** Opcjonalny tekst dla aria-label przycisku powrotu */
  backButtonLabel?: string;
  /** Opcjonalny adres URL dla przycisku powrotu (domyślnie "/") */
  backButtonHref?: string;
  /** Opcjonalne dodatkowe klasy dla kontenera */
  className?: string;
  /** Opcjonalne dodatkowe klasy dla wewnętrznego diva */
  innerClassName?: string;
}

export default function Header({
  title,
  backButton,
  backButtonLabel = 'Powrót do strony głównej',
  backButtonHref = '/',
  className = '',
  innerClassName = '',
}: HeaderProps) {
  return (
    <header className={`sticky top-0 z-10 bg-ui-bg ${className}`}>
      <div className={` mx-auto w-full max-w-5xl px-4  sm:px-6 lg:px-8 ${innerClassName}`}>
        <div className="h-16 flex items-center justify-between">
          <h1 className="text-xl font-black tracking-wide text-ui-text">
            {title}
          </h1>
          
          <Link
            href={backButtonHref}
            aria-label={backButtonLabel}
            className="p-2 hover:bg-ui-ghost-hover rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            {backButton || <CircleArrowLeft size={36} className="text-ui-text" />}
          </Link>
        </div>
      </div>
    </header>
  );
}