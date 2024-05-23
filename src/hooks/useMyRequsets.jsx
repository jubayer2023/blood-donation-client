import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getMyRequests } from "../api/crud";
import { useSearchParams } from "react-router-dom";

const useMyRequsets = () => {
  const { user, loading } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");
  // console.log(status);
  const {
    data: myRequests = [],
    isLoading,
    refetch: refetchMyRequests,
  } = useQuery({
    enabled: !loading,
    queryKey: ["myRequests", user?.email, status],
    queryFn: async () => {
      const requests = await getMyRequests(user?.email);
      if (status === "pending") {
        const pendings = await requests.filter(
          (req) => req.donation_status === status
        );
        return pendings;
      } else if (status === "inprogress") {
        const inprogress = await requests.filter(
          (req) => req.donation_status === status
        );
        return inprogress;
      } else if (status === "done") {
        const done = await requests.filter(
          (req) => req.donation_status === status
        );
        return done;
      } else if (status === "cancelled") {
        const cancelled = await requests.filter(
          (req) => req.donation_status === status
        );
        return cancelled;
      } else {
        // at the end
        return requests;
      }
    },
  });
  return [myRequests, isLoading, refetchMyRequests];
};

export default useMyRequsets;
