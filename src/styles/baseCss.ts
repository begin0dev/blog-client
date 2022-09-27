import { css, keyframes } from 'styled-components';

import { themes } from './utils';

export const pulseKeyframes = keyframes`
  0% { box-shadow: 0 0 3px 0 ${themes.PRIMARY}; }
  50% { box-shadow: 0 0 6px 3px ${themes.PRIMARY}; }
  100% { box-shadow: 0 0 3px 0 ${themes.PRIMARY}; }
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
