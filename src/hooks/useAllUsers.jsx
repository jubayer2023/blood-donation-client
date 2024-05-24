import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getAllUsers } from "../api/admin";
import { useSearchParams } from "react-router-dom";

const useAllUsers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryStatus = searchParams.get("status");

  const { loading } = useAuth();
  const {
    data: users = [],
    refetch: refetchUsers,
    isLoading,
  } = useQuery({
    enabled: !loading,
    queryKey: ["users", queryStatus],
    queryFn: async () => {
      const data = await getAllUsers();
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
