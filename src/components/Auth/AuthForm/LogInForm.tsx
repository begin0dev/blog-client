import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { FormNameTypes } from 'store/modules/auth';
import { palette } from 'styles/palette';
import { IAuthForm, IFormError } from 'containers/AuthContainer';
import { TextInput } from 'components';
import { AuthButton, AuthColBlock, ButtonBlock, ChangeFormBlock, SocialTitleBlock } from '../Auth.styles';
import SocialButtons from './SocialButtons';

interface IProps {
  authFormValue: IAuthForm;
  authFormError: IFormError;
  submitError: string | null;
  isSubmitLoading: boolean;
  authFormSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onBlurEvent: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleAuthForm: (formName: FormNameTypes) => () => void;
}

const LoginForm: React.FunctionComponent<IProps> = React.memo(
  ({
    authFormValue,
    authFormError,
    authFormSubmit,
    onChangeEvent,
    onBlurEvent,
    submitError,
    isSubmitLoading,
    toggleAuthForm,
  }) => (
    <>
      <AuthColBlock>
        <TextInput
          type="text"
          name="email"
          label="Email"
          value={authFormValue.email}
          error={!!authFormError.email}
          message={authFormError.email}
          color={palette.white}
          defaultBorderColor={palette.white}
          onBlur={onBlurEvent}
          onChange={onChangeEvent}
        />
      </AuthColBlock>
      <AuthColBlock>
        <TextInput
          type="password"
          name="password"
          label="Password"
          value={authFormValue.password}
          error={!!authFormError.password || !!submitError}
          message={submitError || authFormError.password}
          color={palette.white}
          defaultBorderColor={palette.white}
          onBlur={onBlurEvent}
          onChange={onChangeEvent}
        />
      </AuthColBlock>
      <SocialTitleBlock>Sign in with</SocialTitleBlock>
      <SocialButtons />
      <ButtonBlock>
        <AuthButton type="submit" onClick={authFormSubmit} disabled={isSubmitLoading}>
          CONTINUE
          <FaArrowRight />
        </AuthButton>
      </ButtonBlock>
      <ChangeFormBlock>
        {`Don't have an account?`}
        <span onClick={toggleAuthForm('signUp')}>Sign Up</span>
      </ChangeFormBlock>
    </>
  ),
);

export default LoginForm;
