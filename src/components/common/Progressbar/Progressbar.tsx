import React, { useState, useEffect } from 'react';

import { ProgressbarBlock } from './Progressbar.styles';

interface IProps {
  percent: number;
}

const Progressbar: React.FunctionComponent<IProps> = ({ percent }) => {
  const [isZero, setIsZero] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    let timeOut: number | null = null;
    if (percent === 0) {
      setVisible(true);
    }
    if (percent !== 0) {
      setIsZero(false);
      setVisible(true);
    }
    if (percent === 100) {
      setTimeout(() => {
        setIsZero(true);
        setVisible(false);
      }, 800);
    }
    if (percent !== 100) {
      timeOut = setTimeout(() => {
        setIsZero(true);
        setVisible(false);
      }, 3000);
    }
    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [percent]);

  return <ProgressbarBlock percent={isZero ? 0 : percent} visible={visible} />;
};

export default Progressbar;
