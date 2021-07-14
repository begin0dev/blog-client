import { BaseJsendResponse, IUser } from 'types';
import apiClient from './apiClient';

const V1_USERS_URL = '/v1/users';
export const CHECK_USER_URL: string = `${V1_USERS_URL}/me`;
export const LOGOUT_USER_URL: string = `${V1_USERS_URL}/logout`;

export type CheckUserAPiResponse = BaseJsendResponse<{ user: IUser }>;

export const checkUserApi = (): Promise<CheckUserAPiResponse> => apiClient.get(CHECK_USER_URL);
export const logoutUserApi = (): Promise<BaseJsendResponse<null>> =>
  apiClient.delete(LOGOUT_USER_URL);
