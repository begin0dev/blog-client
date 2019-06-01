import { useCallback, useState } from 'react';
import { AxiosPromise } from 'axios';

type PromiseCreator<R> = (...params: any[]) => AxiosPromise<R>;

export const errorHandler = (err: any): string => {
  let message = '';
  switch (typeof err) {
    case 'string':
      message = err;
      break;
    case 'object': {
      if (process.env.NODE_ENV !== 'production') console.error(err.response);
      const {
        response: { data, statusText },
      } = err;
      if (typeof data === 'object') {
        ({ message } = data);
      } else {
        message = statusText;
      }
      break;
    }
    default:
      message = '알 수 없는 문제가 발생하였습니다.';
  }
  return message;
};

export default function useRequest<R = any>(request: PromiseCreator<R>) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setResolved] = useState<R | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onRequest = useCallback(
    async params => {
      try {
        setLoading(true);
        const res = await request(params);
        setResolved(res.data);
      } catch (err) {
        const message = errorHandler(err);
        setError(message);
      } finally {
        setLoading(false);
      }
    },
    [request],
  );

  const onReset = useCallback(() => {
    setResolved(null);
    setError(null);
  }, []);

  return [loading, data, error, onRequest, onReset] as [
    boolean,
    R | null,
    string | null,
    typeof onRequest,
    typeof onReset
  ];
}
