import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { actions as baseActions } from 'store/base';
// import { actions as userActions } from 'store/user';
import { LoginBtn } from './Header.styles';

function LoginHeaderContainer() {
  const dispatch = useDispatch();

  const { isLogIn } = useSelector((state: RootState) => state.user, shallowEqual);

  const showAuthModal = useCallback(() => dispatch(baseActions.toggleAuthModal()), [dispatch]);
  // const logOut = useCallback(() => dispatch(userActions.logoutUser()), [dispatch]);

  return <LoginBtn onClick={showAuthModal}>{isLogIn ? '로그아웃' : '로그인'}</LoginBtn>;
}

export default LoginHeaderContainer;
