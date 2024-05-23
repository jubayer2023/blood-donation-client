import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosSecure } from "../api/axiosBaseURL";

const useRole = () => {
  const { user } = useAuth();
  const { data: role = "" } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/role/${user?.email}`);
      return data;
    },
  });
  return [role];
};

export default useRole;
