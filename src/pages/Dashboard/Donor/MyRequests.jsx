import { Helmet } from "react-helmet-async";
import RequestTable from "../../../components/Dashboard/Donor/RequestTable";
import DashHeading from "../DashHeading";
import useMyRequsets from "../../../hooks/useMyRequsets";
import Loader from "../../../components/Shared/Loader";
import FilterTab from "../../../components/Dashboard/Donor/FilterTab";
import { useSearchParams } from "react-router-dom";
import EmptyState from "../../../components/Shared/EmptyState";

const MyRequests = () => {
  const [myRequests, isLoading] = useMyRequsets();
  const [searchParams, setSearchParams] = useSearchParams();

  const queryStatus = searchParams.get("status");

  // console.log(queryStatus);

  // console.log(myRequests.length);
  if (isLoading) {
    return <Loader></Loader>;
  }

  const filterOptions = ["pending", "inprogress", "done", "cancelled"];

  return (
    <>
      <Helmet>
        <title>Dashboard | My Requests</title>
      </Helmet>
      {/* heading */}
      <DashHeading title={"My Requests"}></DashHeading>
      {/* filter options */}
      <div className="flex justify-center items-center mb-10">
        <div role="" className="flex flex-wrap bg-slate-300">
          {filterOptions.map((status) => (
            <FilterTab
              key={status}
              status={status}
              selected={queryStatus === status}
            ></FilterTab>
          ))}
        </div>
      </div>
      {/* table  */}
      {myRequests.length <= 0 ? (
        <EmptyState
          message={"Oops sorry ! No data found"}
          label={"Create Request Now"}
          address={"/dashboard/create-requests"}
        ></EmptyState>
      ) : (
        <RequestTable myRequests={myRequests}></RequestTable>
      )}
    </>
  );
};

export default MyRequests;
