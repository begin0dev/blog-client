import { memo } from 'react';

import { CircleWrapper, SpinnerWrapper } from './spinner.styles';

const SPINNER_COUNT = 12;

interface Props {
  size?: number;
  color?: string;
}

function Spinner({ size = 28, color }: Props) {
  return (
    <SpinnerWrapper css={{ width: size, height: size }}>
      {Array.from({ length: SPINNER_COUNT }, (_, index) => (
        <CircleWrapper
          css={{
            transform: `rotate(${30 * index}deg)`,

            '&::before': {
              backgroundColor: color,
              animationDelay: `${((SPINNER_COUNT - index) / 10) * -1}s`,
            },
          }}
          key={`circle_${index}`}
        />
      ))}
    </SpinnerWrapper>
  );
}

export default memo(Spinner);
