import { axiosSecure } from "./axiosBaseURL";

// get all blood donation requests only by email
export const getAllRequestsByVolunteer = async () => {
    const { data } = await axiosSecure.get(`/requests-volunteer`);
    return data;
}