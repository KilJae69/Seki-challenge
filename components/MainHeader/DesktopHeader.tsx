import Image from "next/image";
import Logo from "../shared/Logo";
import ToolsToggle from "../shared/ToolsToggle";
import NotificationsToggle from "../shared/NotificationsToggle";
import AccountToggle from "../shared/AccountToggle";

export default function DesktopHeader() {
  return (
    <>
      <div className="flex justify-between items-center min-h-[85px] px-[30px]">
        <ToolsToggle />
        <Logo />
        <div className="flex gap-12">
          <NotificationsToggle />
          <AccountToggle />
        </div>
      </div>
    </>
  );
}
