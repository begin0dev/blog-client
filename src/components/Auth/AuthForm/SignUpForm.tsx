import * as React from 'react';

import { ArrowRight } from 'assets/svgs';
import { palette } from 'styles/palette';
import { TextInput } from 'components';
import { IPropsBase } from '../Auth';
import { AuthColBlock, AuthButton, ButtonBlock, ChangeFormBlock } from '../Auth.styles';

const SignUpForm: React.FunctionComponent<IPropsBase> = React.memo(
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
          name="displayName"
          label="닉네임"
          value={authFormValue.displayName}
          error={!!authFormError.displayName}
          message={authFormError.displayName}
          placeholder="닉네임으로 사용됩니다 (한글가능)"
          color={palette.white}
          defaultBorderColor={palette.white}
          onBlur={onBlurEvent}
          onChange={onChangeEvent}
        />
      </AuthColBlock>
      <AuthColBlock>
        <TextInput
          type="text"
          name="email"
          label="이메일"
          value={authFormValue.email}
          error={!!authFormError.email}
          message={authFormError.email}
          placeholder="이메일을 입력해주세요 (아이디로 사용됩니다)"
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
          error={!!authFormError.password}
          message={authFormError.password}
          placeholder="비밀번호를 입력해주세요 (영어+숫자 조합)"
          color={palette.white}
          defaultBorderColor={palette.white}
          onBlur={onBlurEvent}
          onChange={onChangeEvent}
        />
      </AuthColBlock>
      <AuthColBlock>
        <TextInput
          type="password"
          name="passwordConfirm"
          label="비밀번호 재확인"
          value={authFormValue.passwordConfirm}
          error={!!authFormError.passwordConfirm || !!submitError}
          message={submitError || authFormError.passwordConfirm}
          placeholder="비밀번호를 한번 더 입력해주세요"
          color={palette.white}
          defaultBorderColor={palette.white}
          onBlur={onBlurEvent}
          onChange={onChangeEvent}
        />
      </AuthColBlock>
      <ButtonBlock>
        <AuthButton type="submit" onClick={authFormSubmit} disabled={isSubmitLoading}>
          계속하기
          <ArrowRight />
        </AuthButton>
      </ButtonBlock>
      <ChangeFormBlock>
        계정이 존재합니까?
        <span onClick={toggleAuthForm('logIn')}>로그인</span>
      </ChangeFormBlock>
    </>
  ),
);

export default SignUpForm;
