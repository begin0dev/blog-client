import { memo, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components/macro';
import { rgba } from 'polished';

import useOnClickOutside from 'hooks/useOnClickOutside';
import useTransition, { transitionStatus, TransitionStatusType } from 'hooks/useTransition';
import { themes, zIndexes } from 'styles/utils';

interface Props {
  active: boolean;
  size?: object;
  style?: object;
  fullScreen?: boolean;
  hideOverlay?: boolean;
  hideModal?: () => void;
  children: ReactNode;
}

function Modal({ active, size, style, hideOverlay, fullScreen, hideModal, children }: Props) {
  const modalRoot = useRef<HTMLDivElement>(document.querySelector('#modal'));

  const status = useTransition({ active, duration: 200 });

  const modalRef = useOnClickOutside(status === transitionStatus.ENTERED, () => {
    hideModal?.();
  });

  if (status === transitionStatus.EXITED) return null;
  return createPortal(
    <ModalWrapper status={status} hideOverlay={hideOverlay ?? false}>
      <ModalBlock
        className={status}
        fullScreen={fullScreen}
        style={{ ...style, ...(!fullScreen && size) }}
        ref={modalRef}
      >
        {children}
      </ModalBlock>
    </ModalWrapper>,
    modalRoot.current as HTMLDivElement,
  );
}

export default memo(Modal);

const ModalWrapper = styled.aside<{ status: TransitionStatusType; hideOverlay: boolean }>`
  z-index: ${zIndexes.MODAL};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${({ status, hideOverlay }) => css`
    height: ${status === 'exited' ? 0 : '100%'};
    width: ${status === 'exited' ? 0 : '100%'};
    background: ${hideOverlay ? 'transparent' : 'rgba(0, 0, 0, 0.2)'};
  `}
`;
const ModalBlock = styled.section<{ fullScreen?: boolean }>`
  position: relative;
  margin: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8, 0.8);
  transform-origin: center;
  transition: all 0.2s ease;
  &.entered {
    opacity: 1;
    transform: scale(1, 1);
    box-shadow: 0 0 6px 3px ${rgba(themes.PRIMARY, 0.1)};
  }
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
