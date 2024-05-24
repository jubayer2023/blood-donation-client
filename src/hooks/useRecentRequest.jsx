import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getRecentThreeRequest } from "../api/crud";

const useRecentRequest = () => {
  const { user, loading } = useAuth();
  const {
    data: recentRequests = [],
    isLoading,
    refetch: recentRequestsRefetch,
  } = useQuery({
    enabled: !loading,
    queryKey: ["recentRequests", user?.email],
    queryFn: async () => {
      const data = await getRecentThreeRequest(user?.email);
      return data;
    },
  });
  return [recentRequests, isLoading, recentRequestsRefetch];
};

export default useRecentRequest;
