import { axiosSecure } from "./axiosBaseURL"

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