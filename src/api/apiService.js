// src/api/apiService.js
import axios from 'axios';

const apiService = axios.create({
    baseURL: process.env.REACT_APP_API_URL // Leave it empty to use the proxy
});
const getAuthToken = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        return `Bearer ${token}`;
    } else {
        // Use dummy credentials from environment variables for auto-login
        return `Bearer ${process.env.REACT_APP_API_TOKEN}`;
    }
};
apiService.interceptors.request.use(
    config => {
        const token = getAuthToken();
        if (token) {
            config.headers['Authorization'] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// Interceptor for handling responses
apiService.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            // Server responded with a status other than 200 range
            console.error('API error:', error.response.data);
            return Promise.reject({
                status: error.response.status,
                message: error.response.data.message || 'An error occurred while fetching data.',
            });
        } else if (error.request) {
            // Request was made but no response was received
            console.error('Network error:', error.request);
            return Promise.reject({
                status: null,
                message: 'Network error. Please check your internet connection.',
            });
        } else {
            // Something happened in setting up the request
            console.error('Error:', error.message);
            return Promise.reject({
                status: null,
                message: 'An unexpected error occurred.',
            });
        }
    }
);

// Utility function to handle API calls
const handleApiCall = async (apiCall) => {
    try {
        const response = await apiCall();
        return response.data;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};

export const fetchHomeData = () => {
    return handleApiCall(() => apiService.get('/v1/app-config/home'));
};

export const fetchA1ProdHome = () => {
    return handleApiCall(() => apiService.get('/v1/a1prodvideo/a1prod-home'));
};

export const fetchLiveTVList = (date) => {
    return handleApiCall(() => apiService.get(`/v1/livetv/list?date=${date}`));
};
export const fetchAdvertisements = () => {
    return handleApiCall(() => apiService.get('/v1/app-config/home'));
};
export const login = async (email, password) => {
    const response = await apiService.post('/v1/user/login', { email, password },{ headers: { 'Authorization': undefined } });
    const { token } = response.data;
    localStorage.setItem('authToken', token);  // Store the token in localStorage
    return response.data;
};

// Register API Call
export const register = async (full_name, email, password, phone_number) => {
    const response = await apiService.post('/v1/user/register', { full_name, email, password, phone_number },{ headers: { 'Authorization': undefined } });
    const { token } = response.data;
    localStorage.setItem('authToken', token);  // Store the token in localStorage
    return response.data;
};
export const dummyLogin = async () => {
    const email = process.env.REACT_APP_USER_NAME;
    const password = process.env.REACT_APP_PASSWORD;
    const response = await login(email, password); // Reuse the login function
    return response;
};


export const fetchVideoDetails = async (videoId) => {
    try {
        const response = await apiService.get(`/v1/a1prodvideo/detail/${videoId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
