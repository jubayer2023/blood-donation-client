import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getMyRequests } from "../api/crud";

const useMyRequsets = () => {
  const { user, loading } = useAuth();
  const {
    data: myRequests = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !loading,
    queryKey: ["myRequests", user?.email],
    queryFn: async () => {
      const requests = await getMyRequests(user?.email);
      return requests;
    },
  });
  return [myRequests, isLoading, refetch];
};

export default useMyRequsets;
