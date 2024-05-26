import { Helmet } from "react-helmet-async";
import DashHeading from "../../../pages/Dashboard/DashHeading";
import { useSearchParams } from "react-router-dom";
import Loader from "../../Shared/Loader";
import FilterTab from "../Donor/FilterTab";
import EmptyState from "../../Shared/EmptyState";
import RequestTable from "../Donor/RequestTable";
import useAllRequests from "../../../hooks/useAllRequests";

const filterOptions = ["pending", "inprogress", "done", "cancelled"];

const AllDonationRequest = () => {
  const [allRequest, isLoading] = useAllRequests();
  const [searchParams, setSearchParams] = useSearchParams();

  const queryStatus = searchParams.get("status");
//   console.log(allRequest);

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <Helmet>
        <title>Dashboard | All Donation Requests</title>
      </Helmet>
      {/* heading */}
      <DashHeading title={"All Blood Donation Requests"}></DashHeading>
      {/* filter options */}
      <div className="flex justify-center items-center mb-10">
        <div role="" className="flex flex-wrap bg-slate-300">
          {filterOptions.map((status) => (
            <FilterTab
              key={status}
              status={status}
              address={"all-requests"}
              selected={queryStatus === status}
            ></FilterTab>
          ))}
        </div>
      </div>
      {/* table  */}
      {allRequest.length <= 0 ? (
        <EmptyState
          message={"Oops sorry ! No data found"}
          label={"Create Request Now"}
          address={"/dashboard/create-requests"}
        ></EmptyState>
      ) : (
        <RequestTable myRequests={allRequest}></RequestTable>
      )}
    </>
  );
};

export default AllDonationRequest;
