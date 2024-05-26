import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import useAuth from "./useAuth";
import { getAllDonationRequests } from "../api/admin";

const useAllRequests = () => {
  const { loading } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");
  // console.log(status);
  const {
    data: allRequest = [],
    isLoading,
    refetch: refetchAllRequests,
  } = useQuery({
    enabled: !loading,
    queryKey: ["allRequesst", status],
    queryFn: async () => {
      const requests = await getAllDonationRequests();
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
  return [allRequest, isLoading, refetchAllRequests];
};

export default useAllRequests;
