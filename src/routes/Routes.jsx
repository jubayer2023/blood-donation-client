import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Funding from "../pages/Funding/Funding";
import DashboardLayout from "../layouts/DashboardLayout";
import DonationRequests from "../pages/DonationRequests/DonationRequests";
import RequesDetails from "../pages/RequesDetails/RequesDetails";
import { getSingleRequest } from "../api/crud";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import MyRequests from "../pages/Dashboard/Donor/MyRequests";
import CreateRequests from "../pages/Dashboard/Donor/CreateRequests";
import UpdateRequest from "../pages/Dashboard/Donor/UpdateRequest";
import SearchPage from "../pages/SearchPage/SearchPage";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AllDonationRequest from "../components/Dashboard/Admin/AllDonationRequest";
import BlogContent from "../pages/Dashboard/BlogContent/BlogContent";
import AddBlog from "../pages/Dashboard/BlogContent/AddBlog";

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
      { path: "/search-donors", element: <SearchPage /> },
      {
        path: "/donation-details/:id",
        element: (
          <PrivateRoute>
            <RequesDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          // await axiosSecure.get(`/request-details/${params.id}`),
          await getSingleRequest(params.id),
      },
      { path: "/fundings", element: <Funding /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      // donor rooutes
      {
        path: "my-requests",
        element: (
          <PrivateRoute>
            <MyRequests />
          </PrivateRoute>
        ),
      },
      {
        path: "create-requests",
        element: (
          <PrivateRoute>
            <CreateRequests />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update-requests/:id",
        element: (
          <PrivateRoute>
            <UpdateRequest />
          </PrivateRoute>
        ),
        loader: async ({ params }) => await getSingleRequest(params.id),
      },
      // admin routes
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "all-requests",
        element: (
          <AdminRoute>
            <AllDonationRequest />
          </AdminRoute>
        ),
      },
      {
        path: "content-management",
        element: (
          <AdminRoute>
            <BlogContent />
          </AdminRoute>
        ),
      },
      {
        path: "content-management/add-blog",
        element: (
          <AdminRoute>
            <AddBlog />
          </AdminRoute>
        ),
      },
    ],
  },
]);
