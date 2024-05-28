import { useQuery } from "@tanstack/react-query";
import { getBlogContent } from "../api/admin";
import { useSearchParams } from "react-router-dom";

const useBlogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");

  const {
    data: blogs = [],
    isLoading,
    refetch: refetchBlogs,
  } = useQuery({
    queryKey: ["blogs", status],
    queryFn: async () => {
      const data = await getBlogContent();
      if (status === "draft") {
        const draftBlogs = await data.filter((blog) => blog?.status === status);

        return draftBlogs;
      } else if (status === "published") {
        const publishedBlogs = await data.filter(
          (blog) => blog?.status === status
        );
        return publishedBlogs;
      } else {
        return data;
      }
    },
  });
  return [blogs, isLoading, refetchBlogs];
};

export default useBlogs;
