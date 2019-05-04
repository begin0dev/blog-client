import * as React from 'react';

import { SpinnerBlock, Circle } from './Spinner.styles';

interface IProps {
  size?: string;
  color?: string;
}

const Spinner: React.FunctionComponent<IProps> = ({ size, color }) => {
  return (
    <SpinnerBlock size={size}>
      {new Array(12).fill(0).map((arr, i) => (
        <Circle className={`circle${i}`} key={`circle${i}`} color={color} />
      ))}
    </SpinnerBlock>
  );
};

export default Spinner;
