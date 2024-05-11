"use client"
import useLeftSidebarStore from "@/hooks/store/useLeftSidebarStore";
import useRightSidebarStore from "@/hooks/store/useRightSidebarStore";
import Image from "next/image";

export default function NotificationsToggle() {
  const {isRightSidebarOpen} = useRightSidebarStore();
  const {isLeftSidebarOpen} = useLeftSidebarStore();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/assets/icons/ico_bell.svg"
            width={25}
            height={25}
            alt="notification icon"
          />
          <p className={`lg:font-bold lg:hidden ${isLeftSidebarOpen || isRightSidebarOpen && "hidden"}`}>Notifications</p>
        </div>
  );
  
}