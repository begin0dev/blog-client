import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  withCredentials: true,
  timeout: 5000,
});

// apiClient.interceptors.request.use(config => {
//   return config;
// });

export default apiClient;
