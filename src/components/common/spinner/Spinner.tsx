import { memo } from 'react';
import styled, { css, keyframes } from 'styled-components/macro';

import { palette } from '../../../styles/palette';

interface Props {
  size?: string;
  color?: string;
}

function Spinner({ size, color }: Props) {
  return (
    <SpinnerBlock size={size}>
      {Array.from({ length: 12 }, (arr, i) => (
        <Circle color={color} index={i} key={`circle${i}`} />
      ))}
    </SpinnerBlock>
  );
}

export default memo(Spinner);

const circleFadeDelayKeyframes = keyframes`
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; }
`;
const SpinnerBlock = styled.div<{ size?: string }>`
  position: relative;
  ${({ size }) =>
    css`
      width: ${size || '14px'};
      height: ${size || '14px'};
    `}
`;
const Circle = styled.span<{ color?: string; index: number }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: ${({ color }) => color || palette.gray7};
    border-radius: 100%;
    animation: ${circleFadeDelayKeyframes} 1.2s infinite ease-in-out both;
  }
  ${({ index }) =>
    index !== 0 &&
    css`
      transform: rotate(${30 * index}deg);
      &:before {
        animation-delay: ${((12 - index) / 10) * -1}s;
      }
    `}
`;
