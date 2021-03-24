import styled, { css, keyframes } from 'styled-components';

import { zIndexes } from 'styles/utils';

const modalAppear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.85, 0.85);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

const modalDisappear = keyframes`
  0% {
    opacity: 1;
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform: scale(0.85, 0.85);
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  z-index: ${zIndexes.modal};
`;

export const ModalBlock = styled.div<{ fullScreen?: boolean; backgroundColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#ffffff')};
  overflow: hidden;
  transform-origin: center;
  ${({ fullScreen }) =>
    fullScreen &&
    css`
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      border-radius: 0;
    `}
`;

export const OverlayBlock = styled.div<{ active: boolean; hideOverlay?: boolean }>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ hideOverlay }) => (hideOverlay ? `rgba(0,0,0,0)` : `rgba(0,0,0,.4)`)};
  overflow: auto;
  ${ModalBlock} {
    animation: ${({ active }) => (active ? modalAppear : modalDisappear)} .2s ease-in-out;
    animation-fill-mode: forwards;
  }:
`;
