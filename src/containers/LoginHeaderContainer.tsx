import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/modules';
import { toggleAuthModal } from 'store/modules/base';
import { removeUser } from 'store/modules/auth';
import { logoutUserApi } from 'lib/services/user';
import { errorHandler } from 'lib/utils/errorHandler';
import LogInHeader from 'components/base/Header/LogInHeader';

function LoginHeaderContainer(): JSX.Element | null {
  const dispatch = useDispatch();

  const { user, isLogIn } = useSelector((state: RootState) => state.auth, shallowEqual);

  const showAuthModal = () => dispatch(toggleAuthModal(true));

  const logOut = async () => {
    try {
      await logoutUserApi();
      dispatch(removeUser());
    } catch (err) {
      const message = errorHandler(err);
      console.error(message);
    }
  };

  return (
    <LogInHeader user={user} isLogIn={isLogIn} logOut={logOut} showAuthModal={showAuthModal} />
  );
}

export default LoginHeaderContainer;
