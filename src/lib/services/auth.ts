import { AxiosResponse } from 'axios';

import { BaseResponse } from 'lib/types';
import apiClient from './apiClient';

const LOCAL_LOGIN_URL: string = '/api/v1.0/auth/local/login';
const LOCAL_REGISTER_URL: string = '/api/v1.0/auth/local/register';

export const localLoginApi = (params: {
  email: string;
  password: string;
}): Promise<AxiosResponse<BaseResponse<null>>> => apiClient.post(LOCAL_LOGIN_URL, params);

export const localRegisterApi = (params: {
  email: string;
  password: string;
  passwordConfirm: string;
  displayName: string;
}): Promise<AxiosResponse<BaseResponse<null>>> => apiClient.post(LOCAL_REGISTER_URL, params);
