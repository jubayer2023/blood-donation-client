import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
// import Footer from "../components/Shared/Footer/Footer";
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[76px] min-h-[calc(100vh-90px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
