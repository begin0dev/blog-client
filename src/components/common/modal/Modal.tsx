import { memo, useCallback, useRef, MouseEvent, ReactNode } from 'react';

import { ModalWrapper, OverlayBlock, ModalBlock } from './Modal.styles';

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
  const modalEl = useRef<HTMLDivElement>(null);

  const onClickOutSideEvent = useCallback(
    (e: MouseEvent<HTMLElement>): void => {
      if (fullScreen) return;
      if (modalEl.current?.contains(e.target as HTMLElement)) return;
      hideModal?.(false);
    },
    [fullScreen, hideModal],
  );

  return (
    <ModalWrapper>
      <OverlayBlock active={active} hideOverlay={hideOverlay} onClick={onClickOutSideEvent}>
        <ModalBlock
          fullScreen={fullScreen}
          backgroundColor={backgroundColor}
          style={{ ...style, ...(!fullScreen && size) }}
          ref={modalEl}
        >
          {children}
        </ModalBlock>
      </OverlayBlock>
    </ModalWrapper>
  );
}

export default memo(Modal);
