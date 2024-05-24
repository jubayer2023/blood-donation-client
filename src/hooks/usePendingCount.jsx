import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getPendingCount } from "../api/crud";

const usePendingCount = () => {
  const { loading } = useAuth();
  const { data: count = {}, refetch: refetchCount } = useQuery({
    enabled: !loading,
    queryKey: ["count"],
    queryFn: async () => {
      const data = await getPendingCount();
      return data;
    },
  });
  return [count, refetchCount];
};

export default usePendingCount;
