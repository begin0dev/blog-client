import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUserApi } from 'lib/services/user';
import { errorHandler } from 'lib/utils/errorHandler';
import { RootState } from 'store/modules';
import { toggleAuthModal } from 'store/modules/base';
import { removeUser } from 'store/modules/auth';
import { Header } from 'components';

function HeaderContainer(): JSX.Element {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: RootState) => state.base.isMobile);
  const { user, isLogIn } = useSelector((state: RootState) => state.auth);

  const dispatchToggleAuthModal = React.useCallback(
    (bool: boolean) => () => dispatch(toggleAuthModal(bool)),
    [dispatch],
  );

  const logOut = React.useCallback(async () => {
    try {
      await logoutUserApi();
      dispatch(removeUser());
    } catch (err) {
      const message = errorHandler(err);
      console.error(message);
    }
  }, [dispatch]);

  return (
    <Header
      isMobile={isMobile}
      isLogIn={isLogIn}
      user={user}
      logOut={logOut}
      dispatchToggleAuthModal={dispatchToggleAuthModal}
    />
  );
}

export default HeaderContainer;
