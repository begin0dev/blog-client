import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import useForm from 'lib/hooks/useForm';
import { palette } from 'styles/palette';
import * as authStore from 'store/modules/auth';
import { IStoreState } from 'store/modules';
import { Auth, Modal } from 'components';

export interface IAuthForm {
  email: string;
  password: string;
  passwordConfirm: string;
  displayName: string;
}

interface IProps {
  authState: authStore.IAuthState;
  isMobile: boolean;
  dispatchToggleAuthForm: (formName: 'signUp' | 'logIn' | null) => void;
}

const AuthContainer: React.FunctionComponent<IProps> = ({ authState, isMobile, dispatchToggleAuthForm }) => {
  const [authFormValues, setAuthFormValue, ResetAuthForm] = useForm<IAuthForm>({
    email: '',
    password: '',
    passwordConfirm: '',
    displayName: '',
  });

  React.useEffect(() => {
    return () => {
      ResetAuthForm();
    };
  }, [ResetAuthForm]);

  const hideModal = React.useCallback((): void => {
    dispatchToggleAuthForm(null);
  }, [dispatchToggleAuthForm]);

  return (
    <Modal
      active={!!authState.formName}
      fullScreen={isMobile}
      size={{ width: '420px' }}
      backgroundColor={palette.black}
      hideModal={hideModal}
    >
      <Auth authState={authState} authFormValues={authFormValues} setAuthFormValue={setAuthFormValue} />
    </Modal>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  authState: state.auth,
  isMobile: state.base.isMobile,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchToggleAuthForm(formName: 'signUp' | 'logIn' | null) {
    return dispatch(authStore.toggleAuthForm(formName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthContainer);
