import axios, { AxiosInstance } from 'axios';

const { NODE_ENV } = process.env;
const PRODUCTION_BASE_URL: string = '';
const DEVELOPMENT_BASE_URL: string = 'http://localhost:3001';

export const baseURL: string = NODE_ENV === 'production' ? PRODUCTION_BASE_URL : DEVELOPMENT_BASE_URL;

const apiClient: AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 3000,
});

// apiClient.interceptors.request.use(config => {
//   return config;
// });

export default apiClient;
