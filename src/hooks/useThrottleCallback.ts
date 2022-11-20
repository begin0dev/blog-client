import { throttle } from 'lodash';
import { useMemo, useRef } from 'react';

export function useThrottleCallback(cb: (...args: unknown[]) => void, delayMs?: number) {
  const cbRef = useRef(cb);
  cbRef.current = cb;

  return useMemo(
    () =>
      throttle((...args) => cbRef.current(...args), delayMs ?? 300, {
        leading: true,
        trailing: false,
      }),
    [delayMs],
  );
}
