import { NavLink } from "react-router-dom";

const MenuNavItem = ({ drop, address, label }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `text-red-700 font-bold mx-4 py-2 transition  ease-in-out delay-300 border-b-2 border-rose-500 ${
                drop &&
                "py-1 px-2 block border-none mx-0 w-full bg-red-600 text-white "
              }`
            : `mx-4  font-semibold text-gray-800 ${
                drop &&
                "py-1 px-2 block border-none mx-0 w-full hover:bg-neutral-300 cursor-pointer "
              }`
        }
        to={address}
      >
        {label}
      </NavLink>
    </>
  );
};

export default MenuNavItem;
