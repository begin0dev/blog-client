import { memo, useCallback, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { ModalWrapper, OverlayBlock, ModalBlock } from './Modal.styles';
import useOnClickOutside from '../../../lib/hooks/useOnClickOutside';

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
    <ModalWrapper>
      <OverlayBlock active={active} hideOverlay={hideOverlay}>
        <ModalBlock
          fullScreen={fullScreen}
          backgroundColor={backgroundColor}
          style={{ ...style, ...(!fullScreen && size) }}
          ref={modalEl}
        >
          {children}
        </ModalBlock>
      </OverlayBlock>
    </ModalWrapper>,
    modalRoot.current as HTMLDivElement,
  );
}

export default memo(Modal);
