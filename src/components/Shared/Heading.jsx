/* eslint-disable react/prop-types */
const Heading = ({ title, subtitle, center, feature }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div
        className={`text-3xl font-bold uppercase ${
          feature && "text-white text-center uppercase leading-normal text-3xl"
        }`}
      >
        {title}
      </div>
      <div
        className={`font-light text-neutral-500  mt-2 ${
          feature &&
          "w-3/4 text-white text-center font-semibold text-sm md:max-w-screen-md mx-auto"
        }`}
      >
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
