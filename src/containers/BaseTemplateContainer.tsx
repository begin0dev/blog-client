import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as authStore from 'store/modules/auth';
import * as baseStore from 'store/modules/base';
import { IStoreState } from 'store/modules';
import { Header } from 'components';

const BaseTemplateContainer: React.FunctionComponent = React.memo(() => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state: IStoreState) => state.base.sidebar);
  const isTablet = useSelector((state: IStoreState) => state.base.isTablet);

  const toggleSidebar = React.useCallback(
    (bool: boolean) => () => dispatch(baseStore.toggleSidebar(bool)),
    [dispatch],
  );

  const toggleAuthForm = React.useCallback(
    (formName: authStore.FormNameTypes) => () => dispatch(authStore.toggleAuthForm(formName)),
    [dispatch],
  );

  return <Header visible={sidebar} isTablet={isTablet} toggleAuthForm={toggleAuthForm} toggleSidebar={toggleSidebar} />;
});

export default BaseTemplateContainer;
