import { BaseJsendResponse, IUser } from 'types';
import apiClient from './apiClient';

const V1_USERS_URL = '/api/v1/users';

export const CHECK_USER_URL: string = `${V1_USERS_URL}/me`;
export const VERIFY_USER_URL: string = `${V1_USERS_URL}/verify`;
export const LOGOUT_USER_URL: string = `${V1_USERS_URL}`;

export const checkUserApi = () => apiClient.get<never, BaseJsendResponse<IUser>>(CHECK_USER_URL);
export const verifyUserApi = (verifyCode: string) =>
  apiClient.get<never, BaseJsendResponse<IUser>>(`${VERIFY_USER_URL}/${verifyCode}`);
export const logoutUserApi = () =>
  apiClient.delete<never, BaseJsendResponse<null>>(LOGOUT_USER_URL);
