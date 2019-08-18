import * as React from 'react';

import { palette } from 'styles/palette';
import { TextInput } from 'components';
import { ArrowRight } from 'assets/svgs';
import { IPropsBase } from '../Auth';
import { AuthButton, AuthColBlock, ButtonBlock, ChangeFormBlock, SocialTitleBlock } from '../Auth.styles';
import SocialButtons from './SocialButtons';

interface IProps extends IPropsBase {
  socialRedirect: (provider: 'kakao' | 'facebook') => void;
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
    socialRedirect,
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
      <SocialButtons socialRedirect={socialRedirect} />
      <ButtonBlock>
        <AuthButton type="submit" onClick={authFormSubmit} disabled={isSubmitLoading}>
          CONTINUE
          <ArrowRight />
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
