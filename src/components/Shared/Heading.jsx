/* eslint-disable react/prop-types */
const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className={`text-2xl font-bold ${center && "text-white uppercase leading-normal text-4xl"}`}>
        {title}
      </div>
      <div
        className={`font-light text-neutral-500 mt-2 ${
          center &&
          "w-3/4 text-neutral-50 font-semibold text-sm md:max-w-screen-md mx-auto"
        }`}
      >
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
