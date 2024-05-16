import { Helmet } from "react-helmet-async";
import Banners from "../../components/Home/Banners/Banners";
import Container from "../../components/Shared/Container";
import Featured from "../../components/Home/Featured/Featured";
import Contact from "../../components/Home/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Blood Donation | Home</title>
      </Helmet>
      {/* Banner section  */}
      <Banners></Banners>
      <Container>
        {/* Featured section */}
        <Featured></Featured>
        {/* contact section */}
        <Contact></Contact>
      </Container>
    </div>
  );
};

export default Home;
