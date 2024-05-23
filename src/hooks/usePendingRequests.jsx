import { useQuery } from "@tanstack/react-query";
import { getAllRequests } from "../api/crud";

const usePendingRequests = () => {
  const {
    data: pendingRequests = [],
    refetch: refetchPendingRequests,
    isLoading,
  } = useQuery({
    queryKey: ["pendingRequests"],
    queryFn: async () => {
      const data = await getAllRequests();
      const pendings = data.filter(
        (request) => request.donation_status === "pending"
      );
      return pendings;
    },
  });
  return [pendingRequests, isLoading, refetchPendingRequests];
};

export default usePendingRequests;
