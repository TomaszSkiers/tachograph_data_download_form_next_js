"use client"

// komponenty działaja, jest prawie doskonały ale na razie go nie używaj bo jeszcze do końca nie rozumiem wszystkich mechanizmów

import * as React from "react"
import { 
  FieldValues, 
  UseFormRegister, 
  Path, 
  useFormContext, 
  useFormState,
  FormProvider
} from "react-hook-form"

// Definiujemy unię typów dla elementów formularza
type SupportedElement = HTMLInputElement | HTMLTextAreaElement | null;

export const Form = FormProvider;

interface OptimizedFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  // Używamy funkcyjnego setter'a (Callback Ref), aby oszukać React Compiler
  setInputRef: (el: SupportedElement) => void;
  // Ref tylko do odczytu dla licznika
  counterRef: React.RefObject<SupportedElement>;
  name: Path<T>;
  label: string;
  maxLength: number;
  placeholder?: string;
  component?: "input" | "textarea";
}

/**
 * NativeCounter - Operuje bezpośrednio na DOM.
 * React nigdy nie renderuje tego komponentu ponownie po zamontowaniu.
 */
export const NativeCounter = ({ 
  inputRef, 
  maxLength 
}: { 
  inputRef: React.RefObject<SupportedElement>; 
  maxLength: number 
}) => {
  const displayRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    const update = () => {
      if (displayRef.current) {
        const len = el.value.length;
        displayRef.current.innerText = `${len}/${maxLength}`;
        displayRef.current.style.color = len > maxLength ? "#ef4444" : "#94a3b8";
      }
    };

    el.addEventListener("input", update);
    update();
    return () => el.removeEventListener("input", update);
  }, [inputRef, maxLength]);

  return <span ref={displayRef} className="text-[10px] font-mono text-slate-400">0/{maxLength}</span>;
};

/**
 * FormMessage - Subskrybuje tylko błędy dla konkretnego pola.
 */
export const FormMessage = ({ name }: { name: string }) => {
  const { control } = useFormContext();
  const { errors } = useFormState({ control, name });
  const error = errors[name];

  if (!error) return null;

  return (
    <p className="text-sm font-medium text-red-500 mt-1">
      {String(error.message)}
    </p>
  );
};

/**
 * OptimizedFieldComponent - Serce systemu.
 * Wykorzystuje Generic T, aby zachować Type Safety bez "any".
 */
function OptimizedFieldComponent<T extends FieldValues>({ 
  register, 
  setInputRef, 
  counterRef,
  name, 
  label, 
  maxLength, 
  placeholder,
  component: Component = "input"
}: OptimizedFieldProps<T>) {
  
  const { ref: registerRef, ...rest } = register(name);

  return (
    <div className="space-y-2 p-4 border rounded-xl bg-black shadow-sm border-slate-100">
      <div className="flex justify-between items-center mb-1">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
          {label}
        </label>
        <NativeCounter inputRef={counterRef} maxLength={maxLength} />
      </div>
      
      <Component
        {...rest}
        ref={(e: SupportedElement) => {
          registerRef(e); // Rejestracja w React Hook Form
          setInputRef(e); // Przekazanie refa do rodzica (Callback Ref)
        }}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-sm font-medium placeholder:text-slate-300 focus:ring-0 resize-none"
      />
      <FormMessage name={name} />
    </div>
  );
}

// React.memo z wymuszonym "true" blokuje wszystkie re-rendery od góry.
export const OptimizedField = React.memo(
  OptimizedFieldComponent, 
  () => true
) as typeof OptimizedFieldComponent;

(OptimizedField as React.FC).displayName = "OptimizedField";

// --------------------------------------------------------

// "use client"

// import React, { useRef } from "react"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import { Form, OptimizedField } from "./SimpleForm"

// // Schemat walidacji
// const formSchema = z.object({
//   headline: z.string().min(5, "Nagłówek musi mieć min. 5 znaków").max(40, "Za długi nagłówek"),
//   bio: z.string().min(10, "Bio musi mieć min. 10 znaków").max(160, "Bio jest za długie"),
// })

// type FormValues = z.infer<typeof formSchema>

// export default function UserProfileForm() {
//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: { headline: "", bio: "" },
//     mode: "onChange"
//   })

//   // 1. Obiekty Ref dla NativeCounter
//   const headlineRef = useRef<HTMLInputElement>(null);
//   const bioRef = useRef<HTMLTextAreaElement>(null);

//   // 2. Bezpieczne Callback Refs (zamiast any używamy MutableRefObject)
//   const setHeadlineRef = (el: HTMLInputElement | HTMLTextAreaElement | null) => {
//     (headlineRef as React.MutableRefObject<HTMLInputElement | null>).current = el as HTMLInputElement;
//   };

//   const setBioRef = (el: HTMLInputElement | HTMLTextAreaElement | null) => {
//     (bioRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = el as HTMLTextAreaElement;
//   };

//   const onSubmit = (values: FormValues) => {
//     console.log("Dane wysłane:", values);
//   };

//   return (
//     <div className="max-w-md mx-auto p-8 bg-slate-50/50 ">
//       <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">Profil Programisty</h1>
      
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          
//           <OptimizedField<FormValues>
//             register={form.register}
//             setInputRef={setHeadlineRef}
//             counterRef={headlineRef}
//             name="headline"
//             label="Nagłówek"
//             maxLength={40}
//             placeholder="Np. Senior Next.js Developer"
//           />

//           <OptimizedField<FormValues>
//             register={form.register}
//             setInputRef={setBioRef}
//             counterRef={bioRef}
//             name="bio"
//             label="Bio"
//             maxLength={160}
//             component="textarea"
//             placeholder="Opowiedz o swoich projektach..."
//           />

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition-transform active:scale-95 shadow-md shadow-indigo-200"
//           >
//             Zapisz zmiany
//           </button>
//         </form>
//       </Form>
//     </div>
//   )
// }