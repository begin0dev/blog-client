import { memo, useCallback, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components/macro';

import useOnClickOutside from '../../../lib/hooks/useOnClickOutside';
import { zIndexes } from '../../../styles/utils';
import Transition, { TTransitionStatus } from '../../base/Transition';
import Overlay from '../overlay';

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
    <Transition active={active} timeout={200}>
      {(status) => (
        <ModalWrapper status={status}>
          {!hideOverlay && <Overlay />}
          <ModalBlock
            className={status}
            fullScreen={fullScreen}
            backgroundColor={backgroundColor}
            style={{ ...style, ...(!fullScreen && size) }}
            ref={modalEl}
          >
            {children}
          </ModalBlock>
        </ModalWrapper>
      )}
    </Transition>,
    modalRoot.current as HTMLDivElement,
  );
}

export default memo(Modal);

const ModalWrapper = styled.div<{ status: TTransitionStatus }>`
  z-index: ${zIndexes.MODAL};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  overflow: hidden;
  ${({ status }) => css`
    height: ${status === 'exited' ? 0 : '100%'};
    width: ${status === 'exited' ? 0 : '100%'};
  `}
`;

const ModalBlock = styled.div<{ fullScreen?: boolean; backgroundColor?: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#ffffff')};
  overflow: hidden;
  opacity: 0;
  transform: scale(0.85, 0.85);
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
