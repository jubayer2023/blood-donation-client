const DashHeading = ({ title, name }) => {
  return (
    <div className="text-center my-5 w-full md:w-3/4  mx-auto">
      <h3 className="text-2xl font-semibold text-neutral-300  font-serif capitalize pb-5">
        {title} - <span className="text-amber-600 font-extrabold">{name}</span>
      </h3>
      <hr />
    </div>
  );
};

export default DashHeading;
