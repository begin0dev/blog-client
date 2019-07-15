export type BaseResponse<D> = {
  status: 'success' | 'fail' | 'error';
  data: D;
  message?: string;
};
