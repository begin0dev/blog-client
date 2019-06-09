import * as React from 'react';

import { IAuthForm } from 'containers/AuthContainer';
import { IAuthState } from 'store/modules/auth';
import { AuthBlock, AuthRowBlock, AuthTitle } from './Auth.styles';
import SignUpForm from './AuthForm/SignUpForm';

interface IProps {
  authState: IAuthState;
  authFormValues: IAuthForm;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Auth: React.FunctionComponent<IProps> = React.memo(({ authFormValues, authState, setAuthFormValue }) => (
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
