import { FaUserCog } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { SiGoogletagmanager } from "react-icons/si";

import MenuItem from "../MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem
        icon={FaClipboardList}
        label="All Requests"
        address="all-requests"
      />
      <MenuItem
        icon={SiGoogletagmanager}
        label="Content Manage"
        address="content-management"
      />
    </>
  );
};

export default AdminMenu;
