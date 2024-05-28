import { axiosSecure } from "./axiosBaseURL"

// create payment intent
export const createPaymentIntent = async (price) => {
    const { data } = await axiosSecure.post('/create-payment-intent', price);
    return data;
}

//save payments
export const savePayments = async (paymentInfo) => {
    const { data } = await axiosSecure.post('/payments', paymentInfo);
    return data;
}
//get payments data
export const getPaymentsData = async (email) => {
    const { data } = await axiosSecure.get(`/payments/${email}`);
    return data;
}
