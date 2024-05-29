import toast from "react-hot-toast";
import { updateRole, updateUserStatus } from "../../../api/admin";
import Loader from "../../Shared/Loader";
import UserTableRow from "./UserTableRow";

const UsersTable = ({
  users,
  currentPage,
  itemPerPage,
  isLoading,
  refetchUsers,
}) => {
  // console.log(users);
  const startIndex = (parseInt(currentPage) - 1) * itemPerPage;
  // make admin
  const handleAdmin = async (id) => {
    // console.log(id);
    try {
      await updateRole(id, "admin").then((data) => {
        // console.log(data);
        if (data?.modifiedCount > 0) {
          toast.success("User role updated !");
          refetchUsers();
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Error from backend");
    }
  };
  // make volunteer
  const handleVolunteer = async (id) => {
    try {
      await updateRole(id, "volunteer").then((data) => {
        // console.log(data);
        if (data?.modifiedCount > 0) {
          toast.success("User role updated !");
          refetchUsers();
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Error from backend");
    }
  };
  // make donor repeat
  const handleDonor = async (id) => {
    try {
      await updateRole(id, "donor").then((data) => {
        // console.log(data);
        if (data?.modifiedCount > 0) {
          toast.success("User role updated !");
          refetchUsers();
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Error from backend");
    }
  };
  // block user
  const handleBlock = async (id) => {
    // console.log(id);
    try {
      await updateUserStatus(id, "blocked").then((data) => {
        // console.log(data);
        if (data?.modifiedCount > 0) {
          toast.success("User status updated !");
          refetchUsers();
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Error from backend !!!");
    }
  };

  // unblock user
  const handleUnBlock = async (id) => {
    // console.log(id);
    try {
      await updateUserStatus(id, "active").then((data) => {
        // console.log(data);
        if (data?.modifiedCount > 0) {
          toast.success("User status updated !");
          refetchUsers();
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("Error from backend !!!");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

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
                handleAdmin={handleAdmin}
                handleVolunteer={handleVolunteer}
                handleDonor={handleDonor}
                handleBlock={handleBlock}
                handleUnBlock={handleUnBlock}
              ></UserTableRow>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
