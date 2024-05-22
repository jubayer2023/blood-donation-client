import RequestTableRow from "./RequestTableRow";

const RequestTable = ({ myRequests }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-md">
        <thead>
          <tr className="bg-slate-900 text-amber-700 font-serif">
            <th className="border-r-[1px]">#</th>
            <th className="border-r-[1px]">Recipient Name</th>
            <th className="border-r-[1px]">Location</th>
            <th className="border-r-[1px]">Date & Time</th>
            <th className="border-r-[1px]">Status</th>
            <th className="border-r-[1px]">Actions</th>
            <th className="border-r-[1px]">Donor info</th>
            <th className="border-r-[1px]">Edit</th>
            <th className="border-r-[1px]">Delete</th>
            <th className="border-r-[1px]">View</th>
          </tr>
        </thead>
        <tbody>
          {/* table row */}
          {myRequests.map((request, index) => (
            <RequestTableRow
              key={request._id}
              request={request}
              index={index}
            ></RequestTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
