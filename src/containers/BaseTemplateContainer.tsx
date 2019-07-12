import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FormNameTypes, AuthActions } from 'store/modules/auth';
import { BaseActions } from 'store/modules/base';
import { IStoreState } from 'store/modules';
import { Header } from 'components';

const BaseTemplateContainer: React.FunctionComponent = React.memo(() => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state: IStoreState) => state.base.sidebar);
  const isTablet = useSelector((state: IStoreState) => state.base.isTablet);
  const userState = useSelector((state: IStoreState) => state.user);

  const toggleSidebar = React.useCallback(
    (bool: boolean) => () => dispatch(BaseActions.toggleSidebar(bool)),
    [dispatch],
  );

  const toggleAuthForm = React.useCallback(
    (formName: FormNameTypes) => () => dispatch(AuthActions.toggleAuthForm(formName)),
    [dispatch],
  );

  return (
    <Header
      visible={sidebar}
      isTablet={isTablet}
      userState={userState}
      toggleAuthForm={toggleAuthForm}
      toggleSidebar={toggleSidebar}
    />
  );
});

export default BaseTemplateContainer;
