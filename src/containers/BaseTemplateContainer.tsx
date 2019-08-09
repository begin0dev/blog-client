import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUserApi } from 'lib/services/user';
import { errorHandler } from 'lib/utils/errorHandler';
import { IStoreState } from 'store/modules';
import { BaseActions } from 'store/modules/base';
import { UserActions } from 'store/modules/user';
import { FormNameTypes, AuthActions } from 'store/modules/auth';
import { Header } from 'components';

const BaseTemplateContainer: React.FunctionComponent = React.memo(() => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state: IStoreState) => state.base.sidebar);
  const isTablet = useSelector((state: IStoreState) => state.base.isTablet);
  const userState = useSelector((state: IStoreState) => state.user);

  const toggleSidebar = React.useCallback(
    (bool: boolean) => () => {
      dispatch(BaseActions.toggleSidebar(bool));
    },
    [dispatch],
  );

  const closeSidebar = React.useCallback(() => {
    if (!isTablet) return;
    dispatch(BaseActions.toggleSidebar(false));
  }, [dispatch, isTablet]);

  const toggleAuthForm = React.useCallback(
    (formName: FormNameTypes) => () => dispatch(AuthActions.toggleAuthForm(formName)),
    [dispatch],
  );

  const logOut = React.useCallback(async () => {
    try {
      await logoutUserApi();
      dispatch(UserActions.removeUser());
    } catch (err) {
      const message = errorHandler(err);
      alert(message);
    }
  }, [dispatch]);

  return (
    <Header
      visible={sidebar}
      isTablet={isTablet}
      userState={userState}
      logOut={logOut}
      toggleAuthForm={toggleAuthForm}
      toggleSidebar={toggleSidebar}
      closeSidebar={closeSidebar}
    />
  );
});

export default BaseTemplateContainer;
