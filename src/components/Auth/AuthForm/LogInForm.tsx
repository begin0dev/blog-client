import * as React from 'react';
import { FaArrowRight, FaFacebook as Facebook, FaGithub as Github, FaGooglePlus as Google } from 'react-icons/fa';

import { Kakao } from 'assets/svgs';
import { palette } from 'styles/palette';
import { IAuthForm } from 'containers/AuthContainer';
import { TextInput } from 'components';
import {
  AuthButton,
  AuthColBlock,
  SocialTitleBlock,
  SocialIconBlock,
  SocialButton,
  ButtonBlock,
  FormWrap,
  ChangeFormBlock,
} from '../Auth.styles';

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
      <SocialButton type="button">
        <Facebook />
      </SocialButton>
      <SocialButton type="button">
        <Github />
      </SocialButton>
      <SocialButton type="button">
        <Google />
      </SocialButton>
      <SocialButton type="button">
        <Kakao />
      </SocialButton>
    </SocialIconBlock>
    <ButtonBlock>
      <AuthButton type="button">
        CONTINUE
        <FaArrowRight />
      </AuthButton>
    </ButtonBlock>
    <ChangeFormBlock>
      {`Don't have an account?`}
      <span>Sign up</span>
    </ChangeFormBlock>
  </FormWrap>
);

export default LoginForm;
