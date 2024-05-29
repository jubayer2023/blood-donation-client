import { axiosPublic, axiosSecure } from "./axiosBaseURL";

// create image bb api
const uploadApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api_key}`

export const imgUploadApi = async (image) => {
    const formData = new FormData();

    formData.append('image', image);

    const { data } = await axiosPublic.post(uploadApi, formData);

    return data;
};

// save users
export const saveUsers = async (userInfo, email) => {
    const { data } = await axiosPublic.put(`/users/${email}`, userInfo);
    return data;
}

//set cookie
export const setCookie = async (email) => {
    const user = { email };
    const { data } = await axiosSecure.post('/jwt', user);
    return data;
};

// clear cookie
export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout');
    return data;
};

// get single users
export const getSingleUser = async (email) => {
    const { data } = await axiosSecure.get(`/users/${email}`);
    return data;
}
// get single users by id
export const getSingleUserById = async (id) => {
    const { data } = await axiosSecure.get(`/users-detail/${id}`);
    return data;
}

// update-user data
export const updateUserData = async (id, userInfo) => {
    const { data } = await axiosSecure.put(`/update-user/${id}`, userInfo);
    return data;
}