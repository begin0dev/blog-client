import * as React from 'react';
import { FaArrowRight, FaFacebook as Facebook, FaGithub as Github, FaGooglePlusSquare as Google } from 'react-icons/fa';

import { Kakao } from 'assets/svgs';
import { palette } from 'styles/palette';
import { IAuthForm } from 'containers/AuthContainer';
import { TextInput } from 'components';
import { AuthButton, AuthColBlock, SocialTitleBlock, SocialIconBlock, ButtonBlock, FormWrap } from '../Auth.styles';

interface IProps {
  authFormValues: IAuthForm;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm: React.FunctionComponent<IProps> = ({ authFormValues, setAuthFormValue }) => (
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
        color={palette.white}
        defaultBorderColor={palette.white}
        setValue={setAuthFormValue}
      />
    </AuthColBlock>
    <SocialTitleBlock>Sign in with</SocialTitleBlock>
    <SocialIconBlock>
      <Facebook />
      <Github />
      <Google />
      <Kakao />
    </SocialIconBlock>
    <ButtonBlock>
      <AuthButton type="button">
        CONTINUE
        <FaArrowRight />
      </AuthButton>
    </ButtonBlock>
  </FormWrap>
);

export default LoginForm;
