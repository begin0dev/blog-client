import { AxiosResponse } from 'axios';

import { BaseResponse } from 'lib/types';
import { IUser } from 'store/modules/user';
import apiClient from './apiClient';

const CHECK_USER_URL: string = '/api/v1.0/user/check';
const LOGOUT_USER_URL: string = '/api/v1.0/user/logout';

export type CheckUserAPiResponse = AxiosResponse<BaseResponse<{ user: IUser }>>;

export const checkUserApi = (): Promise<CheckUserAPiResponse> => apiClient.get(CHECK_USER_URL);
export const logoutUserApi = (): Promise<AxiosResponse<BaseResponse<null>>> => apiClient.delete(LOGOUT_USER_URL);
