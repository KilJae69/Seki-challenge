"use client";
import { rightSidebarLinks } from "@/constants";
import PrimaryButton from "../shared/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import useRightSidebarStore from "@/hooks/store/useRightSidebarStore";

export default function RightSidebar() {
  const { isRightSidebarOpen, toggleRightSidebar } = useRightSidebarStore();
  return (
    <div
      className={`absolute bg-white w-full p-8 border-b rounded-b-[20px] border-t-2 transition-all duration-300 ease-in-out lg:max-w-[385px] lg:rounded-b-none lg:rounded-l-[20px] lg:border-none lg:h-screen
    ${
      !isRightSidebarOpen
        ? "top-[-600px] lg:right-[-385px] lg:top-0 "
        : " lg:opacity-100 top-[70px] lg:right-0 lg:top-0"
    }`}
    >
        <div
          onClick={toggleRightSidebar}
          className={`fixed top-[170px]  w-screen transition-all lg:w-screen duration-300 ease-in-out bg-[#163556e6] z-[-10] lg:top-0 lg:h-full
            ${
              !isRightSidebarOpen
                ? "top-[-100%] h-0 opacity-0 lg:right-[-100%]"
                : "top-0 h-full opacity-100 lg:right-0"
            }
            `}
        ></div>
      <div className="flex flex-col w-full justify-center items-start gap-6">

        

        <div className="flex justify-between items-center w-full">
          <h2 className="text-[18px] font-semibold">Hello John!</h2>
          <button onClick={toggleRightSidebar} className="hidden lg:block">
            <Image
              src="/assets/icons/rightsidebar/ico_close.svg"
              width={25}
              height={25}
              alt="close sidebar"
            />
          </button>
        </div>

        <div className="flex w-full items-center">
          <h3 className="uppercase text-xs whitespace-nowrap font-bold mr-2 tracking-[3px]">
            Your plan
          </h3>
          <span className="bg-[#BFCBD8] h-[1px] w-full"></span>
        </div>

        <div className="flex justify-between w-full">
          <div>
            <p className="text-[14px] font-medium">Yearly</p>
            <h4 className="text-[18px] font-semibold">Bussiness</h4>
          </div>

          <div>
            <p className="text-[14px] font-medium">Expires in</p>
            <h4 className="text-[18px] font-semibold">7 days</h4>
          </div>
        </div>

        <div className="w-full">
          <PrimaryButton variant="outline" label="Upgrade Plan" />
        </div>

        <div className="flex w-full items-center mb-3.5">
          <h3 className="uppercase text-xs whitespace-nowrap font-bold mr-2 tracking-[3px]">
            Account Settings
          </h3>
          <span className="bg-[#BFCBD8] h-[1px] w-full"></span>
        </div>

        <nav>
          <ul role="list" className=" flex flex-col gap-5">
            {rightSidebarLinks.map((link) => (
              <li key={link.route} className="cursor-pointer">
                <Link href={link.route} className="flex items-center gap-4">
                  <Image
                    src={link.imgURL}
                    alt={link.label}
                    width={35}
                    height={35}
                  />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
