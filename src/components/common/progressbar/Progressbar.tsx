import { useState, useEffect, memo, useRef, useCallback } from 'react';
import styled from 'styled-components/macro';

import { zIndexes } from '../../../styles/utils';
import { palette } from '../../../styles/palette';

interface IProps {
  isLoading: boolean;
  animationTime?: number;
}

const plusPercent = 20;

function Progressbar({ isLoading, animationTime = 20 }: IProps) {
  const rafRef = useRef<number>(0);
  const delayTime = useRef<number>(animationTime);
  const timer = useRef<number>(animationTime);

  const prevPercent = useRef<number>(0);

  const [percent, setPercent] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  const animate = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    if (timer.current !== 0) {
      timer.current -= 1;
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    timer.current = delayTime.current;
    if (prevPercent.current === 100) {
      cancelAnimationFrame(rafRef.current);
      setVisible(false);
      return;
    }
    if (isLoading && prevPercent.current !== 100) {
      prevPercent.current += plusPercent;
      setPercent((prev) => prev + plusPercent);
    }
    if (!isLoading && prevPercent.current !== 100) {
      prevPercent.current = 100;
      setPercent(100);
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      timer.current = delayTime.current;
      prevPercent.current = 0;
      setVisible(true);
      setPercent(0);
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [animate, isLoading]);

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
  transition: width 0.2s ease-in;
  background-color: ${palette.green9};
`;
