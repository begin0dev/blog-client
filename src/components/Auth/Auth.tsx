import * as React from 'react';

import { Logo } from 'assets/svgs';
import { IAuthForm } from 'containers/AuthContainer';
import { IAuthState } from 'store/modules/auth';
import { AuthBlock, Wrapper, LogoRow, LogoDiv } from './Auth.styles';

interface IProps {
  authState: IAuthState;
  authForm: IAuthForm;
  setAuthFormValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Auth: React.FunctionComponent<IProps> = ({ authForm, authState, setAuthFormValue }) => (
  <AuthBlock>
    <Wrapper>
      <LogoRow>
        <LogoDiv>
          <Logo />
        </LogoDiv>
      </LogoRow>
    </Wrapper>
  </AuthBlock>
);

export default React.memo(Auth);
