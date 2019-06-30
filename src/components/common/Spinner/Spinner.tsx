import * as React from 'react';

import { SpinnerBlock, Circle } from './Spinner.styles';

interface IProps {
  size?: string;
  color?: string;
}

const Spinner: React.FunctionComponent<IProps> = React.memo(({ size, color }) => (
  <SpinnerBlock size={size}>
    {new Array(12).fill(0).map((arr, i) => (
      <Circle color={color} index={i} key={`circle${i}`} />
    ))}
  </SpinnerBlock>
));

export default Spinner;
