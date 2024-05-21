import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen lg:flex">
      {/* Sidebar Component */}
      <Sidebar></Sidebar>
      <div className="flex-1  lg:ml-64">
        {/* outlet */}
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
