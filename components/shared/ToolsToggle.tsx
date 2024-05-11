"use client"

import useLeftSidebarStore from "@/hooks/store/useLeftSidebarStore";
import useRightSidebarStore from "@/hooks/store/useRightSidebarStore";
import Image from "next/image";

export default function ToolsToggle() {

  const {isRightSidebarOpen} = useRightSidebarStore();
  const {isLeftSidebarOpen,toggleLeftSidebar} = useLeftSidebarStore();
  console.log(isLeftSidebarOpen);

  return (
    <button onClick={toggleLeftSidebar} className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-5">
      <Image
        src="/assets/icons/ico_thin_chevron.svg"
        width={9}
        height={16}
        alt="chevron-icon"
        className={`hidden lg:block ${isLeftSidebarOpen ? "rotate-180 transition-all duration-300": "rotate-[-180] transition-all duration-300"}` }
      />
      <Image
        src="/assets/icons/ico_tools.svg"
        width={25}
        height={25}
        alt="tools icon"
      />
      <p className={`lg:font-semibold lg:block ${isLeftSidebarOpen || isRightSidebarOpen && "hidden"}`}>Tools</p>
    </button>
  );
}
