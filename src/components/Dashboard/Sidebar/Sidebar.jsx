import { useState } from "react";
// Components
import Logo from "../../Shared/Logo/Logo";
import MenuItem from "./MenuItem";
import AdminMenu from "./Menu/AdminMenu";
import VolunteerMenu from "./Menu/VolunteerMenu";
import DonorMenu from "./Menu/DonorMenu";

// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";

// import { BsGraphUp } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();

  // console.log(role);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small and Medium Screen Navbar */}
      <div className="bg-slate-300 text-gray-800 flex justify-between lg:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            {/* logo */}
            <Logo></Logo>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-neutral-300 focus:text-green-500"
        >
          {isActive ? (
            <AiOutlineBars className=" animate-pulse  text-3xl" />
          ) : (
            <span className="animate-pulse  text-3xl">
              <FaRegWindowClose />
            </span>
          )}
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 lg:fixed flex flex-col justify-between overflow-x-hidden bg-slate-600 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform shadow-inner shadow-neutral-500 ${
          isActive && "-translate-x-full"
        }  lg:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              {/* logo */}
              <Logo />
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <MenuItem
                icon={FaHome}
                label={role + " " + "home"}
                address="/dashboard"
              />

              {/* Menu Items */}
              {role === "admin" && <AdminMenu />}
              {role === "volunteer" && <VolunteerMenu />}
              {role === "donor" && <DonorMenu />}
            </nav>
          </div>
        </div>
        {/* profile and logout button */}
        <div>
          <hr />

          <MenuItem icon={FcSettings} label="Profile" address="profile" />
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-3 rounded-sm bg-neutral-300 hover:bg-red-600   hover:text-neutral-50 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
