import { useRef, useMemo } from 'react';
import { throttle } from 'lodash';

const options = { leading: true, trailing: false };

function useThrottleCallback(cb: (...args: any[]) => void, delay: number = 300) {
  const cbRef = useRef(cb);
  cbRef.current = cb;

  return useMemo(() => throttle((...args) => cbRef.current(...args), delay, options), [delay]);
}

export default useThrottleCallback;
