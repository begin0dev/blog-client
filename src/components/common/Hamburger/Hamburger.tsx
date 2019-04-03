import * as React from 'react';
import * as classNames from 'classnames/bind';

import styles from './Hamburger.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  visible: boolean;
  toggleSidebar(bool: boolean): void;
}

const Hamburger: React.FunctionComponent<IProps> = ({ visible, toggleSidebar }) => {
  return (
    <div className={cx('wrapper')} onClick={() => toggleSidebar(!visible)}>
      <div className={`hamburger hamburger--slider ${visible && 'is-active'} ${cx('spin')}`}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </div>
    </div>
  );
};

export default Hamburger;
