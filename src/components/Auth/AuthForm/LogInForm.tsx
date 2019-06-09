import * as React from 'react';
import { FaArrowRight, FaFacebook as Facebook, FaGithub as Github, FaGooglePlusSquare as Google } from 'react-icons/fa';

import { Kakao } from 'assets/svgs';
import { IAuthState } from 'store/modules/auth';
import { palette } from 'styles/palette';
import { IAuthForm } from 'containers/AuthContainer';
import { TextInput } from 'components';
import { AuthButton, AuthColBlock, ButtonBlock, FormWrap } from '../Auth.styles';

interface IProps {
  authState: IAuthState;
  authFormValues: IAuthForm;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpForm: React.FunctionComponent<IProps> = ({ authState, authFormValues, setAuthFormValue }) => (
  <FormWrap>
    <AuthColBlock>
      <TextInput
        type="text"
        name="email"
        label="Email"
        value={authFormValues.email}
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
    <ButtonBlock>
      <AuthButton type="button">CONTINUE</AuthButton>
    </ButtonBlock>
  </FormWrap>
);

export default SignUpForm;
