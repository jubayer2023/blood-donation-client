import { Navigate, useLocation } from "react-router-dom";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";

const VolunteerRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [role] = useRole();

  if (loading) {
    return <Loader></Loader>;
  }
  if (!user && role !== "volunteer") {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
};

export default VolunteerRoute;
