import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IStoreState } from 'store/modules';
import { IBaseState } from '../store/modules/base';
import { IAuthState, Actions as authActions } from 'store/modules/auth';
import { Auth, Modal } from 'components';

interface IProps {
  authState: IAuthState;
  baseState: IBaseState;
  dispatchSetAuthFormValue: (name: string, value: string) => void;
  dispatchChangeAuthForm: (formName: 'signUp' | 'logIn') => void;
  dispatchToggleAuthForm: (bool: boolean) => void;
}

class AuthContainer extends React.Component<IProps> {
  setAuthFormValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const { dispatchSetAuthFormValue } = this.props;
    dispatchSetAuthFormValue(name, value);
  };

  render() {
    const {
      authState,
      baseState: { isMobile },
    } = this.props;
    const { setAuthFormValue } = this;
    return (
      <Modal active={authState.state.active} fullScreen={isMobile} size={{ width: '800px' }}>
        <Auth authState={authState} setAuthFormValue={setAuthFormValue} />
      </Modal>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  authState: state.auth,
  baseState: state.base,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchSetAuthFormValue(name: string, value: string) {
    return dispatch(authActions.setAuthFormValue({ name, value }));
  },
  dispatchChangeAuthForm(formName: 'signUp' | 'logIn') {
    return dispatch(authActions.changeAuthForm(formName));
  },
  dispatchToggleAuthForm(bool: boolean) {
    return dispatch(authActions.toggleAuthForm(bool));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthContainer);
