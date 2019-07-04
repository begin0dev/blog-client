import * as React from 'react';

import { Logo } from 'assets/svgs';
import { FormNameTypes } from 'store/modules/auth';
import { Overlay, Hamburger } from 'components';
import Nav from './Nav';
import { HeaderBlock, Wrapper, Left, Right, LogoWrapper, Button } from './Header.styles';

interface IProps {
  isTablet: boolean;
  visible: boolean;
  toggleSidebar: (bool: boolean) => () => void;
  toggleAuthForm: (formName: FormNameTypes) => () => void;
}

const Header: React.FunctionComponent<IProps> = React.memo(
  ({ isTablet, visible, toggleAuthForm, toggleSidebar }) => (
    <HeaderBlock>
      <Wrapper>
        <Left>
          <LogoWrapper to="/">
            <Logo />
          </LogoWrapper>
          {isTablet && <Overlay visible={visible} />}
          <Nav visible={visible} isTablet={isTablet} />
        </Left>
        <Right>
          <Button type="button" onClick={toggleAuthForm('logIn')}>
            Log In
          </Button>
          <Button type="button" className="sign-up" onClick={toggleAuthForm('signUp')}>
            Sign Up
          </Button>
          {isTablet && <Hamburger visible={visible} toggleSidebar={toggleSidebar} />}
        </Right>
      </Wrapper>
    </HeaderBlock>
  ),
);

export default Header;
