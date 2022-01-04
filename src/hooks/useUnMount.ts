import { useRef, useEffect } from 'react';

function useMount(callback: () => void) {
  const callbackRef = useRef<() => void>(callback);

  useEffect(() => {
    const unMountFun = callbackRef.current;
    return () => {
      unMountFun();
    };
  }, []);
}

export default useMount;
