import { ReactNode, memo } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Overlay from '../overlay';
import { ModalWrapper } from './modal.styles';

const modalRoot = document.querySelector('#modal') as HTMLDivElement;

interface Props {
  width?: string;
  height?: string;
  active: boolean;
  showOverlay?: boolean;
  onClose?: () => void;
  children: ReactNode;
}

function Modal({ active, showOverlay = false, onClose, children }: Props) {
  return createPortal(
    <CSSTransition classNames="modal" in={active} timeout={200} unmountOnExit>
      <ModalWrapper>
        {showOverlay && <Overlay onClick={onClose} />}
        <div className="modal">{children}</div>
      </ModalWrapper>
    </CSSTransition>,
    modalRoot,
  );
}

export default memo(Modal);
