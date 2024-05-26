import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoSyncCircleOutline } from "react-icons/io5";
import DOMPurify from "dompurify";
import Content from "./Content";
import { imgUploadApi } from "../../../api/auth";
import { saveBlogContent } from "../../../api/admin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [loading, setLoading] = useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const image_file = data?.image[0];
    // console.log(image_file);
    // create user
    try {
      const sanitizedContent = DOMPurify.sanitize(content);
      const image_response = await imgUploadApi(image_file);
      const photo_url = image_response.data?.display_url;
      //  console.log(photo_url);

      const blog = {
        title: data?.title,
        photo_url,
        content: sanitizedContent,
      };
      // console.log(blog);
      const resBlog = await saveBlogContent(blog);
      if (resBlog?.insertedId) {
        toast.success("Blog has been saved !!!");
        navigate("/dashboard/content-management");
      }
      console.log(resBlog);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Error from server");
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-5  md:px-20 mx-auto ">
      <div className="shadow-xlmy-12  md:mx-auto p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-2xl font-bold font-serif text-rose-600 capitalize">
            Create a blog & publish !!!
          </h1>
          <hr className="w-3/5 mx-auto h-[2px] bg-gray-400" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="flex flex-col items-center gap-0 md:gap-5">
            <div className="w-full">
              <label htmlFor="title" className="block mb-2 text-sm">
                Title
              </label>
              <input
                {...register("title", { minLength: 40 })}
                type="text"
                required
                placeholder="Enter Title Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.title?.type === "minLength" && (
                <span className="text-xs text-red-600 font-bold">
                  Give at least 40 characters
                </span>
              )}
            </div>
            <div className="w-full group">
              <label htmlFor="image" className="block mb-2 text-sm">
                Thumbnail Image
              </label>
              <input
                {...register("image")}
                type="file"
                required
                accept="image/*"
                className="bg-gray-200 w-full py-[5px] group-hover:cursor-pointer  rounded-lg px-3"
              />
            </div>

            <div className="w-full group">
              <label htmlFor="content" className="block mb-2 text-sm">
                Content
              </label>

              <Content
                editor={editor}
                setContent={setContent}
                content={content}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 font-semibold text-white flex justify-center items-center"
            >
              {loading ? (
                <IoSyncCircleOutline className="animate-spin text-white text-3xl" />
              ) : (
                "Create Blog"
              )}
            </button>
          </div>
        </form>
      </div>
      <p className="text-amber-500 text-lg font-semibold text-start mt-3">
        See Content Demo :
      </p>
      <div
        className="h-full w-full bg-neutral-200 p-5  rounded-md mt-2"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default AddBlog;
