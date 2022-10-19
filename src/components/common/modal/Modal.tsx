import { ReactNode, memo } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Overlay from '../overlay';
import { ModalContent, ModalWrapper } from './modal.styles';

const modalRoot = document.querySelector('#modal') as HTMLDivElement;

interface Props {
  styles?: { width?: string; height?: string };
  active: boolean;
  showOverlay?: boolean;
  onClose?: () => void;
  children: ReactNode;
}

function Modal({ styles, active, showOverlay = false, onClose, children }: Props) {
  return createPortal(
    <CSSTransition classNames="modal" in={active} timeout={200} unmountOnExit>
      <ModalWrapper>
        {showOverlay && <Overlay onClick={onClose} />}
        <ModalContent css={styles}>{children}</ModalContent>
      </ModalWrapper>
    </CSSTransition>,
    modalRoot,
  );
}

export default memo(Modal);
