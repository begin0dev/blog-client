import { css, keyframes, CSSProp } from 'styled-components';

import { Palette } from './palette';

export const pulseKeyframes = keyframes`
  0% { box-shadow: 0 0 3px 0 ${Palette.gray5}; }
  50% { box-shadow: 0 0 8px 3px ${Palette.gray5}; }
  100% { box-shadow: 0 0 3px 0 ${Palette.gray5}; }
`;

interface IButtonColorMap {
  red: CSSProp;
}

export const buttonColorMap: IButtonColorMap = {
  red: css`
    background: linear-gradient(-180deg, ${Palette.red6} 0%, ${Palette.red8} 98%);
    color: ${Palette.white};
    &:active {
      animation: ${pulseKeyframes} 0.3s;
    }
    &:hover {
      background: ${Palette.red8};
    }
    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.6;
    }
  `,
};
