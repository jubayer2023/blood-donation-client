import "./Blog.css";

const Blogs = ({ blog }) => {
  return (
    <div className="flex flex-col w-full px-5 bg-slate-200 rounded-md">
      <h3 className="text-xl md:text-3xl font-bold text-black mt-4 mb-6 font-serif">
        {blog?.title}
      </h3>
      <div
        className="thumnaliBox cursor-pointer w-full min-h-[250px] md:min-h-[350px] lg:min-h-[400px] relative object-cover rounded-md  "
        style={{
          backgroundImage: `url(${blog?.photo_url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay rounded-md"></div>
      </div>
      <div
        className="py-5 "
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      ></div>
    </div>
  );
};

export default Blogs;
