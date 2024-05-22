import useAuth from "../../../hooks/useAuth";
import DashHeading from "../DashHeading";

const DonorHome = () => {
  const { user } = useAuth();
  return (
    <div className="">
      <DashHeading
        title={`Wellcome to donor home`}
        name={user?.displayName}
        hifen={"-"}
      />
      {/* <p className="text-center text-sm font-sans font-semibold text-gray-300">
        Your three recent donation requests !
      </p> */}
      <div className="bg-neutral-50 p-5"></div>
    </div>
  );
};

export default DonorHome;
