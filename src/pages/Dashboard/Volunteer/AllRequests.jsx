import { Helmet } from "react-helmet-async";
import DashHeading from "../DashHeading";
import FilterTab from "../../../components/Dashboard/Donor/FilterTab";
import EmptyState from "../../../components/Shared/EmptyState";
import RequestTable from "../../../components/Dashboard/Donor/RequestTable";
import Loader from "../../../components/Shared/Loader";
import { useSearchParams } from "react-router-dom";
import useReqVolunteer from "../../../hooks/useReqVolunteer";

const filterOptions = ["pending", "inprogress", "done", "cancelled"];

const AllRequests = () => {
  const [allRequest, isLoading] = useReqVolunteer();
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

      {allRequest && <RequestTable myRequests={allRequest}></RequestTable>}
    </>
  );
};

export default AllRequests;
