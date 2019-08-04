import * as React from 'react';

import { ProgressbarBlock } from './Progressbar.styles';

interface IProps {
  percent: number;
}

const Progressbar: React.FunctionComponent<IProps> = ({ percent }) => {
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let timeOut: number | null = null;
    if (percent === 0) setLoading(true);
    if (percent === 100) {
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
    if (percent !== 100) {
      timeOut = setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    return () => {
      setLoading(false);
      if (timeOut) clearTimeout(timeOut);
    };
  }, [percent]);

  return <ProgressbarBlock percent={percent} visible={isLoading} />;
};

export default Progressbar;
