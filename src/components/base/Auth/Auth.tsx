import * as React from 'react';
import * as classNames from 'classnames/bind';
// import { FaArrowRight, FaFacebook as Facebook, FaGithub as Github, FaGooglePlusSquare as Google } from 'react-icons/fa';

// import { Kakao } from 'assets/svgs';
import { IAuthState } from 'store/modules/auth';

import styles from './Auth.module.scss';

const cx = classNames.bind(styles);

interface IProps {
  authState: IAuthState;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Auth: React.FunctionComponent<IProps> = ({ authState, setAuthFormValue }) => (
  <div className={cx('auth')}>
    temp
  </div>
);

export default Auth;
