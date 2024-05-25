const SearchCard = ({ donor }) => {
  // console.log(donor);
  return (
    <div className=" cursor-pointer group">
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <div className="aspect-square w-1/2 relative overflow-hidden  rounded-xl">
          <img
            className="object-cover h-full w-full group-hover:scale-110  transition"
            src={donor?.photo_url}
            alt="Donor"
          />
        </div>
        <div className="w-1/2 p-2 ">
          <div className="flex justify-between items-center">
            <h3 className="text-left font-semibold font-serif">
              {donor?.name}
            </h3>
            <p className="text-sm font-mono">{donor?.blood_group}</p>
          </div>
          <div>
            <p className="flex justify-between items-center text-sm font-thin ">
              <span>{donor?.district}</span>
              <span>{donor?.upazila}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
