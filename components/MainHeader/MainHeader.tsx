
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function MainHeader() {
  return (
    <header className="fixed w-full z-50 flex flex-col items-center justify-center lg:flex-row lg:bg-white">
      <div className="w-full z-20 lg:hidden">
        <MobileHeader />
      </div>
      <div className="hidden lg:block w-full">
        <DesktopHeader />
      </div>
      <LeftSidebar />
     <RightSidebar /> 
    </header>
  );
}
