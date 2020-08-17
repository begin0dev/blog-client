import * as React from 'react';
import { AxiosPromise } from 'axios';

import { errorHandler } from 'lib/utils/errorHandler';

const { useRef, useState, useCallback } = React;

type PromiseCreator<R> = (...params: any[]) => AxiosPromise<R>;

export default function useRequest<R = any>(request: PromiseCreator<R>) {
  const fetch = useRef(request);

  const [loading, setLoading] = useState<boolean>(false);
  const [payload, setPayload] = useState<R | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onReset = useCallback(() => {
    setPayload(null);
    setError(null);
  }, []);

  const onRequest = useCallback(
    async (params) => {
      try {
        onReset();
        setLoading(true);
        const { data } = await fetch.current(params);
        setPayload(data);
      } catch (err) {
        const message = errorHandler(err);
        setError(message);
      } finally {
        setLoading(false);
      }
    },
    [onReset],
  );

  return [loading, payload, error, onRequest, onReset] as [
    boolean,
    R | null,
    string | null,
    typeof onRequest,
    typeof onReset,
  ];
}
