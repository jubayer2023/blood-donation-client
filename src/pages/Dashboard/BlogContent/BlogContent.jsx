import { Link, useSearchParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Blogs from "../../../components/Blogs/Blogs";
import useBlogs from "../../../hooks/useBlogs";
import { deleteBlog, updateBlogStatus } from "../../../api/admin";
import toast from "react-hot-toast";
import FilterTab from "../../../components/Dashboard/Donor/FilterTab";
import Loader from "../../../components/Shared/Loader";
const filterOptions = ["draft", "published"];

const BlogContent = () => {
  const { user } = useAuth();
  const [blogs, isLoading, refetchBlogs] = useBlogs();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryStatus = searchParams.get("status");

  // handledelete
  const handleDeleteBlog = async (id) => {
    // console.log(id);
    try {
      await deleteBlog(id);
      toast.success("Blog has been Deleted");
      refetchBlogs();
    } catch (error) {
      console.log(error);
      toast.error("Blog delete error from publish");
    }
  };
  // handlePublish
  const handlePublishBlog = async (id) => {
    // console.log(id);
    try {
      await updateBlogStatus(id, "published");
      toast.success("Blog has been published");
      refetchBlogs();
    } catch (error) {
      console.log(error);
      toast.error("Blog update error from publish");
    }
  };
  // handledelete
  const handleUnpublishBlog = async (id) => {
    // console.log(id);
    try {
      await updateBlogStatus(id, "draft");
      toast.success("Blog has been Unpublished");
      refetchBlogs();
    } catch (error) {
      toast.error("Blog update error from unpublish");
      console.log(error);
    }
  };

  return (
    <div className="px-10">
      <div className="flex justify-between items-center bg-base-100 px-3 py-5 rounded-md">
        <h3 className="font-bold text-xl font-mono capitalize text-red-400">
          Wellcome <span className="text-green-700">{user?.displayName}</span>
        </h3>
        <Link to={"add-blog"}>
          <button className="btn btn-sm text-sm font-serif uppercase font-thin rounded-lg transition ease-out bg-rose-500 text-neutral-200 hover:bg-slate-900 hover:text-amber-700">
            Add Blog
          </button>
        </Link>
      </div>

      {/* filter draft and published */}
      <div className="flex justify-center items-center my-10">
        <div role="" className="flex flex-wrap bg-slate-300">
          {filterOptions.map((status) => (
            <FilterTab
              key={status}
              status={status}
              address={"content-management"}
              selected={queryStatus === status}
            ></FilterTab>
          ))}
        </div>
      </div>
      {/*blogs goes here */}
      <div className="mt-3 flex flex-col gap-5 justify-between">
        {isLoading ? (
          <Loader />
        ) : (
          blogs &&
          blogs.map((blog) => (
            <Blogs
              key={blog?._id}
              blog={blog}
              handleDeleteBlog={handleDeleteBlog}
              handlePublishBlog={handlePublishBlog}
              handleUnpublishBlog={handleUnpublishBlog}
            ></Blogs>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogContent;
