import * as React from 'react';
import { AxiosPromise } from 'axios';

import { errorHandler } from 'lib/utils/errorHandler';

const { useRef, useState, useCallback } = React;

type RequestParametersType<P> = [P, any?] | [number, P, any?];

type PromiseCreator<P, R> = (...params: RequestParametersType<P>) => AxiosPromise<R>;

function useRequest<P, R>(request: PromiseCreator<RequestParametersType<P>, R>) {
  const fetch = useRef(request);

  const [loading, setLoading] = useState<boolean>(false);
  const [payload, setPayload] = useState<R | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onReset = useCallback(() => {
    setPayload(null);
    setError(null);
  }, []);

  const onRequest = async (...params: RequestParametersType<P>) => {
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
  };

  return [loading, payload, error, onRequest, onReset] as [
    boolean,
    R | null,
    string | null,
    typeof onRequest,
    typeof onReset,
  ];
}

export default useRequest;
