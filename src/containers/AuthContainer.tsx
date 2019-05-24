import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IStoreState } from 'store/modules';
import { IAuthState, Actions as authActions } from 'store/modules/auth';
import { Auth, Modal } from 'components';
import useForm from 'lib/hooks/useForm';

export interface IAuthForm {
  email: string;
  password: string;
  passwordCheck: string;
  displayName: string;
}

interface IProps {
  authState: IAuthState;
  isMobile: boolean;
  dispatchChangeAuthForm: (formName: 'signUp' | 'logIn') => void;
  dispatchToggleAuthForm: (bool: boolean) => void;
}

const AuthContainer: React.FunctionComponent<IProps> = ({
  authState,
  isMobile,
  dispatchChangeAuthForm,
  dispatchToggleAuthForm,
}) => {
  const [authForm, authFormChange, authFormReset] = useForm<IAuthForm>({
    email: '',
    password: '',
    passwordCheck: '',
    displayName: '',
  });

  React.useEffect(() => {
    return () => {
      authFormReset();
    };
  }, [authFormReset]);

  const hideModal = React.useCallback((): void => {
    dispatchToggleAuthForm(false);
  }, [dispatchToggleAuthForm]);

  const setAuthFormValue = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      authFormChange(e);
    },
    [authFormChange],
  );

  return (
    <Modal active={authState.active} fullScreen={isMobile} size={{ width: '380px' }} hideModal={hideModal}>
      <Auth authState={authState} authForm={authForm} setAuthFormValue={setAuthFormValue} />
    </Modal>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  authState: state.auth,
  isMobile: state.base.isMobile,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
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
