import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5001/api',
    withCredentials: true, // sending cookies automatically with each request
});