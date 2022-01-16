import { useRef, useEffect } from 'react';

function useMount(callback: () => void | Promise<() => void>) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current();
  }, []);
}

export default useMount;
