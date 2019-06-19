import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { palette } from 'styles/palette';
import { TextInput } from 'components';
import { IAuthForm } from 'containers/AuthContainer';
import { FormWrap, AuthColBlock, ButtonBlock, AuthButton } from '../Auth.styles';

interface IProps {
  authFormValues: IAuthForm;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpForm: React.FunctionComponent<IProps> = React.memo(({ authFormValues, setAuthFormValue }) => (
  <FormWrap>
    <AuthColBlock>
      <TextInput
        type="text"
        name="displayName"
        label="Display Name"
        value={authFormValues.displayName}
        placeholder="닉네임으로 사용됩니다 (한글가능)"
        color={palette.white}
        defaultBorderColor={palette.white}
        setValue={setAuthFormValue}
      />
    </AuthColBlock>
    <AuthColBlock>
      <TextInput
        type="text"
        name="email"
        label="Email"
        value={authFormValues.email}
        placeholder="이메일을 입력해주세요 (아이디로 사용됩니다)"
        color={palette.white}
        defaultBorderColor={palette.white}
        setValue={setAuthFormValue}
      />
    </AuthColBlock>
    <AuthColBlock>
      <TextInput
        type="password"
        name="password"
        label="Password"
        value={authFormValues.password}
        placeholder="비밀번호를 입력해주세요 (영어+숫자 조합)"
        color={palette.white}
        defaultBorderColor={palette.white}
        setValue={setAuthFormValue}
      />
    </AuthColBlock>
    <AuthColBlock>
      <TextInput
        type="password"
        name="passwordConfirm"
        label="Password Confirm"
        value={authFormValues.passwordConfirm}
        placeholder="비밀번호를 한번 더 입력해주세요"
        color={palette.white}
        defaultBorderColor={palette.white}
        setValue={setAuthFormValue}
      />
    </AuthColBlock>
    <ButtonBlock>
      <AuthButton type="button">
        CONTINUE
        <FaArrowRight />
      </AuthButton>
    </ButtonBlock>
  </FormWrap>
));

export default SignUpForm;
