import { useEffect, useRef, useState } from 'react';

import { ValueOf } from '../lib/utils/typescriptUtils';

const transitionStatus = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited',
} as const;

export type TransitionStatus = ValueOf<typeof transitionStatus>;

const getNextStatus = (current: TransitionStatus) => {
  return {
    [transitionStatus.ENTERING]: transitionStatus.ENTERED,
    [transitionStatus.ENTERED]: transitionStatus.EXITING,
    [transitionStatus.EXITING]: transitionStatus.EXITED,
    [transitionStatus.EXITED]: transitionStatus.ENTERING,
  }[current];
};

interface Props {
  active: boolean;
  timeout?: number;
}

function useTransition({ active, timeout = 200 }: Props) {
  const timer = useRef<NodeJS.Timeout>();
  const [status, setStatus] = useState<TransitionStatus>(transitionStatus.EXITED);

  useEffect(() => {
    if (active && status !== transitionStatus.EXITED) return;
    if (!active && status !== transitionStatus.ENTERED) return;

    setStatus((prevState) => getNextStatus(prevState));
    timer.current = setTimeout(() => {
      setStatus((prevState) => getNextStatus(prevState));
    }, timeout);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [active, timeout, status]);

  return status;
}

export default useTransition;
