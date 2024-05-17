import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: 'http://10.0.2.3:8000', 
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
api.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch (error) {
            'Invalid Token';
        }
        return config;
    },
    (error) => {
    // Handle request errors
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => {
    // You can modify the response data here if needed
        return response;
    },
    (error) => {
    // Handle response errors
        return Promise.reject(error);
    }
);

export { api };
