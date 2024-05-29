import { useLoaderData, useNavigate } from "react-router-dom";
import { bloodOptions } from "../../../components/Shared/Form/SelectOptions/SelectOption";
import { useState } from "react";
import useDistricts from "../../../hooks/useDistricts";
import useUpazila from "../../../hooks/useUpazila";
import { imgUploadApi, updateUserData } from "../../../api/auth";
import toast from "react-hot-toast";
import { IoSyncCircleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import useSingleUser from "../../../hooks/useSingleUser";

const UpdateProfile = () => {
  const preData = useLoaderData();
  const [, , refetchSingleUser] = useSingleUser();
  // console.log(preData);

  const [loading, setLoading] = useState(false);
  const [districts] = useDistricts();
  const [upazila] = useUpazila();
  const navigate = useNavigate();

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
  const onSubmit = async (data) => {
    setLoading(true);
    // console.log(data.image[0]);

    try {
      // first post the image for creat live link
      const imageLiveData = await imgUploadApi(data?.image[0]);
      const image_live_link = imageLiveData.data.display_url;
      // console.log(image_live_link);

      // 3. save to data base your user info
      const userInfo = {
        name: data?.name,
        photo_url: image_live_link,
        blood_group: data?.bloodGroup,
        district: data?.district,
        upazila: data?.upazila,
      };

      await updateUserData(preData?._id, userInfo);
      toast.success("User updated successfully");
      // setLoading state as false
      setLoading(false);
      navigate("/dashboard/profile");
      refetchSingleUser();
    } catch (error) {
      console.log("ERROR FROM UpdateProfile : ", error);
      toast.error("ERROR FROM UpdateProfile");
      setLoading(false);
    }
  };
  return (
    <div className=" min-h-screen bg-gradient-to-r from-rose-300 to-red-300 flex flex-col items-center justify-center">
      <div className="shadow-xl shadow-rose-700 w-4/5 md:w-3/4 lg:max-w-screen-md my-12  md:mx-auto p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Update Your Profile</h1>
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
                  defaultValue={preData?.name}
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
                    pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  })}
                  type="email"
                  name="email"
                  defaultValue={preData?.email}
                  disabled={true}
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
                <select
                  defaultValue={preData?.blood_group}
                  {...register("bloodGroup", { required: true })}
                  className="w-full bg-gray-200 py-2 rounded-md"
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
                  defaultValue={preData?.district}
                  {...register("district", { required: true })}
                  className="w-full bg-gray-200 py-2 rounded-md"
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
                  defaultValue={preData?.upazila}
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

            <div>
              <button
                type="submit"
                className="bg-rose-500 w-full rounded-md py-3 font-semibold text-white flex justify-center items-center "
              >
                {loading ? (
                  <IoSyncCircleOutline className="animate-spin text-3xl text-white" />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
