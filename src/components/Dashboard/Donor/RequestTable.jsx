import RequestTableRow from "./RequestTableRow";

const RequestTable = () => {
  return (
    <div className=" ">
      <div className="py-4">
        <div className="overflow-x-auto py-4">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-slate-900">
                  <th
                    scope="col"
                    className="px-5 py-3  border-b border-gray-200 text-amber-700  text-left text-sm uppercase font-normal"
                  >
                    Recipient name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3  border-b border-gray-200 text-amber-700  text-left text-sm uppercase font-normal"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3  border-b border-gray-200 text-amber-700  text-left text-sm uppercase font-normal"
                  >
                    Date & time
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3  border-b border-gray-200 text-amber-700  text-left text-sm uppercase font-normal"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3  border-b border-gray-200 text-amber-700  text-left text-sm uppercase font-normal"
                  >
                    Donor Info
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3  border-b border-gray-200 text-amber-700  text-left text-sm uppercase font-normal"
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3  border-b border-gray-200 text-amber-700  text-left text-sm uppercase font-normal"
                  >
                    Delete
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3  border-b border-gray-200 text-amber-700  text-left text-sm uppercase font-normal"
                  >
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Room row data */}
                {/* <RequestTableRow></RequestTableRow> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestTable;
