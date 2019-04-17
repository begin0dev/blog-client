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
  toggleSidebar: (bool: boolean) => void;
  displayAuthForm: (formName: 'signUp' | 'logIn') => void;
}

const Header: React.FunctionComponent<IProps> = ({ isTablet, visible, displayAuthForm, toggleSidebar }) => (
  <header className={cx('header')}>
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <NavLink to={'/'} className={cx('logo')}>
          <Logo />
        </NavLink>
        {isTablet && <Overlay visible={visible} />}
        <Navi visible={visible} isTablet={isTablet} />
      </div>
      <div className={cx('right')}>
        <button type="button" className={cx('log-in')} onClick={() => displayAuthForm('logIn')}>
          Log In
        </button>
        <button type="button" className={cx('sign-up')} onClick={() => displayAuthForm('signUp')}>
          Sign Up
        </button>
        {isTablet && <Hamburger visible={visible} toggleSidebar={toggleSidebar} />}
      </div>
    </div>
  </header>
);

export default Header;
