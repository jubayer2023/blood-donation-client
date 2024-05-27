import toast from "react-hot-toast";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import useRole from "../../../hooks/useRole";
import { updateVolunterDonation } from "../../../api/volunteer";
import useReqVolunteer from "../../../hooks/useReqVolunteer";

const VolunteerReqTableRow = ({ request, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [role] = useRole();
  const { user } = useAuth();
  const [, , refetchRequests] = useReqVolunteer();

  const handleUpdateDoneStatus = async (id) => {
    try {
      await updateVolunterDonation(id, { status: "done" });
      toast.success("Done Status updated successfully");
      refetchRequests();
    } catch (error) {
      console.log("Update Done error :", error.message);
      toast.error("Done Status Update Error");
    }
  };

  // handle cancel status
  const handleUpdateCancelStatus = async (id) => {
    try {
      await updateVolunterDonation(id, { status: "cancelled" });
      toast.success("Ccancel Status updated successfully");
    } catch (error) {
      console.log("Update cancel error :", error.message);
      toast.error("Cancel Status Update Error");
      refetchRequests();
    }
  };

  return (
    <tr className="bg-slate-400">
      <td className="font-semibold">{index + 1}</td>
      <td className="font-semibold">{request.recipient_name}</td>
      <td className="">
        {request?.hospital_name}, {request?.recipient_upazila},{" "}
        {request?.recipient_district}
      </td>
      <td className="">
        {request?.donation_date} <br></br> {request?.donation_time}
      </td>
      <td className="capitalize">{request?.donation_status}</td>
      <td className="">
        {request?.donation_status === "inprogress" && (
          <div className="flex flex-col gap-3 justify-between">
            <button
              onClick={() => handleUpdateDoneStatus(request?._id)}
              className="btn btn-sm bg-green-800 text-white rounded-lg text-xs hover:bg-slate-900 hover:text-amber-700"
            >
              Done
            </button>
            <button
              onClick={() => handleUpdateCancelStatus(request?._id)}
              className="btn btn-sm bg-red-800 text-white rounded-lg text-xs hover:bg-slate-900 hover:text-amber-700"
            >
              Cancel
            </button>
          </div>
        )}
      </td>
      <td className="">
        {request?.donation_status === "inprogress" && (
          <p>
            {user?.displayName}, {user?.email}
          </p>
        )}
      </td>
      <td className=" flex items-center justify-center relative">
        <button
          disabled={role === "volunteer"}
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(false)}
          className="cursor-pointer btn btn-sm bg-rose-300 transition "
        >
          <BsThreeDotsVertical></BsThreeDotsVertical>
        </button>
        <ul
          tabIndex={0}
          className={`absolute -z-10 top-[50px] right-[20px] md:right-[20px]  menu p-3 flex flex-col gap-0 shadow-md bg-neutral-300 rounded-box w-36  transform ${
            isOpen
              ? "z-10  transition-all delay-100 ease-linear "
              : "  transition-all delay-150 ease-linear"
          }`}
        >
          <Link to={`/dashboard/update-requests/${request._id}`}>
            <p className="flex justify-center items-center text-xl rounded-t-md bg-slate-900 border-b-[1px] border-gray-500 px-3 py-2 text-amber-700 cursor-pointer hover:bg-base-100 hover:text-black">
              Edit
            </p>
          </Link>
          <p className="flex justify-center items-center text-xl bg-slate-900 px-3 py-2 border-b-[1px] border-gray-500 text-amber-700 hover:bg-red-700 hover:text-white cursor-pointer">
            Delete
          </p>
          <Link to={`/donation-details/${request?._id}`}>
            <p className="flex justify-center items-center text-xl bg-slate-900 px-3 py-2 rounded-b-md text-amber-700 cursor-pointer hover:bg-neutral-100 hover:text-black">
              Details
            </p>
          </Link>
        </ul>
      </td>
    </tr>
  );
};

export default VolunteerReqTableRow;
