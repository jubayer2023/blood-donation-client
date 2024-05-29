import VolunteerStatistic from "../../../components/Dashboard/Statistics/Volunteer/VolunteerStatistic";
import useAuth from "../../../hooks/useAuth";
import DashHeading from "../DashHeading";

const VolunteerHome = () => {
  const { user } = useAuth();
  return (
    <div className="">
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
