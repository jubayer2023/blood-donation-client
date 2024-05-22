import { axiosPublic, axiosSecure } from "./axiosBaseURL";
// get all pending requests
export const getAllRequests = async () => {
    const { data } = await axiosPublic.get('/requests');
    return data;
};

// get request details
export const getSingleRequest = async (id) => {
    const { data } = await axiosSecure.get(`/request-details/${id}`);
    return data;
}

// get my requests only by email
export const getMyRequests = async (email) => {
    const { data } = await axiosSecure.get(`/requests/${email}`);
    return data;
}

export const saveReuestsToDB = async (requestData) => {
    const { data } = await axiosSecure.post('/requests', requestData);
    // console.log(data);
    return data;
}
