import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useDistricts from "../../hooks/useDistricts";
import useUpazila from "../../hooks/useUpazila";
import { bloodOptions } from "../../components/Shared/Form/SelectOptions/SelectOption";
import { useState } from "react";

const SignUp = () => {
  const [passwordError, setPasswordError] = useState(null);
  const [districts] = useDistricts();
  const [upazila] = useUpazila();
  // sorting
  const sortedDistricts = districts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const sortedUpazila = upazila.sort((a, b) => a.name.localeCompare(b.name));

  // hook from hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data.imageFile[0]);
    if (data?.confirmPassword !== data?.password) {
      return setPasswordError("Password does not matched !");
    }

    console.log(data);

    setPasswordError(null);
  };

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
            onSubmit={handleSubmit(onSubmit)}
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
                  {...register("name")}
                  type="text"
                  name="name"
                  required
                  defaultValue={"Hamid"}
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
                  {...register("image")}
                  type="file"
                  name="image"
                  required
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
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  })}
                  type="email"
                  name="email"
                  defaultValue={"hamid123@gmail.com"}
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
                {errors.email?.type === "pattern" && (
                  <span className="text-red-600 font-semibold text-xs">
                    *Give a valid password !!!
                  </span>
                )}
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Blood group
                  </label>
                </div>
                {/* blood options */}
                <select
                  defaultValue={"O+"}
                  {...register("bloodGroup", { required: true })}
                  className="w-full bg-gray-200 py-2"
                >
                  {bloodOptions.map((bloodGroup) => (
                    <option key={bloodGroup.label} value={bloodGroup.value}>
                      {bloodGroup.label}
                    </option>
                  ))}
                </select>
                {errors.bloodGroup?.type === "required" && (
                  <span className="text-red-600 font-semibold text-xs">
                    *Blood group is required !!!
                  </span>
                )}
              </div>
            </div>
            {/* third row */}
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm">
                  District
                </label>
                {/* district options */}
                <select
                  defaultValue={"Rangpur"}
                  {...register("district", { required: true })}
                  className="w-full bg-gray-200 py-2"
                >
                  {sortedDistricts.map((district) => (
                    <option key={district.id} value={district.name}>
                      {district.name}
                    </option>
                  ))}
                </select>
                {errors.district?.type === "required" && (
                  <span className="text-red-600 font-semibold text-xs">
                    *Select your district !!!
                  </span>
                )}
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Upazila
                  </label>
                </div>
                {/* upazila options */}
                <select
                  defaultValue={"Pirgasa"}
                  {...register("upazila", { required: true })}
                  className="w-full bg-gray-200 py-2"
                >
                  {sortedUpazila.map((eachUpazila) => (
                    <option key={eachUpazila.id} value={eachUpazila.name}>
                      {eachUpazila.name}
                    </option>
                  ))}
                </select>
                {errors.upazila?.type === "required" && (
                  <span className="text-red-600 font-semibold text-xs">
                    *Select your upazila !!!
                  </span>
                )}
              </div>
            </div>
            {/* fourth row */}
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
              <div className="w-full">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  defaultValue={123456}
                  {...register("password", { required: true, minLength: 6 })}
                  type="password"
                  autoComplete="new-password"
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 font-semibold text-xs">
                    *Password is required !!!
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600 font-semibold text-xs">
                    *Give at least 6 characters!!!
                  </span>
                )}
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Confirm password
                  </label>
                </div>
                <input
                  {...register("confirmPassword", { required: true })}
                  type="password"
                  autoComplete="new-password"
                  id="confirmPassword"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />

                {passwordError && (
                  <span className="text-red-600 font-semibold text-xs">
                    *{passwordError}
                  </span>
                )}
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
