import { AxiosResponse } from 'axios';

export type BaseJsendResponse<D> = AxiosResponse<{
  status: 'success' | 'fail' | 'error';
  data: D;
  message?: string;
}>;
