import useRole from "../../hooks/useRole";
import AdminRoute from "../../routes/AdminRoute";
import VolunteerRoute from "../../routes/VolunteerRoute";
import AdminAllRequest from "./Admin/AdminAllRequest";
import AllRequests from "./Volunteer/AllRequests";

const CommonRequestRoute = () => {
  const [role] = useRole();
  console.log(role);
  if (role === "admin") {
    return (
      <AdminRoute>
        <AdminAllRequest />
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
