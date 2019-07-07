import * as React from 'react';
import { MdClose } from 'react-icons/md';

import { FormNameTypes } from 'store/modules/auth';
import { IAuthForm, IFormError } from 'containers/AuthContainer';
import SignUpForm from './AuthForm/SignUpForm';
import LogInForm from './AuthForm/LogInForm';
import { AuthBlock, AuthRowBlock, AuthTitle, FormWrap, CloseButton } from './Auth.styles';

export interface IPropsBase {
  authFormValue: IAuthForm;
  authFormError: IFormError;
  submitError: string | null;
  isSubmitLoading: boolean;
  authFormSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onBlurEvent: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleAuthForm: (formName: FormNameTypes) => () => void;
}

interface IProps extends IPropsBase {
  formName: FormNameTypes;
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
    isSubmitLoading,
    toggleAuthForm,
  }) => (
    <AuthBlock>
      <AuthRowBlock>
        <AuthTitle>{formName}</AuthTitle>
        <CloseButton type="button">
          <MdClose />
        </CloseButton>
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
            isSubmitLoading={isSubmitLoading}
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
            isSubmitLoading={isSubmitLoading}
            toggleAuthForm={toggleAuthForm}
          />
        )}
      </FormWrap>
    </AuthBlock>
  ),
);

export default Auth;
