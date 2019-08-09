import * as React from 'react';

import { ProgressbarBlock } from './Progressbar.styles';

interface IProps {
  percent: number;
}

const Progressbar: React.FunctionComponent<IProps> = ({ percent }) => {
  const [isZero, setIsZero] = React.useState<boolean>(true);
  const [visible, setVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    let timeOut: number | null = null;
    if (percent === 0) {
      setIsZero(false);
      setVisible(true);
    }
    if (percent === 100) {
      setTimeout(() => {
        setVisible(false);
        setIsZero(true);
      }, 500);
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
