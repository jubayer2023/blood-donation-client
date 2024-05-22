import { Helmet } from "react-helmet-async";
import RequestTable from "../../../components/Dashboard/Donor/RequestTable";
import DashHeading from "../DashHeading";
import useMyRequsets from "../../../hooks/useMyRequsets";
import Loader from "../../../components/Shared/Loader";

const MyRequests = () => {
  const [myRequests, isLoading] = useMyRequsets();

  // console.log(myRequests);
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | My Requests</title>
      </Helmet>
      <DashHeading title={"My Requests"}></DashHeading>
      {/* table  */}
      <RequestTable myRequests={myRequests}></RequestTable>
    </>
  );
};

export default MyRequests;
