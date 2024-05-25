import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getAllUsers } from "../api/admin";
import { useSearchParams } from "react-router-dom";

const useAllUsers = (pageInfo) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryStatus = searchParams.get("status");

  const { loading } = useAuth();
  const {
    data: users = [],
    refetch: refetchUsers,
    isLoading,
  } = useQuery({
    queryKey: ["users", queryStatus, pageInfo],
    queryFn: async () => {
      const data = await getAllUsers(pageInfo);
      if (queryStatus === "active") {
        const activeUsers = await data.filter(
          (user) => user.status === queryStatus
        );
        return activeUsers;
      }
      if (queryStatus === "blocked") {
        const blockedUsers = await data.filter(
          (user) => user.status === queryStatus
        );
        return blockedUsers;
      }
      return data;
    },
  });
  return [users, isLoading, refetchUsers];
};

export default useAllUsers;
