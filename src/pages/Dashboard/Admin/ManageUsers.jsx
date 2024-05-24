import { useSearchParams } from "react-router-dom";
import UsersTable from "../../../components/Dashboard/Admin/UsersTable";
import FilterTab from "../../../components/Dashboard/Donor/FilterTab";
import useAllUsers from "../../../hooks/useAllUsers";
import DashHeading from "../DashHeading";
import Loader from "../../../components/Shared/Loader";
const filterStatus = ["active", "blocked"];
const ManageUsers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryStatus = searchParams.get("status");
  const [users, isLoading] = useAllUsers();
  console.log(users);

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="">
      {/* heading */}
      <DashHeading title={"See All Users"}></DashHeading>
      {/* filter options */}
      <div className="flex justify-center items-center mb-10">
        <div role="" className="flex flex-wrap bg-slate-300">
          {filterStatus.map((status) => (
            <FilterTab
              key={status}
              address={"manage-users"}
              status={status}
              selected={queryStatus === status}
            ></FilterTab>
          ))}
        </div>
      </div>
      {/* table */}
      <UsersTable users={users}></UsersTable>
    </div>
  );
};

export default ManageUsers;
