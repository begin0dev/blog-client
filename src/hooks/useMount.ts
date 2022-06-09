import { useRef, useEffect } from 'react';

export function useMount(callback: () => void | Promise<() => void>) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current();
  }, []);
}
