import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import NavMenus from "./NavMenus/NavMenus";
import MenuNavItem from "./NavMenus/MenuNavItem";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useAuth();

  // console.log(user);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden lg:block">
          <nav className=" flex justify-between items-center ">
            {/* nav menus */}
            <NavMenus user={user}></NavMenus>
          </nav>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {/* Avatar */}
            <img
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        </div>
      </div>
      {/* dropdown box */}
      <div
        className={`absolute rounded-xl transition transform  ease-in-out  -z-10 shadow-inner shadow-slate-600 w-[40vw] md:w-[20vw] lg:w-[10vw] bg-neutral-50  overflow-hidden right-0 top-16  text-sm ${
          isOpen
            ? "translate-y-0 opacity-100 delay-100"
            : "-translate-y-96 opacity-0 delay-300"
        }`}
      >
        <div className="flex flex-col cursor-pointer">
          {/* dropdwon menu item for samll devices */}
          <div className="lg:hidden">
            <NavMenus drop={true} user={user}></NavMenus>
          </div>
          {/* dropdwon menu item for large devices */}
          <div className="hidden lg:block ">
            <div className="flex flex-col ">
              <MenuNavItem
                drop={true}
                address={"/fundings"}
                label={"Fundings"}
              ></MenuNavItem>
              <MenuNavItem
                drop={true}
                address={"/logout"}
                label={"Log out"}
              ></MenuNavItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
