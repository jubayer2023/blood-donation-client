import { useForm } from "react-hook-form";
import { IoSyncCircleOutline } from "react-icons/io5";
import { bloodOptions } from "../../components/Shared/Form/SelectOptions/SelectOption";
import useDistricts from "../../hooks/useDistricts";
import useUpazila from "../../hooks/useUpazila";
import { useState } from "react";
import { getSearchDonors } from "../../api/crud";
import Container from "../../components/Shared/Container";
import SearchCard from "./SearchCard";
import useDonors from "../../hooks/useDonors";
import { Helmet } from "react-helmet-async";

const SearchPage = () => {
  const [districts] = useDistricts();
  const [upazila] = useUpazila();
  const [loading, setLoading] = useState(false);
  const [donors, setDonors] = useState([]);
  const [latestDonors] = useDonors();

  // sorting
  const sortedDistricts = districts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const sortedUpazila = upazila.sort((a, b) => a.name.localeCompare(b.name));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    // create user
    try {
      const searchData = { ...data };
      //   console.log(searchData);

      const response = await getSearchDonors(searchData);
      setDonors(response);
      // console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Blood Donations | search-donors</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <div className="shadow-xlmy-12  md:mx-auto p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-2xl font-bold font-serif ">
              Wellcome to blood donations
            </h1>
            <p className="text-sm text-gray-400">Search your type here ...</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
              <div className="w-full">
                <div className="flex justify-between">
                  <label
                    htmlFor="recipientBloodGroup"
                    className="block text-sm mb-2"
                  >
                    Blood group
                  </label>
                </div>
                {/* blood options */}
                <select
                  {...register("blood_group", { required: true })}
                  className="w-full bg-gray-200 py-2 px-2"
                >
                  {bloodOptions.map((bloodGroup) => (
                    <option key={bloodGroup.label} value={bloodGroup.value}>
                      {bloodGroup.label}
                    </option>
                  ))}
                </select>
                {errors.blood_group?.type === "required" && (
                  <span className="text-red-600 font-semibold text-xs">
                    *Blood group is required !!!
                  </span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="district" className="block mb-2 text-sm">
                  District
                </label>
                {/* district options */}
                <select
                  {...register("district", { required: true })}
                  className="w-full bg-gray-200 py-2 px-2"
                >
                  {sortedDistricts.map((district) => (
                    <option key={district.id} value={district.name}>
                      {district.name}
                    </option>
                  ))}
                </select>
                {errors.district?.type === "required" && (
                  <span className="text-red-600 font-semibold text-xs">
                    *Select district please!!!
                  </span>
                )}
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <label htmlFor="upazila" className="text-sm mb-2">
                    Upazila
                  </label>
                </div>
                {/* upazila options */}
                <select
                  {...register("upazila", { required: true })}
                  className="w-full bg-gray-200 py-2 px-2"
                >
                  {sortedUpazila.map((eachUpazila) => (
                    <option key={eachUpazila.id} value={eachUpazila.name}>
                      {eachUpazila.name}
                    </option>
                  ))}
                </select>
                {errors.district?.type === "required" && (
                  <span className="text-red-600 font-semibold text-xs">
                    *Select upazila please !!!
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-rose-500 w-full rounded-md py-3 font-semibold text-white flex justify-center items-center"
              >
                {loading ? (
                  <IoSyncCircleOutline className="animate-spin text-white text-3xl" />
                ) : (
                  "Search"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Container>
        <div className="flex flex-wrap justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5   mt-10 ">
            {donors.length <= 0 &&
              latestDonors.map((donor) => (
                <SearchCard key={donor?._id} donor={donor} />
              ))}
            {donors &&
              donors.map((donor) => (
                <SearchCard key={donor?._id} donor={donor} />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchPage;
