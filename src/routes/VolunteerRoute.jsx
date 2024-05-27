import { Navigate, useLocation } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../components/Shared/Loader";

const VolunteerRoute = ({ children }) => {
  const location = useLocation();
  const [role, isLoading] = useRole();

  if (isLoading) {
    return <Loader></Loader>;
  }
  if (role !== "volunteer") {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
};

export default VolunteerRoute;
