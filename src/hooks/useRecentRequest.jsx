import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getRecentThreeRequest } from "../api/crud";

const useRecentRequest = () => {
  const { loading } = useAuth();
  const {
    data: recentRequests = [],
    isLoading,
    refetch: recentRequestsRefetch,
  } = useQuery({
    enabled: !loading,
    queryKey: ["recentRequests"],
    queryFn: async () => {
      const data = await getRecentThreeRequest();
      return data;
    },
  });
  return [recentRequests, isLoading, recentRequestsRefetch];
};

export default useRecentRequest;
