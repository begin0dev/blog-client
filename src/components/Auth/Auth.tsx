import * as React from 'react';

import * as authStore from 'store/modules/auth';
import { IAuthForm } from 'containers/AuthContainer';
import SignUpForm from './AuthForm/SignUpForm';
import LogInForm from './AuthForm/LogInForm';
import { AuthBlock, AuthRowBlock, AuthTitle } from './Auth.styles';

interface IProps {
  formName: authStore.FormNameTypes;
  authFormValues: IAuthForm;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Auth: React.FunctionComponent<IProps> = React.memo(({ formName, authFormValues, setAuthFormValue }) => (
  <AuthBlock>
    <AuthRowBlock>
      <AuthTitle>{formName}</AuthTitle>
    </AuthRowBlock>
    <AuthRowBlock>
      {formName === 'signUp' && <SignUpForm authFormValues={authFormValues} setAuthFormValue={setAuthFormValue} />}
      {formName === 'logIn' && <LogInForm authFormValues={authFormValues} setAuthFormValue={setAuthFormValue} />}
    </AuthRowBlock>
  </AuthBlock>
));

export default Auth;
