import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <header className="w-full">
      <MobileHeader className="xl:hidden" />

      <DesktopHeader />
    </header>
  );
};

export default Header;
