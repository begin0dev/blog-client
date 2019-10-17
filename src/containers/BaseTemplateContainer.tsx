import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUserApi } from 'lib/services/user';
import { errorHandler } from 'lib/utils/errorHandler';
import { RootState } from 'store/modules';
import { toggleSidebar, toggleAuthModal } from 'store/modules/base';
import { removeUser } from 'store/modules/auth';
import { Header } from 'components';

const BaseTemplateContainer: React.FunctionComponent = React.memo(() => {
  const dispatch = useDispatch();
  const isShowSidebar = useSelector((state: RootState) => state.base.isShowSidebar);
  const isMobile = useSelector((state: RootState) => state.base.isMobile);
  const { user, isLogged } = useSelector((state: RootState) => state.auth);

  const dispatchToggleAuthModal = React.useCallback(
    (bool: boolean) => () => dispatch(toggleAuthModal(bool)),
    [dispatch],
  );

  const dispatchToggleSidebar = React.useCallback(
    (bool: boolean) => () => dispatch(toggleSidebar(bool)),
    [dispatch],
  );

  const closeSidebar = React.useCallback(() => {
    if (!isMobile) dispatch(toggleSidebar(false));
  }, [dispatch, isMobile]);

  const logOut = React.useCallback(async () => {
    try {
      await logoutUserApi();
      dispatch(removeUser());
    } catch (err) {
      const message = errorHandler(err);
      alert(message);
    }
  }, [dispatch]);

  return (
    <Header
      visible={isShowSidebar}
      isMobile={isMobile}
      user={user}
      isLogged={isLogged}
      logOut={logOut}
      dispatchToggleAuthModal={dispatchToggleAuthModal}
      dispatchToggleSidebar={dispatchToggleSidebar}
      closeSidebar={closeSidebar}
    />
  );
});

export default BaseTemplateContainer;
