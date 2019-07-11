import styled, { css, keyframes } from 'styled-components';

import { palette } from 'styles/palette';

export const SpinnerBlock = styled.div<{ size?: string }>`
  position: relative;
  ${props =>
    props.size
      ? css`
          width: ${props.size};
          height: ${props.size};
        `
      : css`
          width: 12px;
          height: 12px;
        `}
`;

const circleFadeDelay = keyframes`
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; }
`;

export const Circle = styled.span<{ color?: string; index: number }>`
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
    background-color: ${props => (props.color ? props.color : palette.gray7)};
    border-radius: 100%;
    animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
  }
  ${props =>
    props.index !== 0 &&
    css`
      transform: rotate(${30 * props.index}deg);
      &:before {
        animation-delay: ${((12 - props.index) / 10) * -1}s;
      }
    `}
`;
