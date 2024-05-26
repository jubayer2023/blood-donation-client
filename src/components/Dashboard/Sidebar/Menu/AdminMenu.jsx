import { FaUserCog } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

import MenuItem from "../MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem icon={FaClipboardList} label="All Requests" address="all-requests" />
      <MenuItem icon={FaClipboardList} label="All Requests" address="all-requests" />
    </>
  );
};

export default AdminMenu;
