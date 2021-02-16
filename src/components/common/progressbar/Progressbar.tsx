import * as React from 'react';
import { useState, useEffect, memo, useRef, useCallback } from 'react';

import { ProgressbarBlock } from './Progressbar.styles';

interface IProps {
  isLoading: boolean;
  animationTime?: number;
}

function Progressbar({ isLoading, animationTime = 15 }: IProps) {
  const rafRef = useRef<number>(0);
  const delayTime = useRef<number>(animationTime);
  const timer = useRef<number>(animationTime);

  const prevPercent = useRef<number>(0);
  const prevVisible = useRef<boolean>(false);

  const [percent, setPercent] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  const animate = useCallback(() => {
    if (timer.current !== 0) {
      timer.current -= 1;
      rafRef.current = requestAnimationFrame(animate);
      return;
    }
    timer.current = delayTime.current;
    if (isLoading && prevPercent.current !== 100) {
      prevPercent.current += 5;
      setPercent((prev) => prev + 5);
      rafRef.current = requestAnimationFrame(animate);
      return;
    }
    if (!isLoading && prevPercent.current !== 100) {
      prevPercent.current = 100;
      setPercent(100);
      rafRef.current = requestAnimationFrame(animate);
      return;
    }
    if (!isLoading && prevVisible.current && prevPercent.current === 100) {
      prevVisible.current = false;
      setVisible(false);
      cancelAnimationFrame(rafRef.current);
      return;
    }
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      timer.current = delayTime.current;
      prevPercent.current = 0;
      prevVisible.current = true;
      setVisible(true);
      setPercent(0);
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [animate, isLoading]);

  return <ProgressbarBlock percent={percent} visible={visible} />;
}

export default memo(Progressbar);
