import { Helmet } from "react-helmet-async";
import RequestTable from "../../../components/Dashboard/Donor/RequestTable";
import DashHeading from "../DashHeading";

const MyRequests = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | My Requests</title>
      </Helmet>
      <DashHeading title={"My Requests"}></DashHeading>
      {/* table  */}
      <RequestTable></RequestTable>
    </>
  );
};

export default MyRequests;
