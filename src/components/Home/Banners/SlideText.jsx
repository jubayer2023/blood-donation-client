const SlideText = ({ banner }) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full rounded-md"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          opacity: "1",
        }}
      >
        <div className=" flex justify-center items-center h-full ">
          <div className="w-3/4 mx-auto space-y-10 text-white">
            <div className="text-center space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold">{banner.title}</h3>
              <p className="text-sm w-3/4 mx-auto ">{banner.description}</p>
            </div>
            <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
              <button className="btn btn-sm md:btn-md btn-outline text-white ">
                {banner.btn_search}
              </button>
              <button className="btn btn-sm md:btn-md btn-outline text-white bg-rose-700">
                {banner.btn_join}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideText;
