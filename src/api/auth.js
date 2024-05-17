// create image bb api
const uploadApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api_key}`

export const imgUploadApi = async (image) => {
    const formData = new FormData();

    formData.append({ image: image });

    const { data } = await uploadApi(formData);

    return data;
}