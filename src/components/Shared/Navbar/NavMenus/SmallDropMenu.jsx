import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const SmallDropMenu = () => {
  const { logOut } = useAuth();

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-600 font-bold px-4 py-1 text-white rounded-sm transition ease-out"
            : "px-4 py-1 font-semibold text-gray-800 border-b-[1px] lg:border-b-[1px] hover:bg-gray-700 hover:text-white border-neutral-600  "
        }
        to={"/dashboard"}
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-600 font-bold px-4 py-1 text-white rounded-sm transition ease-out"
            : "px-4 py-1 font-semibold text-gray-800 border-b-[1px] lg:border-b-[1px] hover:bg-gray-700 hover:text-white border-neutral-600  "
        }
        to={"/fundings"}
      >
        Fundings
      </NavLink>
      <span
        onClick={logOut}
        className="cursor-pointer px-4 py-1 font-semibold text-gray-800 border-b-[1px] lg:border-b-[1px] hover:bg-gray-700 hover:text-white border-neutral-600 "
      >
        Log out
      </span>
    </>
  );
};

export default SmallDropMenu;
