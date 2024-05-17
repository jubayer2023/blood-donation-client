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
            ? "bg-red-600 font-bold px-4 py-1 text-white rounded-sm transition ease-out"
            : "px-4 py-1 font-semibold text-gray-800 border-b-[1px] lg:border-b-0 border-neutral-600 "
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-600 font-bold px-4 py-1 text-white rounded-sm transition ease-out"
            : "px-4 py-1 font-semibold text-gray-800 border-b-[1px] lg:border-b-0 border-neutral-600 "
        }
        to={"/donationRequests"}
      >
        Donation requests
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-red-600 font-bold px-4 py-1 text-white rounded-sm transition ease-out"
            : "px-4 py-1 font-semibold text-gray-800 border-b-[1px] lg:border-b-0 border-neutral-600 "
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
                ? "bg-red-600 font-bold px-4 py-1 text-white rounded-sm transition ease-out"
                : "px-4 py-1 font-semibold text-gray-800 border-b-[1px] lg:border-b-0 border-neutral-600 "
            }
            to={"/login"}
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 font-bold px-4 py-1 text-white rounded-sm transition ease-out"
                : "px-4 py-1 font-semibold text-gray-800 border-b-[1px] lg:border-b-0 border-neutral-600 "
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
