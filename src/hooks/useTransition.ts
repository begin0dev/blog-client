import { useEffect, useRef, useState } from 'react';

import { ValueOf } from 'lib/utils/typescript-utils';

export const transitionStatus = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited',
} as const;

export type TransitionStatusType = ValueOf<typeof transitionStatus>;

const getNextStatus = (current: TransitionStatusType) => {
  return {
    [transitionStatus.ENTERING]: transitionStatus.ENTERED,
    [transitionStatus.ENTERED]: transitionStatus.EXITING,
    [transitionStatus.EXITING]: transitionStatus.EXITED,
    [transitionStatus.EXITED]: transitionStatus.ENTERING,
  }[current];
};

interface Props {
  active: boolean;
  duration?: number;
}

export function useTransition({ active, duration = 200 }: Props) {
  const timer = useRef<NodeJS.Timeout>();
  const [status, setStatus] = useState<TransitionStatusType>(transitionStatus.EXITED);

  useEffect(() => {
    if (active && status !== transitionStatus.EXITED) return;
    if (!active && status !== transitionStatus.ENTERED) return;

    setStatus((prevState) => getNextStatus(prevState));
    timer.current = setTimeout(() => {
      setStatus((prevState) => getNextStatus(prevState));
    }, duration);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, duration, status]);

  return status;
}
