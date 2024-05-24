import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const SmallDropMenu = () => {
  const { logOut } = useAuth();

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-slate-800 text-amber-700 font-serif px-4 py-1  rounded-md transition ease-in-out"
            : "px-4 py-1 text-gray-800 border-b-[1px] border-neutral-600 hover:bg-red-500 hover:text-neutral-50 rounded-md font-serif text-sm"
        }
        to={"/dashboard"}
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-slate-800 text-amber-700 font-serif px-4 py-1  rounded-md transition ease-in-out"
            : "px-4 py-1 text-gray-800 border-b-[1px] border-neutral-600 hover:bg-red-500 hover:text-neutral-50 rounded-md font-serif text-sm"
        }
        to={"/fundings"}
      >
        Fundings
      </NavLink>
      <span
        onClick={logOut}
        className="cursor-pointer px-4 py-1 font-semibold text-gray-800 border-b-[1px] lg:border-b-[1px] hover:bg-gray-700 hover:text-white border-neutral-600"
      >
        Log out
      </span>
    </>
  );
};

export default SmallDropMenu;
