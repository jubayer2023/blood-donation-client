import axios from "axios";
import { clearCookie } from "./auth";

export const axiosPublic = axios.create({
    baseURL: `https://blood-donation-server-teal.vercel.app`,
});
export const axiosSecure = axios.create({
    baseURL: `https://blood-donation-server-teal.vercel.app`,
    withCredentials: true,
});


// set response interceptor
axiosSecure.interceptors.response.use((res) => {
    return res;
}, async (error) => {
    // console.log(error)
    if (error.response.status === 401 || error.response.status === 403) {
        await clearCookie();
        window.location.replace('/login');
    }
    return Promise.reject(error);
});



