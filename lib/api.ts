// lib/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081',
    withCredentials: true, // CRITICAL - sends/receives cookies
});

// No need for token management!
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Session expired or not authenticated
        if (error.response?.status === 401) {
            window.location.href = '/login';
        }

        // No cabinet
        if (error.response?.status === 403 &&
            error.response?.data?.redirectUrl === '/cabinet/create') {
            window.location.href = '/cabinet/create';
        }

        return Promise.reject(error);
    }
);

export default api;