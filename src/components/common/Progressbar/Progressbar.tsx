import * as React from 'react';
import { useState, useEffect, memo, useRef } from 'react';

import { ProgressbarBlock } from './Progressbar.styles';

interface IProps {
  percent: number;
}

function Progressbar({ percent }: IProps) {
  const timer = useRef<number>();

  const [isZero, setIsZero] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);

    if (percent === 0) setVisible(true);
    if (percent !== 0) {
      setIsZero(false);
      setVisible(true);
    }
    if (percent !== 0 && percent !== 100) {
      timer.current = setTimeout(() => {
        setIsZero(true);
        setVisible(false);
      }, 3600);
    }
    if (percent === 100) {
      timer.current = setTimeout(() => {
        setIsZero(true);
        setVisible(false);
      }, 600);
    }

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [percent]);

  return <ProgressbarBlock percent={isZero ? 0 : percent} visible={visible} />;
}

export default memo(Progressbar);
