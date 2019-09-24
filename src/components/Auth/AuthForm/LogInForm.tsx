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
          label="이메일"
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
          label="비밀번호"
          value={authFormValue.password}
          error={!!authFormError.password || !!submitError}
          message={submitError || authFormError.password}
          color={palette.white}
          defaultBorderColor={palette.white}
          onBlur={onBlurEvent}
          onChange={onChangeEvent}
        />
      </AuthColBlock>
      <SocialTitleBlock>소셜 계정으로 로그인하기</SocialTitleBlock>
      <SocialButtons socialRedirect={socialRedirect} />
      <ButtonBlock>
        <AuthButton type="submit" onClick={authFormSubmit} disabled={isSubmitLoading}>
          계속하기
          <ArrowRight />
        </AuthButton>
      </ButtonBlock>
      <ChangeFormBlock>
        계정이 없으신가요?
        <span onClick={toggleAuthForm('signUp')}>회원가입</span>
      </ChangeFormBlock>
    </>
  ),
);

export default LoginForm;
