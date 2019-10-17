import * as React from 'react';

import { Logo } from 'assets/svgs';
import { User } from 'store/modules/auth';

import { Overlay, Hamburger } from 'components';
import Nav from './Nav';
import BeforeLogin from './Right/BeforeLogin';
import AfterLogin from './Right/AfterLogin';
import { HeaderBlock, Wrapper, Left, LogoWrapper } from './Header.styles';

interface IProps {
  isMobile: boolean;
  visible: boolean;
  user: User | null;
  isLogged: boolean;
  logOut: () => void;
  closeSidebar: () => void;
  dispatchToggleAuthModal: (bool: boolean) => () => void;
  dispatchToggleSidebar: (bool: boolean) => () => void;
}

const Header: React.FunctionComponent<IProps> = React.memo(
  ({ isMobile, visible, user, isLogged, logOut, closeSidebar, dispatchToggleAuthModal, dispatchToggleSidebar }) => (
    <HeaderBlock>
      <Wrapper>
        <Left>
          <LogoWrapper to="/">
            <Logo />
          </LogoWrapper>
          {isMobile && <Overlay visible={visible} onClick={closeSidebar} />}
          <Nav visible={visible} isMobile={isMobile} />
        </Left>
        {isLogged ? (
          <AfterLogin user={user} logOut={logOut} />
        ) : (
          <BeforeLogin dispatchToggleAuthModal={dispatchToggleAuthModal} />
        )}
        {isMobile && <Hamburger visible={visible} dispatchToggleSidebar={dispatchToggleSidebar} />}
      </Wrapper>
    </HeaderBlock>
  ),
);

export default Header;
