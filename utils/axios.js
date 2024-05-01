import axios from 'axios';

// Create a custom Axios instance
const axiosInstance = axios.create();

// Add an interceptor to log request payload
axiosInstance.interceptors.request.use(function (config) {
  console.log('Request Payload:', config.data); // Log the request payload
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default axiosInstance;
