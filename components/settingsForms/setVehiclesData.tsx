"use client";

import { primaryButton } from "@/styles/buttonsStyles";
import FormInputTest from "@/testy_formularza/FormInputTest";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import z from "zod";

const schema = z.object({
  subject: z
    .string()
    .min(2, "musi być minimum 2 zanki")
    .max(30, "maksymalnie 30 znakow"),
});

type schemaValues = z.infer<typeof schema>;

export default function SetVehiclesData() {
  const formMethods = useForm<schemaValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      subject: "",
    },
  });

  return (
    <div className="border w-full h-full flex flex-col items-center justify-center">
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit((data) =>
            console.log("dane z formularza:", data),
          )}
          className="border border-ui-border p-5 rounded-md flex flex-col gap-8"
        >
          <h1>tu będziemy testować sobie useRef aaa</h1>
          <Input name="subject" maxLength={30}/>
          <button className={`${primaryButton} px-8 py-5`}>submit</button>
        </form>
      </FormProvider>
    </div>
  );
}

// --- Input  ------------------------------------------------------
interface InputProps {
  name: string;
  maxLength?: number;
}

function Input({ name, maxLength = 0 }: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
 
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { ref: registerRef, ...rest } = register(name);

  const error = errors[name];

  return (
    <div className="flex flex-col gap-3">
      <CharacterCounter inputRef={inputRef} maxLength={maxLength}/>
      <input
        {...rest}
        ref={(e) => {
          registerRef(e);
          inputRef.current = e;
        }}
        type="text"
        maxLength={maxLength}
        className="border border-ui-border rounded-md p-4"
      />
      {error && (
        <span className="text-xs text-red-700">
          {error.message?.toString()}
        </span>
      )}
    </div>
  );
}

// ---- character counter

interface counterProps {
    inputRef: React.RefObject<HTMLInputElement | null>;
    maxLength: number;
}

function CharacterCounter({
  inputRef, maxLength = 0
}: counterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    const handleInput = () => {
      console.log("ilość znaków z inputa", el.value.length);
      setCount(el.value.length)
    };

    el.addEventListener("input", handleInput);

    return () => el.removeEventListener("input", handleInput);
  }, [inputRef]);

  return (<span>{count} / {maxLength}</span>);
}

//   const formMethods = useForm<LoginValues>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (data: LoginValues) => {
//     console.log("zwalidowane dane:", data);
//   };

//   return (
//     <div className=" w-full h-full flex flex-col justify-center items-center">
//       <FormProvider {...formMethods}>
//         <form
//           onSubmit={formMethods.handleSubmit(onSubmit)}
//           className="border p-5 rounded-2xl min-w-70 flex flex-col gap-4"
//         >
//           <h1>Logowanie</h1>
//           <FormInputTest
//             name='email'
//             label='adres e-mail'
//             placeholder="jan@kowalski.pl"
//             maxLength={30}
//           />
//           <FormInputTest
//               name="password"
//               label="Hasło"
//               type="password"
//               placeholder="••••••••"

//             />
//           <button type="submit" className={`${primaryButton} py-3 px-5`}>
//             zaloguj się
//           </button>
//         </form>
//       </FormProvider>
//     </div>
//   );
// }
