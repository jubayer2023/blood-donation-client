import useRole from "../../../hooks/useRole";
import AdminRoute from "../../../routes/AdminRoute";
import VolunteerRoute from "../../../routes/VolunteerRoute";
import BlogContent from "../BlogContent/BlogContent";

const CommonBlogContent = () => {
  const [role] = useRole();
  if (role === "admin") {
    return (
      <AdminRoute>
        <BlogContent />
      </AdminRoute>
    );
  }
  if (role === "volunteer") {
    return (
      <VolunteerRoute>
        <BlogContent />
      </VolunteerRoute>
    );
  }
};

export default CommonBlogContent;
