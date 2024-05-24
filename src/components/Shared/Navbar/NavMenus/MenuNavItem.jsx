import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const MenuNavItems = () => {
  const { user } = useAuth();
  // console.log(user)
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-slate-800 text-amber-700 font-serif px-4 py-1  rounded-md transition ease-in-out"
            : "px-4 py-1 text-gray-800 border-b-[1px] lg:border-b-0 border-neutral-600 hover:bg-red-500 hover:text-neutral-50 rounded-md font-serif text-sm"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-slate-800 text-amber-700 font-serif px-4 py-1  rounded-md transition ease-in-out"
            : "px-4 py-1 text-gray-800 border-b-[1px] lg:border-b-0 border-neutral-600 hover:bg-red-500 hover:text-neutral-50 rounded-md font-serif text-sm"
        }
        to={"/donation-requests"}
      >
        Donation requests
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-slate-800 text-amber-700 font-serif px-4 py-1  rounded-md transition ease-in-out"
            : "px-4 py-1 text-gray-800 border-b-[1px] lg:border-b-0 border-neutral-600 hover:bg-red-500 hover:text-neutral-50 rounded-md font-serif text-sm"
        }
        to={"/search-requests"}
      >
        Search requests
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-slate-800 text-amber-700 font-serif px-4 py-1  rounded-md transition ease-in-out"
            : "px-4 py-1 text-gray-800 border-b-[1px] lg:border-b-0 border-neutral-600 hover:bg-red-500 hover:text-neutral-50 rounded-md font-serif text-sm"
        }
        to={"/blog"}
      >
        Blog
      </NavLink>
      {user ? (
        ""
      ) : (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-slate-800 text-amber-700 font-serif px-4 py-1  rounded-md transition ease-in-out"
                : "px-4 py-1 text-gray-800 border-b-[1px] lg:border-b-0 border-neutral-600 hover:bg-red-500 hover:text-neutral-50 rounded-md font-serif text-sm"
            }
            to={"/login"}
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-slate-800 text-amber-700 font-serif px-4 py-1  rounded-md transition ease-in-out"
                : "px-4 py-1 text-gray-800 border-b-[1px] lg:border-b-0 border-neutral-600 hover:bg-red-500 hover:text-neutral-50 rounded-md font-serif text-sm"
            }
            to={"/signup"}
          >
            Sign up
          </NavLink>
        </>
      )}
    </>
  );
};

export default MenuNavItems;
