export type baseResponse<D> = {
  status: 'success' | 'fail' | 'error';
  data: D;
  message?: string;
};
