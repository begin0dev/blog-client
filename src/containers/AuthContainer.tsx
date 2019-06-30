import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as authStore from 'store/modules/auth';
import useForm from 'lib/hooks/useForm';
import { palette } from 'styles/palette';
import { IStoreState } from 'store/modules';
import { Auth, Modal } from 'components';

export interface IAuthForm {
  email: string;
  password: string;
  passwordConfirm: string;
  displayName: string;
}

const AuthContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const formName = useSelector((state: IStoreState) => state.auth.formName);
  const isMobile = useSelector((state: IStoreState) => state.base.isMobile);

  const modalSize = React.useRef<{ width: string }>({ width: '390px' });
  const [authFormValues, setAuthFormValue, ResetAuthForm] = useForm<IAuthForm>({
    email: '',
    password: '',
    passwordConfirm: '',
    displayName: '',
  });

  const hideModal = React.useCallback(() => {
    dispatch(authStore.toggleAuthForm(null));
  }, [dispatch]);

  const toggleAuthForm = React.useCallback(
    (form: authStore.FormNameTypes) => () => dispatch(authStore.toggleAuthForm(form)),
    [dispatch],
  );

  const authFormSubmit = React.useCallback(e => {
    e.preventDefault();
    console.log('test');
  }, []);

  React.useEffect(() => {
    return () => ResetAuthForm();
  }, [ResetAuthForm]);

  return (
    <Modal
      active={!!formName}
      fullScreen={isMobile}
      size={modalSize.current}
      backgroundColor={palette.black}
      hideModal={hideModal}
    >
      <Auth
        formName={formName}
        authFormValues={authFormValues}
        authFormSubmit={authFormSubmit}
        setAuthFormValue={setAuthFormValue}
        toggleAuthForm={toggleAuthForm}
      />
    </Modal>
  );
};

export default AuthContainer;
