import * as React from 'react';

import * as authStore from 'store/modules/auth';
import { IAuthForm } from 'containers/AuthContainer';
import SignUpForm from './AuthForm/SignUpForm';
import { AuthBlock, AuthRowBlock, AuthTitle } from './Auth.styles';

interface IProps {
  formName: authStore.FormNameTypes;
  authFormValues: IAuthForm;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Auth: React.FunctionComponent<IProps> = React.memo(({ authFormValues, formName, setAuthFormValue }) => (
  <AuthBlock>
    <AuthRowBlock>
      <AuthTitle>SignUp</AuthTitle>
    </AuthRowBlock>
    <AuthRowBlock>
      <SignUpForm authFormValues={authFormValues} setAuthFormValue={setAuthFormValue} />
    </AuthRowBlock>
  </AuthBlock>
));

export default Auth;
