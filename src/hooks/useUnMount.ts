import { useRef, useEffect } from 'react';

function useUnMount(callback: () => void | Promise<() => void>) {
  const callbackRef = useRef<() => void>(callback);

  useEffect(() => {
    const unMountFun = callbackRef.current;
    return () => {
      unMountFun();
    };
  }, []);
}

export default useUnMount;
