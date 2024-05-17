import contactImg from "../../../assets/banner/contact.jpg";
import { TbDialpadFilled } from "react-icons/tb";
import Heading from "../../Shared/Heading";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="">
      <Heading
        title={"Contact Us"}
        subtitle={"What are you thinking ? Join us now !!!"}
        center={true}
      ></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-2 lg:p-5">
        <div className="group flex-1 w-full relative">
          <img
            src={contactImg}
            className="h-full w-full group-hover:scale-90 cursor-pointer transition rounded-lg"
            alt="Contactimage"
            // style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", opacity: "1" }}
          />
          <div className="absolute top-0 left-0 w-full h-full group-hover:scale-90 cursor-pointer transition bg-black opacity-20 hover:opacity-70 ease-in-out rounded-lg">
            <div className="flex justify-center items-center w-full h-full gap-5 group-hover:text-white font-bold text-6xl">
              {/* <h3> Contact Us</h3> */}
              <p className="hidden group-hover:text-rose-700 group-hover:animate-bounce group-hover:block">
                <TbDialpadFilled></TbDialpadFilled>
              </p>
            </div>
          </div>
        </div>
        {/* right div */}
        <div className="bg-neutral-50 shadow-rose-400 p-5 shadow-lg rounded-lg flex-1 w-full">
          <form
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Last Name
                  </label>
                </div>
                <input
                  type="text"
                  name="name"
                  id="name2"
                  placeholder="Last name"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Say Somthing !!!!
                  </label>
                </div>
                <textarea
                  type="text"
                  name="name"
                  id="name2"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div className="">
              {/* icons */}
              <div className="flex items-center space-x-5 my-3">
                <span className="text-red-600 cursor-pointer transition ease-out hover:animate-spin">
                  <FaFacebook />
                </span>

                <span className="text-red-600 cursor-pointer transition ease-out hover:animate-spin">
                  <FaInstagram />
                </span>
                <span className="text-red-600 cursor-pointer transition ease-out hover:animate-spin">
                  <FaYoutube />
                </span>
                <Link className="text-red-600 text-sm font-semibold cursor-pointer underline">
                  www.blodDonation.com
                </Link>
              </div>
              <Link
                type="submit"
                className="bg-rose-300 w-full rounded-md py-3 text-white text-center"
              >
                Continue
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
