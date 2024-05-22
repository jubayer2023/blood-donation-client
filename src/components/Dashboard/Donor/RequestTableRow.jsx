import { format } from "date-fns";
import useAuth from "../../../hooks/useAuth";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const RequestTableRow = ({ request, index }) => {
  const { user } = useAuth();
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
      <td className="">{request?.donation_status}</td>
      <td className="">
        {/* {request?.donation_status === "inprogress" && ( */}
        <div className="flex flex-col gap-3 justify-between">
          <button className="btn btn-sm bg-green-800 text-white rounded-lg text-xs hover:bg-slate-900 hover:text-amber-700">
            Done
          </button>
          <button className="btn btn-sm bg-red-800 text-white rounded-lg text-xs hover:bg-slate-900 hover:text-amber-700">
            Cancel
          </button>
        </div>
        {/* )} */}
      </td>
      <td className="">
        {request?.donation_status === "inprogress" && (
          <p>
            {user?.displayName}, {user?.email}
          </p>
        )}
      </td>
      <td className="h-full">
        <p className="flex justify-center items-center text-xl bg-slate-900 px-3 py-2 rounded-xl text-amber-700 cursor-pointer hover:bg-neutral-100 hover:text-black">
          <FaRegEdit></FaRegEdit>
        </p>
      </td>
      <td className="h-full">
        <p className="flex justify-center items-center text-xl bg-slate-900 px-3 py-2 rounded-xl text-amber-700 hover:bg-red-700 hover:text-white cursor-pointer">
          <MdDelete></MdDelete>
        </p>
      </td>
      <td className="h-full">
        <p className="flex justify-center items-center text-xl bg-slate-900 px-3 py-2 rounded-xl text-amber-700 cursor-pointer hover:bg-neutral-100 hover:text-black">
          <FaEye />
        </p>
      </td>
    </tr>
  );
};

export default RequestTableRow;
