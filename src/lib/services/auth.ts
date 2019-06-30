import apiClient from './apiClient';

const LOCAL_LOGIN_URL: string = '/api/v1.0/auth/local/login';
const LOCAL_REGISTER_URL: string = '/api/v1.0/auth/local/register';

export type loginResponse = {

}
export const localLoginApi = (params: { email: string; password: string }) => apiClient.post(LOCAL_LOGIN_URL, params);
export const localRegisterApi = (params: {
  email: string;
  password: string;
  passwordConfirm: string;
  displayName: string;
}) => apiClient.post(LOCAL_REGISTER_URL, params);
