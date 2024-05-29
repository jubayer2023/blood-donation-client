import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getSingleUser } from "../api/auth";

const useSingleUser = () => {
  const { user, loading } = useAuth();
  const {
    data: userDetail = {},
    isLoading,
    refetch: refetchSingleUser,
  } = useQuery({
    enabled: !loading,
    queryKey: ["userDetail"],
    queryFn: async () => {
      const data = getSingleUser(user?.email);
      return data;
    },
  });
  return [userDetail, isLoading, refetchSingleUser];
};

export default useSingleUser;
