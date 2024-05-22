const DashHeading = ({ title, name, hifen, subtitle }) => {
  return (
    <div className="text-center my-5 w-full md:w-3/4  mx-auto text-2xl font-semibold text-neutral-300  font-serif capitalize">
      <h3 className=" pb-5">
        {title} {hifen}{" "}
        <span className="text-amber-600 font-extrabold">{name}</span>
      </h3>
      <hr />
      <p className="text-sm font-normal py-4 ">{subtitle}</p>
    </div>
  );
};

export default DashHeading;
