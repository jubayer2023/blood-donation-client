import backImage from "../../../assets/banner/parallex_optimized_2500.jpg";
import Heading from "../../Shared/Heading";
import FeatureItem from "./FeatureItem";
import { featureData } from "./feature";

const Featured = () => {
  const feature = true;
  return (
    <div
      className="my-20 bg-fixed"
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        opacity: 1,
      }}
    >
      <div
        className="w-full h-full py-24 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", opacity: 1 }}
      >
        <Heading
          feature={feature}
          title={"What You Should Khnow !"} 
          subtitle={
            "During apheresis, you are hooked up to a machine that collects and separates different parts of your blood. These blood components include red cells, plasma and platelets."
          }
        ></Heading>
        <div className="flex items-center justify-center h-full gap-5 w-full px-5 lg:px-0 lg:w-3/4 mx-auto mt-10 flex-col md:flex-row">
          {featureData.map((item) => (
            <FeatureItem key={item.id} item={item}></FeatureItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
