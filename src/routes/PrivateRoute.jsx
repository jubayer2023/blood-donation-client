import { Navigate, useLocation, } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const loccation = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }

  if (!user || user?.email) {
    return (
      <Navigate to={"/login"} state={{ from: loccation }} replace></Navigate>
    );
  }
  if (user) {
    return children;
  }
};

export default PrivateRoute;
