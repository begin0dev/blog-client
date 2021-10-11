import { AxiosResponse } from 'axios';

export type BaseJsendResponse<D> = AxiosResponse<{
  status: 'success' | 'fail' | 'error';
  data: { payload: D };
  message?: string;
}>;

export interface IUser {
  _id: string;
  email?: string;
  emailVerified: boolean;
  displayName: string;
  profileImage?: string;
  isAdmin: boolean;
}
