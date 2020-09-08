import React, { memo } from 'react';

import { SpinnerBlock, Circle } from './Spinner.styles';

interface IProps {
  size?: string;
  color?: string;
}

function Spinner({ size, color }: IProps): JSX.Element {
  return (
    <SpinnerBlock size={size}>
      {Array.from({ length: 12 }, (arr, i) => (
        <Circle color={color} index={i} key={`circle${i}`} />
      ))}
    </SpinnerBlock>
  );
}

export default memo(Spinner);
