import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
    headers: {
        'Authorization': `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`
    }
});
console.log(process.env.EXPO_PUBLIC_BASE_URL)
const getUserInfo = (email) => axiosClient.get('/user-lists?filters[userEmail][$eq]=' + email);

const createNewUser = (data) => axiosClient.post('/user-lists', { data })

export default {
    getUserInfo,
    createNewUser
}