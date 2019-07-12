import { useCallback, useState } from 'react';
import { AxiosPromise } from 'axios';

import { errorHandler } from 'lib/utils/errorHandler';

type PromiseCreator<R> = (...params: any[]) => AxiosPromise<R>;

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
