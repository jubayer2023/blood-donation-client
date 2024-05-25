import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getUsersCount } from "../api/admin";

const useUsersCount = () => {
  const { loading } = useAuth();
  const { data: count = {}, refetch: refetchUsesCount } = useQuery({
    enabled: !loading,
    queryKey: ["count"],
    queryFn: async () => {
      const data = await getUsersCount();
      return data;
    },
  });
  return [count, refetchUsesCount];
};

export default useUsersCount;
