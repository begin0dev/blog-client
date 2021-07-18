import { BaseJsendResponse, IUser } from 'types';
import apiClient from './apiClient';

const V1_USERS_URL = '/api/v1/users';

export const CHECK_USER_URL: string = `${V1_USERS_URL}/me`;
export const VERIFY_USER_URL: string = `${V1_USERS_URL}/verify`;
export const LOGOUT_USER_URL: string = `${V1_USERS_URL}`;

export const checkUserApi = (): BaseJsendResponse<IUser> => apiClient.get(CHECK_USER_URL);
export const verifyUserApi = (verifyCode: string): BaseJsendResponse<IUser> =>
  apiClient.get(`${VERIFY_USER_URL}/${verifyCode}`);
export const logoutUserApi = (): BaseJsendResponse<null> => apiClient.delete(LOGOUT_USER_URL);
