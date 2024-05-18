import { Typography } from "@material-tailwind/react";
import Container from "../Container";
import siteLogo from "../../../assets/images/blood-logo.jpg";

const Footer = () => {
  return (
    <div className="bg-slate-500 mt-20">
      <Container>
        <footer className="w-full 800 p-8">
          <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
            <div className="flex items-center justify-center gap-2 ">
              <img
                src={siteLogo}
                alt="logo"
                className="w-16 h-16  rounded-full"
              />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Blood Donations
              </h3>
            </div>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 text-white ">
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="font-normal transition-colors hover:text-red-800 focus:text-amber-500"
                >
                  About Us
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="font-normal transition-colors hover:text-red-800 focus:text-amber-500"
                >
                  License
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="font-normal transition-colors hover:text-red-800 focus:text-amber-500"
                >
                  Contribute
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="font-normal transition-colors hover:text-red-800 focus:text-amber-500"
                >
                  Contact Us
                </Typography>
              </li>
            </ul>
          </div>
          <hr className="my-8 border-blue-gray-50" />
          <Typography color="blue-gray" className="text-center font-normal text-white">
            &copy; 2024 Md. Jubayer Sarker. All Rights Reserved!
          </Typography>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
