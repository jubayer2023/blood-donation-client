import { useQuery } from "@tanstack/react-query";
import { getAllPendingRequests } from "../api/crud";
import useAuth from "./useAuth";

const usePendingRequests = (info) => {
  // console.log(info);
  const { loading } = useAuth();
  const {
    data: pendingRequests = [],
    refetch: refetchPendingRequests,
    isLoading,
  } = useQuery({
    queryKey: ["pendingRequests", info],
    queryFn: async () => {
      const data = await getAllPendingRequests(info);

      // console.log(data);
      return data;
    },
  });
  return [pendingRequests, isLoading, refetchPendingRequests];
};

export default usePendingRequests;
