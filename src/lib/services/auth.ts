import { AxiosResponse } from 'axios';

import { IUser } from 'store/modules/user';
import apiClient from './apiClient';

const LOCAL_LOGIN_URL: string = '/api/v1.0/auth/local/login';
const LOCAL_REGISTER_URL: string = '/api/v1.0/auth/local/register';
const CHECK_USER_URL: string = '/api/v1.0/auth/local/check';

type authResponse<D> = {
  status: 'success' | 'fail' | 'error';
  data: D;
  message?: string;
};

export const checkUserApi = (): Promise<AxiosResponse<authResponse<IUser>>> => apiClient.get(CHECK_USER_URL);
export const localLoginApi = (params: {
  email: string;
  password: string;
}): Promise<AxiosResponse<authResponse<null>>> => apiClient.post(LOCAL_LOGIN_URL, params);
export const localRegisterApi = (params: {
  email: string;
  password: string;
  passwordConfirm: string;
  displayName: string;
}): Promise<AxiosResponse<authResponse<null>>> => apiClient.post(LOCAL_REGISTER_URL, params);
