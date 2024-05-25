import UserTableRow from "./UserTableRow";

const UsersTable = ({ users, currentPage, itemPerPage }) => {
  const startIndex = (parseInt(currentPage) - 1) * itemPerPage;

  return (
    <div className="overflow-x-auto">
      <table className="table bg-slate-400 ">
        {/* head */}
        <thead>
          <tr className="bg-slate-950 text-amber-700">
            <th className="border-[1px] border-neutral-300 text-center">
              <label className="text-lg">#</label>
            </th>
            <th className="border-[1px] border-neutral-300 text-center">
              Photo
            </th>
            <th className="border-[1px] border-neutral-300 text-center">
              User
            </th>
            <th className="border-[1px] border-neutral-300 text-center ">
              Status
            </th>
            <th className="border-[1px] border-neutral-300 text-center">
              Role
            </th>
            <th className="border-[1px] border-neutral-300 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {users &&
            users.map((person, index) => (
              <UserTableRow
                key={person?._id}
                person={person}
                index={startIndex + index}
              ></UserTableRow>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
