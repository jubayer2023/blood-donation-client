import { Link } from "react-router-dom";
import Container from "../Container";
import MenuDropdown from "./MenuDropdown";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className="fixed w-full  z-10 shadow-sm">
      <div className="py-1 bg-red-300 border-b-[2px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Logo></Logo>

            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
