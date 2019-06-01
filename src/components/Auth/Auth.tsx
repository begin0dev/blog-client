import * as React from 'react';

import { IAuthForm } from 'containers/AuthContainer';
import { IAuthState } from 'store/modules/auth';
import { AuthBlock, AuthRowBlock, AuthTitle, FormWrap } from './Auth.styles';
import SignUpForm from './AuthForm/SignUpForm';

interface IProps {
  authState: IAuthState;
  authForm: IAuthForm;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Auth: React.FunctionComponent<IProps> = React.memo(({ authForm, authState, setAuthFormValue }) => (
  <AuthBlock>
    <AuthRowBlock>
      <AuthTitle>SignUp</AuthTitle>
    </AuthRowBlock>
    <SignUpForm authForm={authForm} setAuthFormValue={setAuthFormValue} />
    <AuthRowBlock>test</AuthRowBlock>
  </AuthBlock>
));

export default Auth;
