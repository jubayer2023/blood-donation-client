import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useMyRequsets from "../../../hooks/useMyRequsets";
import useRecentRequest from "../../../hooks/useRecentRequest";
import useAllRequests from "../../../hooks/useAllRequests";
import { deleteRequest, updateStatus } from "../../../api/crud";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const AdminReqTableRow = ({ request, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const [, , refetchMyRequests] = useMyRequsets();
  const [, , recentRequestsRefetch] = useRecentRequest();
  const [, , refetchAllRequests] = useAllRequests();

  const handleUpdateDoneStatus = async (id) => {
    try {
      await updateStatus(id, { status: "done" });
      toast.success("Done Status updated successfully");
      refetchAllRequests();
    } catch (error) {
      console.log("Update Done error :", error.message);
      toast.error("Done Status Update Error");
    }
  };

  // handle cancel status
  const handleUpdateCancelStatus = async (id) => {
    try {
      await updateStatus(id, { status: "cancelled" });
      toast.success("Ccancel Status updated successfully");
      refetchAllRequests();
    } catch (error) {
      console.log("Update cancel error :", error.message);
      toast.error("Cancel Status Update Error");
    }
  };

  const handleDeleteRequest = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const data = await deleteRequest(id);
          if (data?.deletedCount > 0) {
            toast.success("Request Deleted successfully");
            refetchMyRequests();
            recentRequestsRefetch();
            refetchAllRequests();
          }
        }
      });
    } catch (error) {
      console.log("Update cancel error :", error.message);
      toast.error("Cancel Status Update Error");
    }
  };

  return (
    <tr className="bg-slate-400 relative">
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
      <td className="">
        <button
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setIsOpen(false)}
          className="cursor-pointer btn btn-sm bg-rose-300 transition "
        >
          <BsThreeDotsVertical></BsThreeDotsVertical>
        </button>
        <ul
          tabIndex={0}
          className={`absolute -z-10 top-[84px] right-[20px] md:right-[20px]  menu p-3 flex flex-col gap-0 shadow-md bg-neutral-300 rounded-box w-36  transform ${
            isOpen
              ? "z-10  transition-all delay-100 ease-linear "
              : "  transition-all delay-150 ease-linear"
          }`}
        >
          <Link to={`/dashboard/update-requests/${request._id}`}>
            <p className="flex justify-center items-center text-sm rounded-t-md bg-slate-900 border-b-[1px] border-gray-500 px-3 py-2 text-amber-700 cursor-pointer hover:bg-base-100 hover:text-black">
              Edit
            </p>
          </Link>
          <p
            onClick={() => handleDeleteRequest(request?._id)}
            className="flex justify-center items-center text-sm bg-slate-900 px-3 py-2 border-b-[1px] border-gray-500 text-amber-700 hover:bg-red-700 hover:text-white cursor-pointer"
          >
            Delete
          </p>
          <Link to={`/donation-details/${request?._id}`}>
            <p className="flex justify-center items-center text-sm bg-slate-900 px-3 py-2 rounded-b-md text-amber-700 cursor-pointer hover:bg-neutral-100 hover:text-black">
              Details
            </p>
          </Link>
        </ul>
      </td>
    </tr>
  );
};

export default AdminReqTableRow;
