import * as React from 'react';
import * as classNames from 'classnames/bind';

import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  visible?: boolean;
}

const Overlay: React.FunctionComponent<IProps> = ({ visible }) => {
  return <div className={cx('overlay', { visible })} />;
};

export default Overlay;
