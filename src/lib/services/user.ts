import { BaseJsendResponse } from 'types';
import { User } from 'store/modules/auth';
import apiClient from './apiClient';

export const CHECK_USER_URL: string = '/api/v1/users/check';
export const LOGOUT_USER_URL: string = '/api/v1/users/logout';

export type CheckUserAPiResponse = BaseJsendResponse<{ user: User }>;

export const checkUserApi = (): Promise<CheckUserAPiResponse> => apiClient.get(CHECK_USER_URL);
export const logoutUserApi = (): Promise<BaseJsendResponse<null>> => apiClient.delete(LOGOUT_USER_URL);
