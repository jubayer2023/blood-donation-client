import { Link } from "react-router-dom";
import Container from "../Container";
import logoImg2 from "../../../assets/images/blood-logo.jpg";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-1 bg-neutral-100 border-b-[2px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to={"/"}>
              <div className="flex items-center ">
                <img
                  className=" w-[70px] h-[50px]  md:h-[60px] object-cover"
                  src={logoImg2}
                  alt="logo"
                />
                <div className="divider-vertical h-[50px] w-[2px] bg-red-900 my-auto"></div>
                <div className="text-2xl md:text-3xl font-bold pl-2 ">
                  <h3 className="text-red-700 uppercase ">B l o o d</h3>
                  <h3 className="">Donations</h3>
                </div>
              </div>
            </Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
