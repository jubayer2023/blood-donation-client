import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-2  transition-colors duration-300 transform  hover:bg-red-600 hover:text-white ${
          isActive ? "bg-slate-800  text-amber-700" : "bg-gray-300"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium capitalize">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
