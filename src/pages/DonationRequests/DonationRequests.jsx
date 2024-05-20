import Container from "../../components/Shared/Container";
import Heading from "../../components/Shared/Heading";
import { Link } from "react-router-dom";
import usePendingRequests from "../../hooks/usePendingRequests";
import Loader from "../../components/Shared/Loader";

const DonationRequests = () => {
  const [pendingRequests, isLoading] = usePendingRequests();

  // console.log(pendingRequests);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <Container>
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
              className="flex flex-col md:flex-row justify-between p-7 lg:p-10  bg-teal-600 md:items-center  border-[1px] border-amber-100 shadow-teal-800 shadow-2xl rounded-b-xl"
            >
              <div className="space-y-2 text-neutral-100">
                <h3 className=" font-semibold text-xl">
                  Name: {item.recipient_name}
                </h3>
                <p className="text-sm font-semibold ">
                  Location: {item.hospital_name}
                </p>
                <p className="space-x-5 text-red-700 font-semibold text-xs xl:text-sm">
                  <span className="">date: {item.donation_date}</span>
                  <span> time: {item.donation_time}</span>
                </p>
              </div>
              <Link to={`/donation-details/${item._id}`} className="mt-5 md:mt-0">
                <button className="btn btn-sm btn-outline rounded-md bg-neutral-50 text-amber-600 hover:text-amber-600 hover:bg-slate-800 ">
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
