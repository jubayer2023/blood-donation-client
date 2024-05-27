import { axiosSecure } from "./axiosBaseURL";

// get all blood donation requests only by email
export const getAllRequestsByVolunteer = async () => {
    const { data } = await axiosSecure.get(`/requests-volunteer`);
    console.log("data", data);
    return data;
}

// update donation status
export const updateVolunterDonation = async (id, status) => {
    const { data } = await axiosSecure.put(`/volun-donation-status/${id}`, status);
    // console.log(data);
    return data;
}

