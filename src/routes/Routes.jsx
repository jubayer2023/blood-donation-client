import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DonationDetails from "../pages/DonationDetails/DonationDetails";
import Funding from "../pages/Funding/Funding";
import DashboardLayout from "../layouts/DashboardLayout";
import DonorHome from "../pages/Dashboard/Donor/DonorHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/room/:id", element: <DonationDetails /> },
      { path: "/fundings", element: <Funding /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DonorHome></DonorHome>,
      },
    ],
  },
]);
