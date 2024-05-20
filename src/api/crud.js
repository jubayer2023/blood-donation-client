import { axiosPublic, axiosSecure } from "./axiosBaseURL";
// get all pending requests
export const getAllRequests = async () => {
    const { data } = await axiosPublic.get('/requests');
    return data;
};

// get request details
export const getRequestDetail = async (id) => {
    const { data } = await axiosSecure.get(`/request-details/${id}`);
    return data;
}
