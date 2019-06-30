import * as React from 'react';

import * as authStore from 'store/modules/auth';
import { IAuthForm } from 'containers/AuthContainer';
import SignUpForm from './AuthForm/SignUpForm';
import LogInForm from './AuthForm/LogInForm';
import { AuthBlock, AuthRowBlock, AuthTitle, FormWrap } from './Auth.styles';

interface IProps {
  authFormValues: IAuthForm;
  formName: authStore.FormNameTypes;
  authFormSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleAuthForm: (formName: authStore.FormNameTypes) => () => void;
}

const Auth: React.FunctionComponent<IProps> = React.memo(
  ({ formName, authFormValues, authFormSubmit, setAuthFormValue, toggleAuthForm }) => (
    <AuthBlock>
      <AuthRowBlock>
        <AuthTitle>{formName}</AuthTitle>
      </AuthRowBlock>
      <FormWrap>
        {formName === 'signUp' && (
          <SignUpForm
            authFormValues={authFormValues}
            authFormSubmit={authFormSubmit}
            setAuthFormValue={setAuthFormValue}
            toggleAuthForm={toggleAuthForm}
          />
        )}
        {formName === 'logIn' && (
          <LogInForm
            authFormValues={authFormValues}
            authFormSubmit={authFormSubmit}
            setAuthFormValue={setAuthFormValue}
            toggleAuthForm={toggleAuthForm}
          />
        )}
      </FormWrap>
    </AuthBlock>
  ),
);

export default Auth;
