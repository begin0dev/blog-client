import { css, keyframes, CSSProp } from 'styled-components';

import { palette } from './palette';

export const pulseKeyframes = keyframes`
  0% { box-shadow: 0 0 0 0 ${palette.gray8}; }
  100% { box-shadow: 0 0 8px 3px ${palette.gray8}; }
`;

interface IButtonColorMap {
  red: CSSProp;
}

export const buttonColorMap: IButtonColorMap = {
  red: css`
    background: linear-gradient(-180deg, ${palette.red6} 0%, ${palette.red8} 98%);
    color: ${palette.white};
    &:active {
      animation: ${pulseKeyframes} 0.3s;
    }
    &:hover {
      background: ${palette.red8};
    }
    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.6;
    }
  `,
};
