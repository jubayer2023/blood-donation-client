import { FaClipboardList } from "react-icons/fa6";
import MenuItem from "../MenuItem";
import { SiGoogletagmanager } from "react-icons/si";
const VolunteerMenu = () => {
  return (
    <>
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

export default VolunteerMenu;
