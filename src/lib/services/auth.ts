import apiClient from './apiClient';

const LOCAL_REGISTER_URL = '/api/v1.0/auth/local/register';
const LOCAL_LOGIN_URL = '/api/v1.0/auth/local/login';

export const localRegisterApi = (params: {
  email: string;
  password: string;
  passwordConfirm: string;
  displayName: string;
}) => apiClient.post(LOCAL_REGISTER_URL, params);

export const localLoginApi = (params: { email: string; password: string }) => apiClient.post(LOCAL_LOGIN_URL, params);
