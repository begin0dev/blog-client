import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IStoreState } from 'store/modules';
import { Header } from 'components';
import { Actions as baseActions, IBaseState } from 'store/modules/base';
import { Actions as authActions } from '../store/modules/auth';

interface IProps {
  baseState: IBaseState;
  dispatchChangeAuthForm: (formName: 'signUp' | 'logIn') => void;
  dispatchToggleAuthForm: (bool: boolean) => void;
  dispatchToggleSidebar: (bool: boolean) => void;
}

const BaseTemplateContainer: React.FunctionComponent<IProps> = React.memo(({
  baseState: { sidebar, isTablet },
  dispatchChangeAuthForm,
  dispatchToggleAuthForm,
  dispatchToggleSidebar,
}) => {
  const toggleSidebar = React.useCallback(
    (bool: boolean): void => {
      dispatchToggleSidebar(bool);
    },
    [dispatchToggleSidebar],
  );

  const displayAuthForm = React.useCallback(
    (formName: 'signUp' | 'logIn'): void => {
      dispatchChangeAuthForm(formName);
      dispatchToggleAuthForm(true);
    },
    [dispatchChangeAuthForm, dispatchToggleAuthForm],
  );

  return (
    <Header visible={sidebar} isTablet={isTablet} displayAuthForm={displayAuthForm} toggleSidebar={toggleSidebar} />
  );
});

const mapStateToProps = (state: IStoreState) => ({
  baseState: state.base,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchChangeAuthForm(formName: 'signUp' | 'logIn') {
    return dispatch(authActions.changeAuthForm(formName));
  },
  dispatchToggleAuthForm(bool: boolean) {
    return dispatch(authActions.toggleAuthForm(bool));
  },
  dispatchToggleSidebar(bool: boolean) {
    return dispatch(baseActions.toggleSidebar(bool));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseTemplateContainer);
