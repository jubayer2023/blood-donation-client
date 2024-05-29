import VolunteerStatistic from "../../../components/Dashboard/Statistics/Volunteer/VolunteerStatistic";
import useAuth from "../../../hooks/useAuth";
import DashHeading from "../DashHeading";
import { Helmet } from "react-helmet-async";

const VolunteerHome = () => {
  const { user } = useAuth();

  return (
    <div className="">
      <Helmet>
        <title> Dashborad </title>
      </Helmet>

      <DashHeading
        title={`Wellcome to Admin home`}
        name={user?.displayName}
        hifen={"-"}
      />
      <div>
        <VolunteerStatistic />
      </div>
    </div>
  );
};

export default VolunteerHome;
