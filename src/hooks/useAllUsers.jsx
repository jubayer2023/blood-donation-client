import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getAllUsers } from "../api/admin";

const useAllUsers = () => {
  const { loading } = useAuth();
  const {
    data: users = [],
    refetch: refetchUsers,
    isLoading,
  } = useQuery({
    enabled: !loading,
    queryKey: ["users"],
    queryFn: async () => {
      const data = await getAllUsers();
      return data;
    },
  });
  return [users, isLoading, refetchUsers];
};

export default useAllUsers;
