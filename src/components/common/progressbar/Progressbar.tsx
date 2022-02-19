import { useState, useEffect, memo, useRef } from 'react';
import styled from 'styled-components/macro';

import { themes, zIndexes } from '../../../styles/utils';

interface Props {
  isLoading: boolean;
  animationTime?: number;
}

const plusPercent = 35;

function Progressbar({ isLoading, animationTime = 20 }: Props) {
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
        prevPercent.current += plusPercent;
        setPercent((prev) => prev + plusPercent);
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, [animationTime, isLoading]);

  return <ProgressbarBlock percent={percent} visible={visible} />;
}

export default memo(Progressbar);

const ProgressbarBlock = styled.div<{ percent: number; visible: boolean }>`
  z-index: ${zIndexes.PROGRESS};
  position: fixed;
  top: 0;
  width: ${({ percent }) => percent}%;
  height: ${({ visible }) => (visible ? '4px' : 0)};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: width 0.3s ease-in;
  background-color: ${themes.PRIMARY};
`;
