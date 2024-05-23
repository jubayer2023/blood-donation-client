import { useState } from "react";
import DashHeading from "../DashHeading";
import useDistricts from "../../../hooks/useDistricts";
import useUpazila from "../../../hooks/useUpazila";
import useAuth from "../../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import CommonForm from "../../../components/Dashboard/Form/CommonForm";
import useMyRequsets from "../../../hooks/useMyRequsets";
import Swal from "sweetalert2";
import { updateRequestData } from "../../../api/crud";

const UpdateRequest = () => {
  const previousData = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [donationDate, setDonationDate] = useState(previousData?.donation_date);
  const [donationTime, setDonationTime] = useState(previousData?.donation_time);
  const [districts] = useDistricts();
  const [upazila] = useUpazila();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [, , refetchMyRequests] = useMyRequsets();
  //   console.log(user?.email);
  //   console.log(previousData);
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
    const updateData = {
      ...data,
      donation_date: donationDate,
      donation_time: donationTime,
      donation_status: "pending",
      recipient_email: user?.email,
    };
    // console.log(requestData);

    try {
      Swal.fire({
        title: "Are you sure?",
        text: "The status will be PENDING !!!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setLoading(true);
          const data = await updateRequestData(previousData?._id, updateData);
          if (data?.modifiedCount > 0) {
            toast.success("Request updated successfully");
            refetchMyRequests();
            setLoading(false);
            navigate("/dashboard/my-requests");
          }
          //   console.log(data);
        }
      });
    } catch (error) {
      console.log("ERROR From Update Rrequest : ", error);
      toast.error("ERROR From Update Rrequest");
      setLoading(false);
    }
  };

  return (
    <div>
      <DashHeading
        title={"Update Donation Requests"}
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
            previousData={previousData}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateRequest;
