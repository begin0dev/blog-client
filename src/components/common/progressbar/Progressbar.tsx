import { useState, useEffect, useRef, memo } from 'react';

import { ProgressbarWrapper } from './progress.styles';

interface Props {
  isLoading: boolean;
  animationTime?: number;
}

const plusPercent = 25;

function Progressbar({ isLoading, animationTime = 5 }: Props) {
  const rafRef = useRef<number>(0);
  const timer = useRef<number>(animationTime);
  const prevPercent = useRef<number>(0);

  const [percent, setPercent] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isLoading) {
      timer.current = animationTime;
      prevPercent.current = 0;
      setVisible(true);
    }

    const animate = () => {
      if (timer.current !== 0) {
        timer.current -= 1;
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      timer.current = animationTime;
      if (!isLoading && prevPercent.current === 100) {
        cancelAnimationFrame(rafRef.current);
        setVisible(false);
        setPercent(0);
        return;
      }
      if (!isLoading && prevPercent.current !== 100) {
        prevPercent.current = 100;
        setPercent(100);
      }
      if (prevPercent.current !== 100) {
        prevPercent.current = Math.min(100, prevPercent.current + plusPercent);
        setPercent(prevPercent.current);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, [animationTime, isLoading]);

  return <ProgressbarWrapper style={{ width: `${percent}%` }} visible={visible} />;
}

export default memo(Progressbar);
