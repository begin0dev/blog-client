export interface BaseJsendResponse<D> {
  status: 'success' | 'fail' | 'error';
  data: { payload: D };
  message?: string;
}

export * from './user';
