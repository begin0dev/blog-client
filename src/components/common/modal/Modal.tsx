import { memo, useCallback, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled, { css, keyframes } from 'styled-components';

import useOnClickOutside from '../../../lib/hooks/useOnClickOutside';
import { zIndexes } from '../../../styles/utils';

interface IProps {
  active: boolean;
  size?: object;
  style?: object;
  fullScreen?: boolean;
  hideOverlay?: boolean;
  backgroundColor?: string;
  hideModal?: (bool?: boolean) => void;
  children: ReactNode;
}

function Modal({
  active,
  size,
  style,
  hideOverlay,
  fullScreen,
  backgroundColor,
  hideModal,
  children,
}: IProps) {
  const modalRoot = useRef<HTMLDivElement>(document.querySelector('#modal'));
  const modalEl = useRef<HTMLDivElement>(null);

  const onClickOutsideEvent = useCallback((): void => {
    if (fullScreen) return;
    hideModal?.(false);
  }, [fullScreen, hideModal]);

  useOnClickOutside(modalEl, onClickOutsideEvent, active);

  return createPortal(
    <ModalWrapper active={active}>
      {!hideOverlay && <OverlayBlock />}
      <ModalBlock
        fullScreen={fullScreen}
        backgroundColor={backgroundColor}
        style={{ ...style, ...(!fullScreen && size) }}
        ref={modalEl}
      >
        {children}
      </ModalBlock>
    </ModalWrapper>,
    modalRoot.current as HTMLDivElement,
  );
}

export default memo(Modal);

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

const OverlayBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;
const ModalBlock = styled.div<{ fullScreen?: boolean; backgroundColor?: string }>`
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
const ModalWrapper = styled.div<{ active: boolean }>`
  z-index: ${zIndexes.MODAL};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  overflow: hidden;
  ${({ active }) => css`
    height: ${active ? '100%' : 0};
    width: ${active ? '100%' : 0};
    ${ModalBlock} {
      animation: ${active ? modalAppear : modalDisappear} .2s ease-in-out;
      animation-fill-mode: forwards;
    }:
  `}
`;
