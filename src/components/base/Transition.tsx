import { useRef, useEffect, useState, cloneElement, ReactElement, ReactNode } from 'react';

export type TTransitionStatus = 'entering' | 'entered' | 'exiting' | 'exited';

const getStatus = (active: boolean, current: 'enter' | 'exit'): TTransitionStatus => {
  if (active) {
    if (current !== 'enter') return 'entering';
    else return 'entered';
  }
  if (current !== 'exit') return 'exiting';
  return 'exited';
};

interface IProps {
  active: boolean;
  timeout: number;
  children: ReactNode | ((status: TTransitionStatus) => ReactNode);
}

function Transition({ active, timeout = 300, children }: IProps) {
  const duration = useRef<number>(timeout);
  const [current, setCurrent] = useState<'enter' | 'exit'>('exit');

  useEffect(() => {
    if ((active && current === 'enter') || (!active && current === 'exit')) return;
    setTimeout(() => {
      setCurrent((prevState) => (prevState === 'enter' ? 'exit' : 'enter'));
    }, duration.current);
  }, [active, current]);

  const status = getStatus(active, current);
  return typeof children === 'function'
    ? children(status)
    : cloneElement(children as ReactElement, { status });
}

export default Transition;
