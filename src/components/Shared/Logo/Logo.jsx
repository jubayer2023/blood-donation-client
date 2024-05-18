import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/blood-logo.jpg";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center ">
      <img
        className=" w-[60px] h-[50px] rounded-full mr-3  md:h-[60px] object-cover"
        src={logoImg}
        alt="logo"
      />
      <div className="divider-vertical h-[50px] w-[2px] bg-red-900 my-auto"></div>
      <div className="text-xl md:text-2xl font-bold pl-2 ">
        <span className="text-red-700 uppercase ">B l o o d</span>
        <br />
        <span className="">Donations</span>
      </div>
    </Link>
  );
};

export default Logo;
