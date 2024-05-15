import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";

const DonationDetails = () => {
  return (
    <Container>
      <Helmet>
        <title>{"title"}</title>
      </Helmet>
      <div className="">
        <div className="flex flex-col gap-6">{/* Header */}</div>
        <div className="">{/* Room Info */}</div>
        {/* Calender */}
      </div>
    </Container>
  );
};

export default DonationDetails;
