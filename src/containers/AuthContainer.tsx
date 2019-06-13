import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

const AuthContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const formName = useSelector((state: IStoreState) => state.auth.formName);
  const isMobile = useSelector((state: IStoreState) => state.base.isMobile);

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
    dispatch(authStore.toggleAuthForm(null));
  }, [dispatch]);

  return (
    <Modal
      active={!!formName}
      fullScreen={isMobile}
      size={{ width: '420px' }}
      backgroundColor={palette.black}
      hideModal={hideModal}
    >
      <Auth formName={formName} authFormValues={authFormValues} setAuthFormValue={setAuthFormValue} />
    </Modal>
  );
};

export default AuthContainer;
