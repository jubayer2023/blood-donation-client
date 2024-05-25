import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosSecure } from "../api/axiosBaseURL";

const useRole = () => {
  const { user, loading } = useAuth();
  const { data: role = "" } = useQuery({
    enabled: !loading,
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/role/${user?.email}`);
      return data;
    },
  });
  return [role];
};

export default useRole;
