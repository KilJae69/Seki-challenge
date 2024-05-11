"use client"
import useLeftSidebarStore from "@/hooks/store/useLeftSidebarStore";
import useRightSidebarStore from "@/hooks/store/useRightSidebarStore";
import Image from "next/image";

export default function AccountToggle() {
  const {isRightSidebarOpen,toggleRightSidebar} = useRightSidebarStore();
  const {isLeftSidebarOpen} = useLeftSidebarStore();
  return (
    <button onClick={toggleRightSidebar} className="flex cursor-pointer group flex-col items-center justify-center gap-2 lg:flex-row lg:gap-5">
    <Image
      src="/assets/icons/ico_person.svg"
      width={25}
      height={25}
      alt="Account icon"
    />
    <label className={`lg:font-bold lg:block ${isLeftSidebarOpen || isRightSidebarOpen && "hidden"}`}>Account</label>
  </button>
  );
  
}