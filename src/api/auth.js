import { axiosPublic } from "./axiosBaseURL";

// create image bb api
const uploadApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api_key}`

export const imgUploadApi = async (image) => {
    const formData = new FormData();

    formData.append('image', image);

    const { data } = await axiosPublic.post(uploadApi, formData);

    return data;
};

export const saveUsers = async (userInfo, email) => {
    const { data } = await axiosPublic.put(`/users/${email}`, userInfo);
    return data;
}