import axios from 'axios';

export const axiosInstance = axios.create({
    // if we are in development mode, we will use the development server
    // if we are in production mode, we will use the production
    baseURL: import.meta.env.MODE === "development" ? 'http://localhost:5001/api' : '/api',
    withCredentials: true, // sending cookies automatically with each request
});