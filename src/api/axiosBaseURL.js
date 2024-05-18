import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: `${import.meta.env.VITE_AXIOS_BASE_URL}`,
});
export const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_AXIOS_BASE_URL}`,
    withCredentials: true,
});



