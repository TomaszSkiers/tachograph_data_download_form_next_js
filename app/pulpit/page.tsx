import MobileVeiw from "@/components/MobileVeiw";
import DesktopView from "@/components/DesktopView";

export default function Pulpit() {
  return (
    <div className="h-svh flex flex-col">
      {/** widok mobilny */}
      <div className="sm:hidden">
        <MobileVeiw />
      </div>

      {/** widok desktop */}
      <div className="hidden sm:block">
        <DesktopView />
      </div>
    </div>
  );
}
