import * as React from 'react';

import { ProgressbarBlock } from './Progressbar.styles';

interface IProps {
  percent: number;
}

const Progressbar: React.FunctionComponent<IProps> = ({ percent }) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    let timeOut: number | null = null;
    if (percent === 0) setVisible(true);
    if (percent === 100) {
      setTimeout(() => {
        setVisible(false);
      }, 400);
    }
    if (percent !== 100) {
      timeOut = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [percent]);

  return <ProgressbarBlock percent={percent} visible={visible} />;
};

export default Progressbar;
