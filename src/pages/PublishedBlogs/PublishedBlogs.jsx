import { useQuery } from "@tanstack/react-query";
import { getPulishedBlogs } from "../../api/crud";
import Blog from "./Blog";
import Container from "../../components/Shared/Container";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";

const PublishedBlogs = () => {
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const data = await getPulishedBlogs();
      return data;
    },
  });
  //   console.log(blogs);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <Helmet>
        <title>Blood Donations | Blogs</title>
      </Helmet>
      <div className="px-16 mt-3 flex flex-col gap-10 justify-between">
        {blogs.map((blog) => (
          <Blog key={blog?._id} blog={blog} />
        ))}
      </div>
    </Container>
  );
};

export default PublishedBlogs;
