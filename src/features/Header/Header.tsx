import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <header className="w-full">
      <MobileHeader className="xl:hidden bg-[#092934] p-3 sm:p-5" />

      <DesktopHeader className="bg-[#092934] p-3 sm:p-5" />
    </header>
  );
};

export default Header;
