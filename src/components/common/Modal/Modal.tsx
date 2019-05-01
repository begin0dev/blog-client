import * as React from 'react';
import { OverlayBlock, ModalBlock } from './Modal.styles';

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

const Modal: React.FunctionComponent<IProps> = ({
  active,
  size,
  style,
  hideOverlay,
  fullScreen,
  backgroundColor,
  hideModal,
  children,
}) => {
  const modalEl = React.useRef<HTMLDivElement>(null);

  const onClickEvent = React.useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      if (fullScreen) return;
      if (modalEl && modalEl.current && modalEl.current.contains(e.target as HTMLElement)) return;
      if (hideModal) hideModal(false);
    },
    [modalEl, fullScreen, hideModal],
  );

  return (
    <OverlayBlock active={active} hideOverlay={hideOverlay} onClick={onClickEvent}>
      <ModalBlock
        fullScreen={fullScreen}
        backgroundColor={backgroundColor}
        style={{ ...style, ...(!fullScreen && size) }}
        ref={modalEl}
      >
        {children}
      </ModalBlock>
    </OverlayBlock>
  );
};

export default React.memo(Modal);
