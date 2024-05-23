import useAuth from "../../../hooks/useAuth";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import useMyRequsets from "../../../hooks/useMyRequsets";
import { deleteRequest, updateStatus } from "../../../api/crud";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const RequestTableRow = ({ request, index }) => {
  const { user } = useAuth();
  const [, , refetchMyRequests] = useMyRequsets();

  const handleUpdateDoneStatus = async (id) => {
    try {
      await updateStatus(id, { status: "done" });
      toast.success("Done Status updated successfully");
      refetchMyRequests();
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
      refetchMyRequests();
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
          }
        }
      });
    } catch (error) {
      console.log("Update cancel error :", error.message);
      toast.error("Cancel Status Update Error");
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
      <td className="h-full">
        <Link to={`/dashboard/update-requests/${request._id}`}>
          <p className="flex justify-center items-center text-xl bg-slate-900 px-3 py-2 rounded-xl text-amber-700 cursor-pointer hover:bg-neutral-100 hover:text-black">
            <FaRegEdit></FaRegEdit>
          </p>
        </Link>
      </td>
      <td className="h-full">
        <p
          onClick={() => handleDeleteRequest(request?._id)}
          className="flex justify-center items-center text-xl bg-slate-900 px-3 py-2 rounded-xl text-amber-700 hover:bg-red-700 hover:text-white cursor-pointer"
        >
          <MdDelete></MdDelete>
        </p>
      </td>
      <td className="h-full">
        <Link to={`/donation-details/${request?._id}`}>
          <p className="flex justify-center items-center text-xl bg-slate-900 px-3 py-2 rounded-xl text-amber-700 cursor-pointer hover:bg-neutral-100 hover:text-black">
            <FaEye />
          </p>
        </Link>
      </td>
    </tr>
  );
};

export default RequestTableRow;
