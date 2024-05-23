import Container from "../../components/Shared/Container";
import Heading from "../../components/Shared/Heading";
import { Link } from "react-router-dom";
import usePendingRequests from "../../hooks/usePendingRequests";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";

const DonationRequests = () => {
  const [pendingRequests, isLoading] = usePendingRequests();

  // console.log(pendingRequests);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <Container>
      <Helmet>
        <title>Blood Donations | pendingRequests</title>
      </Helmet>
      <div className=" mt-12">
        <Heading
          title={"All Pending Donations Requests"}
          center={true}
          subtitle={"Wellcome to blodd donations site !!!"}
        ></Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  mt-10 ">
          {pendingRequests.map((item) => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row justify-between px-3 md:px-6 py-7 lg:px-5 lg:py-10  bg-teal-600 md:items-center  border-[1px] border-amber-100 shadow-teal-800 shadow-2xl rounded-lg"
            >
              <div className="space-y-2 text-neutral-900">
                <h3 className=" font-semibold text-xl">
                  Recipient name: {item.recipient_name}
                </h3>
                <p className="text-sm font-semibold ">
                  Location: {item.hospital_name}
                </p>
                <p className="space-x-5 text-red-700 font-semibold text-xs xl:text-sm">
                  <span className="">Donation date: {item.donation_date}</span>
                  <span>Donation time: {item.donation_time}</span>
                </p>
              </div>
              <Link
                to={`/donation-details/${item._id}`}
                className="mt-5 md:mt-0"
              >
                <button className="btn btn-sm btn-outline rounded-md bg-slate-400 text-amber-800 hover:text-amber-600 hover:bg-slate-800 text-xs">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DonationRequests;
