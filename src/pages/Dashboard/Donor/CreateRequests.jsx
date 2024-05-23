import { useState } from "react";
import DashHeading from "../DashHeading";
import useDistricts from "../../../hooks/useDistricts";
import useUpazila from "../../../hooks/useUpazila";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import CommonForm from "../../../components/Dashboard/Form/CommonForm";
import { saveReuestsToDB } from "../../../api/crud";
import useMyRequsets from "../../../hooks/useMyRequsets";

const CreateRequests = () => {
  const [loading, setLoading] = useState(false);
  const [donationDate, setDonationDate] = useState("");
  const [donationTime, setDonationTime] = useState("");
  const [districts] = useDistricts();
  const [upazila] = useUpazila();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [, , refetchMyRequests] = useMyRequsets();
  //   console.log(user?.email);
  // sorting districts and upazila
  const sortedDistricts = districts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const sortedUpazila = upazila.sort((a, b) => a.name.localeCompare(b.name));

  // handleDateChange
  const handleDateChange = (date, dateString) => {
    setDonationDate(dateString);
  };

  // handleTimeChange
  const handleTimeChange = (time, timeString) => {
    // console.log(time, timeString);
    setDonationTime(timeString);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);

    const requestData = {
      ...data,
      donation_date: donationDate,
      donation_time: donationTime,
      donation_status: "pending",
      recipient_email: user?.email,
    };
    // console.log(requestData);

    try {
      await saveReuestsToDB(requestData);
      // then refetch myRequests collection
      refetchMyRequests();
      toast.success("Request posted successfully");
      // setLoading state as false
      setLoading(false);
      navigate("/dashboard/my-requests");
    } catch (error) {
      console.log("ERROR FROM Creat Rrequest : ", error);
      toast.error("ERROR FROM Creat Rrequest");
      setLoading(false);
    }
  };

  return (
    <div>
      <DashHeading
        title={"Create Donation Requests"}
        subtitle={"Wellcome to blood donations"}
      ></DashHeading>
      {/* form */}
      <div className="shadow-md shadow-neutral-400 w-4/5 md:w-3/4 lg:max-w-screen-md my-12  mx-auto p-6 sm:p-10 bg-slate-400 text-gray-900">
        {/* from here */}
        <div className=" w-full font-semibold text-sm mx-auto">
          <CommonForm
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            user={user}
            register={register}
            errors={errors}
            sortedDistricts={sortedDistricts}
            sortedUpazila={sortedUpazila}
            handleDateChange={handleDateChange}
            handleTimeChange={handleTimeChange}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateRequests;
