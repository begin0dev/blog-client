import * as React from 'react';

import { Logo } from 'assets/svgs';
import { FormNameTypes } from 'store/modules/auth';
import { IUserState } from 'store/modules/user';
import { Overlay, Hamburger } from 'components';
import Nav from './Nav';
import BeforeLogin from './Right/BeforeLogin';
import AfterLogin from './Right/AfterLogin';
import { HeaderBlock, Wrapper, Left, LogoWrapper } from './Header.styles';

interface IProps {
  isTablet: boolean;
  visible: boolean;
  userState: IUserState;
  logOut: () => void;
  toggleSidebar: (bool: boolean) => () => void;
  toggleAuthForm: (formName: FormNameTypes) => () => void;
}

const Header: React.FunctionComponent<IProps> = React.memo(
  ({ isTablet, visible, userState, logOut, toggleAuthForm, toggleSidebar }) => (
    <HeaderBlock>
      <Wrapper>
        <Left>
          <LogoWrapper to="/">
            <Logo />
          </LogoWrapper>
          {isTablet && <Overlay visible={visible} />}
          <Nav visible={visible} isTablet={isTablet} />
        </Left>
        {userState.isLogged ? <AfterLogin userState={userState} logOut={logOut} /> : <BeforeLogin toggleAuthForm={toggleAuthForm} />}
        {isTablet && <Hamburger visible={visible} toggleSidebar={toggleSidebar} />}
      </Wrapper>
    </HeaderBlock>
  ),
);

export default Header;
