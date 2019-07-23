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

apiClient.interceptors.request.use(config => {
  // const token = sessionStorage.getItem('token');
  // if (token) config.headers.Authorization = `Token token=${token}`;
  return config;
});

export default apiClient;
