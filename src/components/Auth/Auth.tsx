import * as React from 'react';

import { FormNameTypes } from 'store/modules/auth';
import { IAuthForm, IFormError } from 'containers/AuthContainer';
import SignUpForm from './AuthForm/SignUpForm';
import LogInForm from './AuthForm/LogInForm';
import { AuthBlock, AuthRowBlock, AuthTitle, FormWrap } from './Auth.styles';

interface IProps {
  authFormValue: IAuthForm;
  authFormError: IFormError;
  submitError: string | null;
  formName: FormNameTypes;
  authFormSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurEvent: (e: React.FocusEvent<HTMLInputElement>) => void;
  toggleAuthForm: (formName: FormNameTypes) => () => void;
}

const Auth: React.FunctionComponent<IProps> = React.memo(
  ({
    formName,
    authFormError,
    authFormValue,
    authFormSubmit,
    onChangeEvent,
    onBlurEvent,
    submitError,
    toggleAuthForm,
  }) => (
    <AuthBlock>
      <AuthRowBlock>
        <AuthTitle>{formName}</AuthTitle>
      </AuthRowBlock>
      <FormWrap>
        {formName === 'signUp' && (
          <SignUpForm
            authFormValue={authFormValue}
            authFormError={authFormError}
            authFormSubmit={authFormSubmit}
            onBlurEvent={onBlurEvent}
            onChangeEvent={onChangeEvent}
            submitError={submitError}
            toggleAuthForm={toggleAuthForm}
          />
        )}
        {formName === 'logIn' && (
          <LogInForm
            authFormValue={authFormValue}
            authFormError={authFormError}
            authFormSubmit={authFormSubmit}
            onBlurEvent={onBlurEvent}
            onChangeEvent={onChangeEvent}
            submitError={submitError}
            toggleAuthForm={toggleAuthForm}
          />
        )}
      </FormWrap>
    </AuthBlock>
  ),
);

export default Auth;
