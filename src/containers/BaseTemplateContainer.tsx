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

class BaseTemplateContainer extends React.Component<IProps> {
  toggleSidebar = (bool: boolean) => {
    const { dispatchToggleSidebar } = this.props;
    dispatchToggleSidebar(bool);
  };
  displayAuthForm = (formName: 'signUp' | 'logIn') => {
    const { dispatchChangeAuthForm, dispatchToggleAuthForm } = this.props;
    dispatchChangeAuthForm(formName);
    dispatchToggleAuthForm(true);
  };

  render() {
    const { displayAuthForm, toggleSidebar } = this;
    const { isTablet, sidebar } = this.props.baseState;
    return (
      <Header visible={sidebar} isTablet={isTablet} displayAuthForm={displayAuthForm} toggleSidebar={toggleSidebar} />
    );
  }
}

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
