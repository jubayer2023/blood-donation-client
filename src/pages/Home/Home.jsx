import { Helmet } from "react-helmet-async";
import Banners from "../../components/Home/Banners/Banners";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Blood Donation | Home</title>
      </Helmet>
      {/* Banner section  */}
      <Banners></Banners>
    </div>
  );
};

export default Home;
