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
  dispatchToggleAuthForm: (formName: 'signUp' | 'logIn' | null) => void;
}

const AuthContainer: React.FunctionComponent<IProps> = ({ authState, isMobile, dispatchToggleAuthForm }) => {
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
    dispatchToggleAuthForm(null);
  }, [dispatchToggleAuthForm]);

  const setAuthFormValue = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      authFormChange(e);
    },
    [authFormChange],
  );

  return (
    <Modal active={!!authState.formName} fullScreen={isMobile} size={{ width: '380px' }} hideModal={hideModal}>
      <Auth authState={authState} authForm={authForm} setAuthFormValue={setAuthFormValue} />
    </Modal>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  authState: state.auth,
  isMobile: state.base.isMobile,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchToggleAuthForm(formName: 'signUp' | 'logIn' | null) {
    return dispatch(authActions.toggleAuthForm(formName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthContainer);
