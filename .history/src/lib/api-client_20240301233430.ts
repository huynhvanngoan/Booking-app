import axios from "axios";



const const apiClient = axios.create({
    baseURL: '/api',
});

export default apiClient;