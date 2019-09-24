import styled, { css, keyframes } from 'styled-components';

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

const messageInAnimation = keyframes`
  0% {
    opacity: 0;
    max-height: 0;
  }
  100% {
    opacity: 1;
    max-height: unset;
  }
`;
const messageOutAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    max-height: 0;
  }
`;

export const MessageBlock = styled.div<{ zIndex?: number; position?: positionType; isBottom?: boolean }>`
  z-index: ${props => (props.zIndex ? props.zIndex : 10000)};
  display: flex;
  flex-flow: column wrap;
  align-items: ${props => justifyContent(props.position)};
  position: fixed;
  left: 0;
  right: 0;
  pointer-events: none;
  ${props =>
    props.isBottom
      ? css`
          bottom: 0;
        `
      : css`
          top: 0;
        `}
`;

export const MessageWrapBlock = styled.div<{ margin?: number; visible: boolean }>`
  background-color: #ffffff;
  color: #212529;
  min-width: 250px;
  padding: 10px 16px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 13px;
  font-feature-settings: 'tnum';
  margin: ${props => (props.margin ? `${props.margin}px ${props.margin}px 0` : '18px 18px 0')};
  animation: ${props => (props.visible ? messageInAnimation : messageOutAnimation)} 0.3s;
  &:last-child {
    margin-bottom: ${props => (props.margin ? `${props.margin}px` : '18px')};
  }
`;
