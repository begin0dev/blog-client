import { throttle } from 'lodash';
import { useMemo, useRef } from 'react';

export function useThrottleCallback(cb: (...args: any[]) => void, delayMs: number = 300) {
  const cbRef = useRef(cb);
  cbRef.current = cb;

  return useMemo(
    () =>
      throttle((...args) => cbRef.current(...args), delayMs, { leading: true, trailing: false }),
    [delayMs],
  );
}
