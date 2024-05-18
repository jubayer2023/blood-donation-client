import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Funding from "../pages/Funding/Funding";
import DashboardLayout from "../layouts/DashboardLayout";
import DonorHome from "../pages/Dashboard/Donor/DonorHome";
import DonationRequests from "../pages/DonationRequests/DonationRequests";
import RequesDetails from "../pages/RequesDetails/RequesDetails";
import { axiosSecure } from "../api/axiosBaseURL";
import { getRequestDetail } from "../api/crud";

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
      { path: "/donation-requests", element: <DonationRequests /> },
      {
        path: "/donation-details/:id",
        element: <RequesDetails />,
        loader: async ({ params }) =>
          // await axiosSecure.get(`/request-details/${params.id}`),
          await getRequestDetail(params.id),
      },
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
