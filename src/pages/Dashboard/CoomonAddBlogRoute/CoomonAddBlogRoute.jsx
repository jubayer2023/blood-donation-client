import useRole from "../../../hooks/useRole";
import AdminRoute from "../../../routes/AdminRoute";
import VolunteerRoute from "../../../routes/VolunteerRoute";
import AddBlog from "../BlogContent/AddBlog";
import AddBlogVolunteer from "../Volunteer/AddBlogVolunteer";

const CommonBlogRoute = () => {
  const [role] = useRole();
  if (role === "admin") {
    return (
      <AdminRoute>
        <AddBlog />
      </AdminRoute>
    );
  }
  if (role === "volunteer") {
    return (
      <VolunteerRoute>
        <AddBlog />
      </VolunteerRoute>
    );
  }
};

export default CommonBlogRoute;
