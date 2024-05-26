import { axiosPublic, axiosSecure } from "./axiosBaseURL"

// get users-count
export const getUsersCount = async () => {
    const { data } = await axiosSecure.get(`/user/count`);
    return data;
}

// get all users
export const getAllUsers = async (pageInfo) => {
    // console.log(pageInfo);
    const { data } = await axiosSecure.get(`/users`, { params: pageInfo });
    return data;
}

// Change Role
export const updateRole = async (id, role) => {
    const { data } = await axiosSecure.put(`/user/role/${id}`, { role });
    return data;
}

// Change Status
export const updateUserStatus = async (id, status) => {
    const { data } = await axiosSecure.put(`/user/status/${id}`, { status });
    return data;
}

// get all blood donation requests only by email
export const getAllDonationRequests = async () => {
    const { data } = await axiosSecure.get(`/all-requests`);
    return data;
}

// create blog
export const saveBlogContent = async (blog) => {
    const { data } = await axiosSecure.post('/blog-content', blog);
    return data;
}

// get blogs
export const getBlogContent = async () => {
    const { data } = await axiosPublic.get('/blog-content');
    return data;
}