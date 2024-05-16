import { NavLink } from "react-router-dom";

const MenuNavItem = ({ drop, address, label }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `text-neutral-100 font-bold px-4 py-2 transition  ease-in-out delay-300 border-b-2 border-neutral-100 ${
                drop &&
                "py-1  block border-b-[1px] w-full  bg-red-600 text-white "
              }`
            : `px-4  font-semibold text-gray-800 ${
                drop &&
                "py-2   block border-b-[1px] overflow-hidden  w-full hover:bg-neutral-300 cursor-pointer "
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
