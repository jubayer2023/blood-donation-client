import { useQuery } from "@tanstack/react-query";
import { getAllRequests } from "../api/crud";

const usePendingRequests = () => {
  const {
    data: pendingRequests = [],
    refetch,
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
  return [pendingRequests, isLoading, refetch];
};

export default usePendingRequests;
