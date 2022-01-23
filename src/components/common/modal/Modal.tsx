import { memo, useCallback, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components/macro';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { zIndexes } from '../../../styles/utils';
import Overlay from '../overlay';
import useTransition, { TransitionStatusType } from '../../../hooks/useTransition';

interface Props {
  active: boolean;
  size?: object;
  style?: object;
  fullScreen?: boolean;
  hideOverlay?: boolean;
  hideModal?: (bool?: boolean) => void;
  children: ReactNode;
}

function Modal({ active, size, style, hideOverlay, fullScreen, hideModal, children }: Props) {
  const modalRoot = useRef<HTMLDivElement>(document.querySelector('#modal'));

  const status = useTransition({ active, duration: 200 });

  const modalEl = useOnClickOutside(
    active,
    useCallback((): void => {
      if (fullScreen) return;
      hideModal?.(false);
    }, [fullScreen, hideModal]),
  );

  return createPortal(
    <ModalWrapper status={status}>
      {!hideOverlay && <Overlay />}
      <ModalBlock
        className={status}
        fullScreen={fullScreen}
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

const ModalWrapper = styled.div<{ status: TransitionStatusType }>`
  z-index: ${zIndexes.MODAL};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${({ status }) => css`
    height: ${status === 'exited' ? 0 : '100%'};
    width: ${status === 'exited' ? 0 : '100%'};
  `}
`;
const ModalBlock = styled.section<{ fullScreen?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
