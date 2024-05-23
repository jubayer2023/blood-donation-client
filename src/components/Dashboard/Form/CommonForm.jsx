import { IoSyncCircleOutline } from "react-icons/io5";
import SelectDate from "../../Shared/DateAndTime/SelectDate";
import SelecetTime from "../../Shared/DateAndTime/SelectTime";
import { bloodOptions } from "../../Shared/Form/SelectOptions/SelectOption";

const CommonForm = ({
  handleSubmit,
  onSubmit,
  user,
  register,
  errors,
  sortedDistricts,
  sortedUpazila,
  handleDateChange,
  handleTimeChange,
  loading,
  previousData,
}) => {
  return (
    <>
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
              Requester name
            </label>
            <input
              //   {...register("requester_name")}
              type="text"
              name="name"
              required
              disabled={true}
              defaultValue={user?.displayName}
              placeholder="Enter Your Name Here"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              data-temp-mail-org="0"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block mb-2 text-sm">
              Requester email address
            </label>
            <input
              //   {...register("requester_email", {
              //     required: true,
              //     pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
              //   })}
              type="email"
              name="email"
              defaultValue={user?.email}
              required
              disabled={true}
              placeholder="Enter Your Email Here"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              data-temp-mail-org="0"
            />
          </div>
        </div>
        {/* second row */}
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
          <div className="w-full">
            <label htmlFor="recipientName" className="block mb-2 text-sm">
              Recipient name
            </label>
            <input
              {...register("recipient_name", {
                required: true,
              })}
              type="text"
              required
              defaultValue={previousData?.recipient_name}
              placeholder="Enter recipient name  here"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              data-temp-mail-org="0"
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <label htmlFor="recipientBloodGroup" className="text-sm mb-2">
                Recipient blood group
              </label>
            </div>
            {/* blood options */}
            <select
              defaultValue={previousData?.blood_group}
              {...register("blood_group", { required: true })}
              className="w-full bg-gray-200 py-2 px-2"
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
            <label htmlFor="district" className="block mb-2 text-sm">
              Recipient District
            </label>
            {/* district options */}
            <select
              {...register("recipient_district", { required: true })}
              className="w-full bg-gray-200 py-2 px-2"
              defaultValue={previousData?.recipient_district}
            >
              {sortedDistricts.map((district) => (
                <option key={district.id} value={district.name}>
                  {district.name}
                </option>
              ))}
            </select>
            {errors.recipient_district?.type === "required" && (
              <span className="text-red-600 font-semibold text-xs">
                *Select recipient district please!!!
              </span>
            )}
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <label htmlFor="upazila" className="text-sm mb-2">
                Recipient Upazila
              </label>
            </div>
            {/* upazila options */}
            <select
              {...register("recipient_upazila", { required: true })}
              className="w-full bg-gray-200 py-2 px-2"
              defaultValue={previousData?.recipient_upazila}
            >
              {sortedUpazila.map((eachUpazila) => (
                <option key={eachUpazila.id} value={eachUpazila.name}>
                  {eachUpazila.name}
                </option>
              ))}
            </select>
            {errors.recipient_district?.type === "required" && (
              <span className="text-red-600 font-semibold text-xs">
                *Select recipient upazila please !!!
              </span>
            )}
          </div>
        </div>
        {/* fourth row */}
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
          <div className="w-full">
            <div className="flex justify-between">
              <label htmlFor="hospital" className="text-sm mb-2">
                Hospital Name
              </label>
            </div>
            <input
              {...register("hospital_name", {
                required: true,
              })}
              type="text"
              defaultValue={previousData?.hospital_name}
              placeholder="Enter hospital name here"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
            />
            {errors.hospital_name?.type === "required" && (
              <span className="text-red-600 font-semibold text-xs">
                *Hospital name is required !!!
              </span>
            )}
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <label htmlFor="fullAddress" className="text-sm mb-2">
                Full address line
              </label>
            </div>
            <input
              {...register("full_address_line", {
                required: true,
              })}
              type="text"
              defaultValue={previousData?.full_address_line}
              placeholder="Enter hospital name here"
              className="w-full px-3 py-2 border border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
            />
            {errors.full_address_line?.type === "required" && (
              <span className="text-red-600 font-semibold text-xs">
                *Full address is required !!!
              </span>
            )}
          </div>
        </div>
        {/* Fifth row */}
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-5">
          <div className="w-full">
            <div>
              <div className="flex justify-between">
                <label htmlFor="date" className="text-sm mb-2">
                  Donation date
                </label>
              </div>
              {/* DATE SELECTOR */}
              <SelectDate
                previousData={previousData}
                handleDateChange={handleDateChange}
              />
            </div>
            <div className="flex justify-between mt-2">
              <label htmlFor="time" className="text-sm mb-2">
                Donation time
              </label>
            </div>
            {/* TIME SELECTOR */}
            <SelecetTime
              previousData={previousData}
              handleTimeChange={handleTimeChange}
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <label htmlFor="message" className="text-sm mb-2">
                Request message
              </label>
            </div>
            <textarea
              {...register("request_message", {
                required: true,
                minLength: 50,
              })}
              type="text"
              defaultValue={previousData?.request_message}
              placeholder="Say somthing about your need !"
              className="w-full px-3 py-2 textarea-bordered h-28 focus:outline-rose-500 bg-gray-200 text-gray-900"
            />
            {errors.request_message?.type === "required" && (
              <span className="text-red-600 font-semibold text-xs">
                *Message required !!!
              </span>
            )}
            {errors.request_message?.type === "minLength" && (
              <span className="text-red-600 font-semibold text-xs">
                *Give at least 50 characters!!!
              </span>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-rose-500 w-full py-3 font-semibold text-white flex justify-center items-center "
          >
            {loading ? (
              <IoSyncCircleOutline className="animate-spin text-3xl text-white" />
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default CommonForm;
