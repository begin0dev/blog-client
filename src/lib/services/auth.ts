import { BaseJsendResponse } from 'lib/types';
import apiClient from './apiClient';

export const LOCAL_LOGIN_URL: string = '/api/v1.0/auth/local/login';
export const LOCAL_REGISTER_URL: string = '/api/v1.0/auth/local/register';
export const SOCIAL_URL: string = '/api/v1.0/auth/social';

export const localLoginApi = (params: {
  email: string;
  password: string;
}): Promise<BaseJsendResponse<null>> => apiClient.post(LOCAL_LOGIN_URL, params);

export const localRegisterApi = (params: {
  email: string;
  password: string;
  passwordConfirm: string;
  displayName: string;
}): Promise<BaseJsendResponse<null>> => apiClient.post(LOCAL_REGISTER_URL, params);
