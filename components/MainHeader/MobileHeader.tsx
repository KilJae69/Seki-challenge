"use client";

import Logo from "../shared/Logo";
import ToolsToggle from "../shared/ToolsToggle";
import NotificationsToggle from "../shared/NotificationsToggle";
import AccountToggle from "../shared/AccountToggle";
import useLeftSidebarStore from "@/hooks/store/useLeftSidebarStore";
import useRightSidebarStore from "@/hooks/store/useRightSidebarStore";

export default function MobileHeader() {
  const { isLeftSidebarOpen } = useLeftSidebarStore();
  const { isRightSidebarOpen } = useRightSidebarStore();

  return (
    <div
      className={`fixed w-full transition-all duration-500 ${
        isLeftSidebarOpen || isRightSidebarOpen ? "top-[-70px]" : "top-0"
      }`}
    >
      <div className="bg-white w-full mx-auto flex items-center justify-center min-h-[70px]">
        <Logo />
      </div>

      <div
        className={`flex w-full justify-between px-[30px] py-[15px]  ${
          isLeftSidebarOpen || isRightSidebarOpen ? "bg-white min-h-[70px]" : "bg-transparent"
        }`}
      >
        <ToolsToggle />

        <NotificationsToggle />

        <AccountToggle />
      </div>
    </div>
  );
}
