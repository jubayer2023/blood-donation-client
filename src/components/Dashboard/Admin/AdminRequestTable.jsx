import AdminReqTableRow from "./AdminReqTableRow";

const AdminRequestTable = ({ myRequests }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="table table-md ">
        <thead>
          <tr className="bg-slate-900 text-amber-700 font-serif">
            <th className="border-r-[1px]">#</th>
            <th className="border-r-[1px]">Recipient Name</th>
            <th className="border-r-[1px]">Location</th>
            <th className="border-r-[1px]">Date & Time</th>
            <th className="border-r-[1px]">Status</th>
            <th className="border-r-[1px]">Change Status</th>
            <th className="border-r-[1px]">Donor info</th>
            <th className="border-r-[1px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* table row */}
          {myRequests.map((request, index) => (
            <AdminReqTableRow
              key={request._id}
              request={request}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRequestTable;
