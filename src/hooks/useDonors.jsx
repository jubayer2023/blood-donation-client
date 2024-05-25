import { useQuery } from "@tanstack/react-query";
import { getThreeDonors } from "../api/crud";

const useDonors = () => {
  const { data: latestDonors = [], refetch: refetchLatestDonors } = useQuery({
    queryKey: ["latestDonors"],
    queryFn: async () => {
      const data = await getThreeDonors();
      return data;
    },
  });
  return [latestDonors, refetchLatestDonors];
};

export default useDonors;
