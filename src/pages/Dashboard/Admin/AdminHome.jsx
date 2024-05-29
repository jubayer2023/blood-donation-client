import { useEffect } from "react";
import AdminStatistics from "../../../components/Dashboard/Statistics/Admin/AdminStatistic";
import useAuth from "../../../hooks/useAuth";
import DashHeading from "../DashHeading";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  const { user } = useAuth();

  useEffect(() => {
    toast.success(`Wellcome to dashboard ${user?.displayName}`);
  }, [user]);

  return (
    <div className="">
      <Helmet>
        <title> Dashborad</title>
      </Helmet>

      <DashHeading
        title={`Wellcome to Admin home`}
        name={user?.displayName}
        hifen={"-"}
      />
      <div>
        <AdminStatistics />
      </div>
    </div>
  );
};

export default AdminHome;
