import { AxiosResponse } from 'axios';

import { baseResponse } from 'lib/types';
import { IUser } from 'store/modules/user';
import apiClient from './apiClient';

const CHECK_USER_URL: string = '/api/v1.0/auth/local/check';
const LOCAL_LOGIN_URL: string = '/api/v1.0/auth/local/login';
const LOCAL_REGISTER_URL: string = '/api/v1.0/auth/local/register';

export const checkUserApi = (): Promise<AxiosResponse<baseResponse<IUser>>> => apiClient.get(CHECK_USER_URL);

export const localLoginApi = (params: {
  email: string;
  password: string;
}): Promise<AxiosResponse<baseResponse<null>>> => apiClient.post(LOCAL_LOGIN_URL, params);

export const localRegisterApi = (params: {
  email: string;
  password: string;
  passwordConfirm: string;
  displayName: string;
}): Promise<AxiosResponse<baseResponse<null>>> => apiClient.post(LOCAL_REGISTER_URL, params);
