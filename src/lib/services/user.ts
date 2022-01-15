import type { BaseJsendResponse, UserSchema } from 'types';
import apiClient from './apiClient';

const V1_USERS_URL = '/api/v1/users';

export const CHECK_USER_URL: string = `${V1_USERS_URL}/me`;
export const VERIFY_USER_URL: string = `${V1_USERS_URL}/verify`;

export const checkUserApi = () =>
  apiClient.get(CHECK_USER_URL).json<BaseJsendResponse<UserSchema>>();

export const verifyUserApi = (verifyCode: string) =>
  apiClient.get(`${VERIFY_USER_URL}/${verifyCode}`).json<BaseJsendResponse<UserSchema>>();

export const logoutUserApi = () => apiClient.delete(V1_USERS_URL).json<BaseJsendResponse<null>>();
