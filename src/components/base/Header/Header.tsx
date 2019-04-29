import * as React from 'react';

import Navi from './Navi';
import { Logo } from 'assets/svgs';
import { Overlay, Hamburger } from 'components';
import { HeaderBlock, Wrapper, Left, Right, LogoWrapper, Button } from './Header.styles';

interface IProps {
  isTablet: boolean;
  visible: boolean;
  toggleSidebar: (bool: boolean) => void;
  displayAuthForm: (formName: 'signUp' | 'logIn') => void;
}

const Header: React.FunctionComponent<IProps> = React.memo(({ isTablet, visible, displayAuthForm, toggleSidebar }) => (
  <HeaderBlock>
    <Wrapper>
      <Left>
        <LogoWrapper to='/'>
          <Logo />
        </LogoWrapper>
        {isTablet && <Overlay visible={visible} />}
        <Navi visible={visible} isTablet={isTablet} />
      </Left>
      <Right>
        <Button type="button" onClick={() => displayAuthForm('logIn')}>
          Log In
        </Button>
        <Button type="button" className="sign-up" onClick={() => displayAuthForm('signUp')}>
          Sign Up
        </Button>
        {isTablet && <Hamburger visible={visible} toggleSidebar={toggleSidebar} />}
      </Right>
    </Wrapper>
  </HeaderBlock>
));

export default Header;
