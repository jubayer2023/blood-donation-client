import useRole from "../../../hooks/useRole";
import AdminRoute from "../../../routes/AdminRoute";
import VolunteerRoute from "../../../routes/VolunteerRoute";
import AdminHome from "../Admin/AdminHome";
import DonorHome from "../Donor/DonorHome";
import VolunteerHome from "../Volunteer/VolunteerHome";

const DashboardHome = () => {
  const [role] = useRole();
  console.log(role);

  if (role === "admin") {
    return (
      <>
        <AdminRoute>
          <AdminHome></AdminHome>
        </AdminRoute>
      </>
    );
  }
  if (role === "volunteer") {
    return (
      <>
        <VolunteerRoute>
          <VolunteerHome></VolunteerHome>
        </VolunteerRoute>
      </>
    );
  }
  if (role === "donor") {
    return (
      <div>
        <DonorHome></DonorHome>
      </div>
    );
  }
};

export default DashboardHome;
