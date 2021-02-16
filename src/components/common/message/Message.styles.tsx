import styled, { css } from 'styled-components';

import { positionType } from './types';

const justifyContent = (position?: positionType) => {
  switch (position) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    default:
      return 'center';
  }
};

const margin = 18;

export const MessageBlock = styled.div<{
  zIndex?: number;
  position?: positionType;
  isBottom?: boolean;
}>`
  z-index: ${(props) => props.zIndex || 10000};
  display: flex;
  flex-flow: column wrap;
  align-items: ${(props) => justifyContent(props.position)};
  position: fixed;
  left: 0;
  right: 0;
  pointer-events: none;
  ${(props) =>
    props.isBottom
      ? css`
          bottom: 0;
        `
      : css`
          top: 0;
        `}
`;

export const MessageWrapBlock = styled.div<{ margin?: number }>`
  color: #212529;
  background-color: #ffffff;
  font-size: 13px;
  text-align: center;
  min-width: 250px;
  padding: 10px 16px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  margin: ${(props) => `${props.margin || margin}px ${props.margin || margin}px 0`};

  &:last-child {
    margin-bottom: ${(props) => `${props.margin || margin}px`};
  }
`;
