import { css, keyframes } from 'styled-components/macro';

import { palette } from './palette';

export const pulseKeyframes = keyframes`
  0% { box-shadow: 0 0 3px 0 ${palette.gray4}; }
  50% { box-shadow: 0 0 6px 3px ${palette.gray4}; }
  100% { box-shadow: 0 0 3px 0 ${palette.gray4}; }
`;

export const baseButtonCSS = css`
  &:active {
    animation: ${pulseKeyframes} 0.3s;
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.7;
  }
`;
