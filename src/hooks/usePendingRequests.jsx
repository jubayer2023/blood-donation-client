import { useQuery } from "@tanstack/react-query";
import { getAllPendingRequests } from "../api/crud";

const usePendingRequests = () => {
  const { data: pendingRequests = [], refetch , isLoading} = useQuery({
    queryKey: ["pendingRequests"],
    queryFn: async () => {
      const data = await getAllPendingRequests();
      return data;
    },
  });
  return [pendingRequests, isLoading, refetch];
};

export default usePendingRequests;
