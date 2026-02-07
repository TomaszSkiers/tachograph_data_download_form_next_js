import { ghostButton } from "@/styles/buttonsStyles";
import { settingsPageButtons } from '../variables'
import PageButtonWrapper from "@/components/ui/PageButtonWrapper";
const buttonStyle = `${ghostButton} flex-col items-center gap-5 w-full p-2 font-bold border border-ui-border flex-1`;
import Link from "next/link";


export default function Settings() {
  return (
    <PageButtonWrapper pageName="Pulpit - ustawienia"> 
      {settingsPageButtons.map((button, index) => (
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
    </PageButtonWrapper>
  );
}
