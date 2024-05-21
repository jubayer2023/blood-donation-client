import MenuItem from "../MenuItem";
import { RiFileList2Fill } from "react-icons/ri";
import { MdCreateNewFolder } from "react-icons/md";
// import { GrUserAdmin } from "react-icons/gr";
const DonorMenu = () => {
  return (
    <>
      <MenuItem
        icon={RiFileList2Fill}
        label="My Requests"
        address="my-requests"
      />
      <MenuItem
        icon={MdCreateNewFolder}
        label="Create Requests"
        address="create-requests"
      />
    </>
  );
};

export default DonorMenu;
