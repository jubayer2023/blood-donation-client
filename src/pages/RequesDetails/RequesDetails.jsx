import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Heading from "../../components/Shared/Heading";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import Button from "../../components/Button/Button";
import { useState } from "react";
import DonateConfirm from "../../components/Shared/Modal/DonateConfirm";
import usePendingRequests from "../../hooks/usePendingRequests";
import toast from "react-hot-toast";
import useMyRequsets from "../../hooks/useMyRequsets";
import { updateStatus } from "../../api/crud";

const RequesDetails = () => {
  const [isOpen, setIslOpen] = useState(false);
  const details = useLoaderData();
  const [, , refetchPendingRequests] = usePendingRequests();
  const [, , refetchMyRequests] = useMyRequsets();
  const navigate = useNavigate();

  const handleConfirm = async () => {
    try {
      // console.log("Inprogress !!!");
      await updateStatus(details._id, {
        status: "inprogress",
      });
      // console.log(data);
      // then refetch pendingRequests and myRequests
      refetchPendingRequests();
      refetchMyRequests();
      toast.success("Successfully updated status");
      setIslOpen(false);
      navigate("/donation-requests");
    } catch (error) {
      console.log(error);
      toast.error("Error from donate confirm modal");
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Blood Donations | Details</title>
      </Helmet>
      <div className="mt-12 mx-0 md:mx-20">
        <Heading title={"Donation Details"}></Heading>
        <div className="bg-neutral-200 rounded-xl p-10">
          <div className="">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-4 lg:gap-0">
              <div className="w-full bg-slate-300 p-4 text-sm rounded-md space-y-1 font-semibold">
                <h3 className="font-bold">{details.recipient_name}</h3>
                <p className="font-semibold text-sm flex items-center space-x-10 ">
                  <span className="text-red-600">
                    Status: {details.donation_status}
                  </span>{" "}
                  <span className="text-red-600">
                    Blood group : {details.blood_group}
                  </span>
                </p>
                <hr />
                <p className="flex  items-center">
                  Location : {details.hospital_name}{" "}
                  <span className="text-red-600 animate-pulse">
                    <FaLocationDot />
                  </span>
                </p>
                <hr />
                <p className="flex items-center ">
                  Full Address : {details.full_address_line}{" "}
                  <span className="animate-pulse text-red-600 ml-2">
                    <FaLocationArrow />
                  </span>
                </p>
                <hr />
              </div>
              <div className="divider divider-horizontal hidden md:flex"></div>
              <div className="w-full bg-slate-300 p-4 text-sm rounded-md space-y-1 font-semibold">
                <p>District: {details.recipient_district}</p>
                <hr />
                <p>Upazila: {details.recipient_upazila}</p>
                <hr />
                <p>Donation date: {details.donation_date}</p>
                <hr />
                <p>Donation time: {details.donation_time}</p>
                <hr />
              </div>
            </div>
            <div className="py-10 bg-slate-300 mt-10 rounded-md px-4 font-semibold text-sm">
              <p>Message: {details.request_message}</p>
            </div>

            {/* TO DO : DONATE  TASK */}
            <div className="my-4">
              <Button
                disabled={details?.donation_status !== "pending"}
                onClick={() => setIslOpen(true)}
                label={"DONATE"}
              ></Button>
            </div>
          </div>
        </div>
      </div>
      {/* confirm modal */}
      <DonateConfirm
        isOpen={isOpen}
        setIslOpen={setIslOpen}
        handleConfirm={handleConfirm}
      ></DonateConfirm>
    </Container>
  );
};

export default RequesDetails;
