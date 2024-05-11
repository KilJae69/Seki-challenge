"use client"

import { leftSidebarLinks } from "@/constants";
import useLeftSidebarStore from "@/hooks/store/useLeftSidebarStore";
import Image from "next/image";
import Link from "next/link";

export default function LeftSidebar() {
    const {isLeftSidebarOpen,toggleLeftSidebar} = useLeftSidebarStore();
    

  return (
    <nav className={`absolute  w-full bg-white border rounded-b-[20px] border-t-2 border-gray-300 lg:top-[85px] lg:w-[300px] lg:border-none lg:rounded-none lg:h-screen lg:flex lg:justify-start lg:items-center transition-all duration-300 ease-in-out 
    ${!isLeftSidebarOpen ? "top-[-600px] lg:left-[-300px]  lg:opacity-0": "opacity-100 lg:opacity-100 top-[70px] left-0 "}
    `}>
        <div className="flex flex-col px-[20px] gap-5 lg:px-[35px]">
            <div onClick={toggleLeftSidebar} className={`fixed top-[170px] left-0 w-screen   transition-all duration-300 ease-in-out bg-[#163556e6] z-[-10] lg:hidden 
            ${!isLeftSidebarOpen ? "top-[-100%] h-0 opacity-0":"top-0 h-full opacity-100"}
            `}></div>
            <h3 className="text-2xl font-semibold pt-6 pb-3.5 lg:hidden">Tools</h3>
            <ul role="list" className="pb-24  flex flex-col gap-5">
                {leftSidebarLinks.map(link => (
                    <li key={link.route} className="cursor-pointer">
                        <Link href={link.route} className="flex items-center gap-4">
                            <Image src={link.imgURL} alt={link.label} width={35} height={35} />
                            <span>{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  );
}
