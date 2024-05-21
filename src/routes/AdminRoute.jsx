import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Loader from "../components/Shared/Loader";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [role] = useRole();

  if (loading) {
    return <Loader></Loader>;
  }
  if (!user && role !== "admin") {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
