import { useQuery } from "@tanstack/react-query";
import { getBlogContent } from "../api/admin";

const useBlogs = () => {
  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const data = await getBlogContent();
      return data;
    },
  });
  return [blogs];
};

export default useBlogs;
