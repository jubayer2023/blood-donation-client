import { Link } from "react-router-dom";
import RequestTable from "../../../components/Dashboard/Donor/RequestTable";
import EmptyState from "../../../components/Shared/EmptyState";
import Loader from "../../../components/Shared/Loader";
import useAuth from "../../../hooks/useAuth";
import useRecentRequest from "../../../hooks/useRecentRequest";
import DashHeading from "../DashHeading";
import { Helmet } from "react-helmet-async";

const DonorHome = () => {
  const { user } = useAuth();
  const [recentRequests, isLoading] = useRecentRequest();

 

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="">
      <Helmet>
        <title> Dashborad</title>
      </Helmet>

      <DashHeading
        title={`Wellcome to donor home`}
        name={user?.displayName}
        hifen={"-"}
      />
      {/* <p className="text-center text-sm font-sans font-semibold text-gray-300">
        Your three recent donation requests !
      </p> */}
      {recentRequests.length <= 0 ? (
        <EmptyState
          message={"Oops sorry ! No data found"}
          label={"Create Request Now"}
          address={"/dashboard/create-requests"}
        ></EmptyState>
      ) : (
        <RequestTable myRequests={recentRequests}></RequestTable>
      )}

      <div className="flex justify-center items-center my-10">
        <Link to={"/dashboard/my-requests"}>
          <button className="btn btn-md rounded-xl border-none capitalize text-sm font-semibold bg-rose-200 text-neutral-700 hover:cursor-pointer hover:bg-slate-950 hover:text-amber-700">
            See all requests
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonorHome;
