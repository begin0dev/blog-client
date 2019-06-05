import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IStoreState } from 'store/modules';
import * as baseStore from 'store/modules/base';
import * as authStore from 'store/modules/auth';
import { Header } from 'components';

interface IProps {
  baseState: baseStore.IBaseState;
  dispatchToggleAuthForm: (formName: 'signUp' | 'logIn' | null) => void;
  dispatchToggleSidebar: (bool: boolean) => void;
}

const BaseTemplateContainer: React.FunctionComponent<IProps> = React.memo(
  ({ baseState: { sidebar, isTablet }, dispatchToggleAuthForm, dispatchToggleSidebar }) => {
    const toggleSidebar = React.useCallback(
      (bool: boolean): void => {
        dispatchToggleSidebar(bool);
      },
      [dispatchToggleSidebar],
    );

    const displayAuthForm = React.useCallback(
      (formName: 'signUp' | 'logIn' | null): void => {
        dispatchToggleAuthForm(formName);
      },
      [dispatchToggleAuthForm],
    );

    return (
      <Header visible={sidebar} isTablet={isTablet} displayAuthForm={displayAuthForm} toggleSidebar={toggleSidebar} />
    );
  },
);

const mapStateToProps = (state: IStoreState) => ({
  baseState: state.base,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchToggleAuthForm(formName: 'signUp' | 'logIn' | null) {
    return dispatch(authStore.toggleAuthForm(formName));
  },
  dispatchToggleSidebar(bool: boolean) {
    return dispatch(baseStore.toggleSidebar(bool));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseTemplateContainer);
