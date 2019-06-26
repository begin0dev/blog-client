import axios from 'axios';

const { NODE_ENV } = process.env;
const PRODUCTION_BASE_URL = '';
const DEVELOPMENT_BASE_URL = 'localhost:3000/';

export const baseURL: string = NODE_ENV === 'production' ? PRODUCTION_BASE_URL : DEVELOPMENT_BASE_URL;

const apiClient = axios.create({
  baseURL,
  timeout: 3000,
});

apiClient.interceptors.request.use(config => {
  // const token = sessionStorage.getItem('token');
  // if (token) config.headers.Authorization = `Token token=${token}`;
  return config;
});

export default apiClient;
