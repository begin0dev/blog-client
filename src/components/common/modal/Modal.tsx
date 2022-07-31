import { memo, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components/macro';

import { zIndexes } from 'styles';
import Overlay from '../overlay';

const modalRoot = document.querySelector('#modal') as HTMLDivElement;

interface Props {
  active: boolean;
  size?: object;
  style?: object;
  fullScreen?: boolean;
  hideOverlay?: boolean;
  hideModal?: () => void;
  children: ReactNode;
}

function Modal({
  active,
  size,
  style,
  fullScreen,
  hideOverlay = false,
  hideModal,
  children,
}: Props) {
  return createPortal(
    <CSSTransition in={active} timeout={200} classNames="modal" unmountOnExit>
      <ModalWrapper>
        {!hideOverlay && <Overlay onClick={hideModal} />}
        <ModalBlock
          className="modalContent"
          fullScreen={fullScreen}
          style={{ ...style, ...(!fullScreen && size) }}
        >
          {children}
        </ModalBlock>
      </ModalWrapper>
    </CSSTransition>,
    modalRoot,
  );
}

export default memo(Modal);

const ModalWrapper = styled.aside`
  z-index: ${zIndexes.MODAL};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);

  &.modal-enter-done .modalContent,
  &.modal-exit .modalContent {
    opacity: 1;
  }
  &.modal-enter .modalContent,
  &.modal-exit-active .modalContent {
    opacity: 0;
    transform: scale(0.8);
  }
`;

const ModalBlock = styled.section<{ fullScreen?: boolean }>`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  transform-origin: center;
  transition: all 0.2s;
  box-shadow: 0 2px 8px 3px rgba(255, 255, 255, 0.03);

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
