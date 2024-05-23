import { axiosPublic, axiosSecure } from "./axiosBaseURL";
// get all pending requests
export const getAllRequests = async () => {
    const { data } = await axiosPublic.get('/requests');
    return data;
};

// get recent three requests
export const getRecentThreeRequest = async () => {
    const { data } = await axiosSecure.get('/recent-requests');
    return data;
};

// get request details
export const getSingleRequest = async (id) => {
    const { data } = await axiosSecure.get(`/request/${id}`);
    return data;
}

// get my requests only by email
export const getMyRequests = async (email) => {
    const { data } = await axiosSecure.get(`/requests/${email}`);
    return data;
}

// save request to database
export const saveReuestsToDB = async (requestData) => {
    const { data } = await axiosSecure.post('/requests', requestData);
    // console.log(data);
    return data;
}

// update  status 
export const updateStatus = async (id, status) => {
    const { data } = await axiosSecure.put(`/requests/${id}`, status);
    // console.log(data);
    return data;
}

// delete 
export const deleteRequest = async (id) => {
    const { data } = await axiosSecure.delete(`/requests/${id}`);
    // console.log(data);
    return data;
}

// updateRequest
export const updateRequestData = async (id, updateData) => {
    const { data } = await axiosSecure.put(`/request-up/${id}`, updateData);
    return data;
}


