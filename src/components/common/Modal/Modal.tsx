import * as React from 'react';
import { memo } from 'react';

import { HideScrollbar } from 'components';
import { ModalWrapper, OverlayBlock, ModalBlock } from './Modal.styles';

interface IProps {
  active: boolean;
  size?: object;
  style?: object;
  fullScreen?: boolean;
  hideOverlay?: boolean;
  backgroundColor?: string;
  hideModal?: (bool?: boolean) => void;
  children: React.ReactNode;
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
  const modalEl = React.useRef<HTMLDivElement | null>(null);

  const onClickOutSideEvent = (e: React.MouseEvent<HTMLElement>): void => {
    if (fullScreen) return;
    if (modalEl.current && modalEl.current.contains(e.target as HTMLElement)) return;
    if (hideModal) hideModal(false);
  };

  return (
    <ModalWrapper>
      <OverlayBlock active={active} hideOverlay={hideOverlay} onClick={onClickOutSideEvent}>
        {active && <HideScrollbar />}
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
