import { useSearchParams } from "react-router-dom";
import UsersTable from "../../../components/Dashboard/Admin/UsersTable";
import FilterTab from "../../../components/Dashboard/Donor/FilterTab";
import useAllUsers from "../../../hooks/useAllUsers";
import DashHeading from "../DashHeading";
import useUsersCount from "../../../hooks/useUsersCount";
import { useState } from "react";
import Pagination from "../../DonationRequests/Pagination";
import { Helmet } from "react-helmet-async";

const filterStatus = ["active", "blocked"];

const ManageUsers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryStatus = searchParams.get("status");
  const [count] = useUsersCount();
  // console.log(count);
  const totalItems = count?.count;

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const [users, isLoading, refetchUsers] = useAllUsers({
    size: itemsPerPage,
    currentPage: currentPage,
  });
  // console.log(users);

  const pageNumber = Math.ceil(totalItems / itemsPerPage);

  const pageArray = Array.from({ length: pageNumber }, (_, i) => i + 1);
  // console.log(pageArray);

  const handlePreviousBtn = (currentPage) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextBtn = (currentPage) => {
    if (currentPage < pageNumber) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="">
      <Helmet>
        <title> Dashborad | manage-users</title>
      </Helmet>
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
      <UsersTable
        users={users}
        currentPage={currentPage}
        itemPerPage={itemsPerPage}
        isLoading={isLoading}
        refetchUsers={refetchUsers}
      ></UsersTable>
      {/*pagination */}
      <Pagination
        userPage={true}
        pageArray={pageArray}
        handleNextBtn={handleNextBtn}
        handlePreviousBtn={handlePreviousBtn}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Pagination>
    </div>
  );
};

export default ManageUsers;
