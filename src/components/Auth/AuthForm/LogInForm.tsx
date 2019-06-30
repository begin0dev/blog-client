import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { palette } from 'styles/palette';
import { IAuthForm } from 'containers/AuthContainer';
import { TextInput } from 'components';
import { AuthButton, AuthColBlock, ButtonBlock, ChangeFormBlock, SocialTitleBlock } from '../Auth.styles';
import SocialButtons from './SocialButtons';
import * as authStore from '../../../store/modules/auth';

interface IProps {
  authFormValues: IAuthForm;
  authFormSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleAuthForm: (formName: authStore.FormNameTypes) => () => void;
}

const LoginForm: React.FunctionComponent<IProps> = React.memo(
  ({ authFormValues, authFormSubmit, setAuthFormValue, toggleAuthForm }) => (
    <>
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
      <SocialButtons />
      <ButtonBlock>
        <AuthButton type="submit" onClick={authFormSubmit}>
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
