import * as React from 'react';

import { User } from 'store/modules/auth';
import { LoginBtn } from './Header.styles';

interface IProps {
  user: User | null;
  isLogIn: boolean;
  logOut: () => void;
  dispatchToggleAuthModal: (bool: boolean) => () => void;
}

function LogIn({ user, isLogIn, logOut, dispatchToggleAuthModal }: IProps): JSX.Element {
  if (isLogIn) return <div>로그인 중</div>;
  return <LoginBtn onClick={dispatchToggleAuthModal(true)}>LogIn</LoginBtn>;
}

export default React.memo(LogIn);
