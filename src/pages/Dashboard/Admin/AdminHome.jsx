import AdminStatistics from "../../../components/Dashboard/Statistics/Admin/AdminStatistic";
import useAuth from "../../../hooks/useAuth";
import DashHeading from "../DashHeading";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  const { user } = useAuth();



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
