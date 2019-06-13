import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IStoreState } from 'store/modules';
import * as authStore from 'store/modules/auth';
import * as baseStore from 'store/modules/base';
import { Header } from 'components';
import { FormNameTypes } from 'store/modules/auth';

const BaseTemplateContainer: React.FunctionComponent = React.memo(() => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state: IStoreState) => state.base.sidebar);
  const isTablet = useSelector((state: IStoreState) => state.base.isTablet);

  const toggleSidebar = React.useCallback(
    (bool: boolean): void => {
      dispatch(baseStore.toggleSidebar(bool));
    },
    [dispatch],
  );

  const displayAuthForm = React.useCallback(
    (formName: authStore.FormNameTypes): void => {
      dispatch(authStore.toggleAuthForm(formName));
    },
    [dispatch],
  );

  return (
    <Header visible={sidebar} isTablet={isTablet} displayAuthForm={displayAuthForm} toggleSidebar={toggleSidebar} />
  );
});

export default BaseTemplateContainer;
