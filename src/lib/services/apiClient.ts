import axios, { AxiosInstance } from 'axios';

const { NODE_ENV } = process.env;

const PRODUCTION_BASE_URL = 'https://begin0dev.ml';
const DEVELOPMENT_BASE_URL = 'https://begin0dev.ml';
export const baseURL = NODE_ENV === 'production' ? PRODUCTION_BASE_URL : DEVELOPMENT_BASE_URL;

const apiClient: AxiosInstance = axios.create({
  withCredentials: true,
  timeout: 5000,
});

// apiClient.interceptors.request.use(config => {
//   return config;
// });

export default apiClient;
