import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SelectComponent from "../../components/Shared/Form/SelectComponent/SelectComponent";
import { bloodOptions } from "../../components/Shared/Form/SelectComponent/SelectOption";
import { useState } from "react";
import useDistricts from "../../hooks/useDistricts";

const SignUp = () => {
  const [bloodSelectOptons, setBlodSelectOptions] = useState(null);
  const [districts] = useDistricts();
  console.log(districts);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" min-h-screen bg-gradient-to-r from-rose-300 to-red-300 flex flex-col items-center justify-center">
      <div className="shadow-xl shadow-rose-700 w-4/5 md:w-3/4 lg:max-w-screen-md my-12  md:mx-auto p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to Blood Donations !</p>
        </div>
        {/* from here */}
        <div className=" w-full font-semibold text-sm ">
          <form
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            {/* first row */}
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="w-full group">
                <label htmlFor="image" className="block mb-2 text-sm">
                  Your Image:
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="bg-gray-200 w-full py-[5px] group-hover:cursor-pointer  rounded-lg px-3"
                />
              </div>
            </div>
            {/* second row */}
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Blood group
                  </label>
                </div>
                {/* blood options */}
                <SelectComponent
                  options={bloodOptions}
                  selectedOption={bloodSelectOptons}
                  setSelectedOption={setBlodSelectOptions}
                ></SelectComponent>
              </div>
            </div>
            {/* third row */}
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm">
                  District
                </label>
                {/* district options */}
                <select {...register} className="w-full bg-gray-200 py-2">
                  {districts.map((district) => (
                    <option key={district.id} value={district.name}>
                      {district.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Upazila
                  </label>
                </div>
                <input
                  type="text"
                  name="upazila"
                  id="upazila"
                  required
                  placeholder="Upazila"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
            </div>
            {/* second row */}
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
              <div className="w-full">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Confirm password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  id="confirmPassword"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-rose-500 w-full rounded-md py-3 text-white"
              >
                Continue
              </button>
            </div>
          </form>
        </div>

        <p className="px-6 text-sm text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
