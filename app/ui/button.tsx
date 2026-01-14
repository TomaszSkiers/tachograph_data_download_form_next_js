import { ButtonHTMLAttributes, ReactNode } from "react";

// Definiujemy dostępne typy przycisków
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant; // Nowa opcjonalna właściwość
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  
  // Mapa stylów dla każdego wariantu
  const variants = {
    primary: "bg-brand-primary text-white hover:opacity-90 shadow-sm",
    secondary: "bg-ui-secondary text-ui-text border border-ui-border hover:bg-ui-border/50",
    danger: "bg-ui-danger text-white hover:opacity-90",
    ghost: "bg-transparent text-ui-text hover:bg-ui-secondary border-transparent"
  };

  return (
    <button
      {...props}
      className={`
        px-6 py-2.5 rounded-xl font-medium transition-all duration-200
        active:scale-95 disabled:opacity-50 cursor-pointer
        ${variants[variant]} 
        ${className}
      `}
    >
      {children}
    </button>
  );
}