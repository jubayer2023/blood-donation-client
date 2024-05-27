import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Blogs from "../../../components/Blogs/Blogs";
import useBlogs from "../../../hooks/useBlogs";

const BlogContent = () => {
  const { user } = useAuth();
  const [blogs] = useBlogs();
  
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

      {/*blogs goes here */}
      <div className="mt-3 flex flex-col gap-5 justify-between">
        {blogs &&
          blogs.map((blog) => <Blogs key={blog?._id} blog={blog}></Blogs>)}
      </div>
    </div>
  );
};

export default BlogContent;
