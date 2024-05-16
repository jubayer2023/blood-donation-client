import { Helmet } from "react-helmet-async";
import Banners from "../../components/Home/Banners/Banners";
import Container from "../../components/Shared/Container";
import Featured from "../../components/Home/Featured/Featured";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Blood Donation | Home</title>
      </Helmet>
      {/* Banner section  */}
      <Banners></Banners>
      {/* Featured section */}
      <Container>
        <Featured></Featured>
      </Container>
    </div>
  );
};

export default Home;
