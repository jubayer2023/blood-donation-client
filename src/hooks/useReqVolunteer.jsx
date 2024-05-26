import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import useAuth from "./useAuth";
import { getAllRequestsByVolunteer } from "../api/volunteer";

const useReqVolunteer = () => {
  const { loading } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");
  // console.log(status);
  const {
    data: allRequest = [],
    isLoading,
    refetch: refetchRequests,
  } = useQuery({
    enabled: !loading,
    queryKey: ["allRequesst", status],
    queryFn: async () => {
      const requests = await getAllRequestsByVolunteer();
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
  return [allRequest, isLoading, refetchRequests];
};

export default useReqVolunteer;
