import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as classNames from 'classnames/bind';

import { Logo } from 'assets/svgs';
import Navi from './Navi';
import { Overlay, Hamburger } from 'components';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  isTablet: boolean;
  visible: boolean;
  toggleSidebar(bool: boolean): void;
}

const Header: React.FunctionComponent<IProps> = ({ isTablet, visible, toggleSidebar }) => (
  <header className={cx('header')}>
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <NavLink to={'/'} className={cx('logo')}>
          <Logo />
        </NavLink>
        {isTablet && <Overlay visible={visible} />}
        <Navi visible={visible} isTablet={isTablet} toggleSidebar={toggleSidebar} />
      </div>
      <div className={cx('right')}>
        <button type="button" className={cx('login')}>
          Log In
        </button>
        <button type="button" className={cx('signup')}>
          Sign Up
        </button>
        {isTablet && <Hamburger visible={visible} toggleSidebar={toggleSidebar} />}
      </div>
    </div>
  </header>
);

export default Header;
