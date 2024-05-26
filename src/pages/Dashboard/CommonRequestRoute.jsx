import AllDonationRequest from "../../components/Dashboard/Admin/AllDonationRequest";
import useRole from "../../hooks/useRole";
import AdminRoute from "../../routes/AdminRoute";
import VolunteerRoute from "../../routes/VolunteerRoute";
import AllRequests from "./Volunteer/AllRequests";

const CommonRequestRoute = () => {
  const [role] = useRole();
  console.log(role);
  if (role === "admin") {
    return (
      <AdminRoute>
        <AllDonationRequest />
      </AdminRoute>
    );
  }
  if (role === "volunteer") {
    return (
      <VolunteerRoute>
        <AllRequests />
      </VolunteerRoute>
    );
  }
};

export default CommonRequestRoute;
