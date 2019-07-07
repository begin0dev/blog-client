import { AxiosResponse } from 'axios';

import { baseResponse } from 'lib/types';
import { IUser } from 'store/modules/user';
import apiClient from './apiClient';

const CHECK_USER_URL: string = '/api/v1.0/user/check';

export type checkUserAPiResponse = AxiosResponse<baseResponse<{ user: IUser }>>;
export const checkUserApi = (): Promise<checkUserAPiResponse> => apiClient.get(CHECK_USER_URL);
