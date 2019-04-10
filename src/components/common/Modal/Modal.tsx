import * as React from 'react';
import * as classNames from 'classnames/bind';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  size?: object;
  style?: object;
  active?: boolean;
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
  const onClickEvent = (e: React.MouseEvent<HTMLElement>): void => {
    if (fullScreen) return;
    if (modalEl && modalEl.current && modalEl.current.contains(e.target as HTMLElement)) return;
    if (hideModal) hideModal(false);
  };
  return (
    <div className={cx('modalOverlay', { hideOverlay }, { active })} onClick={onClickEvent}>
      <div
        className={cx('modal', { fullScreen })}
        style={{ backgroundColor, ...style, ...(!fullScreen && size) }}
        ref={modalEl}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
