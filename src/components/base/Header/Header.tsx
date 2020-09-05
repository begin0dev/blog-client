import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store/modules';
import { Logo } from 'assets/svgs';
import { LoginHeaderContainer } from 'containers';
import { HeaderBlock, LogoBlock, Wrapper } from './Header.styles';
import Nav from './Nav';

function Header(): JSX.Element {
  const isMobile = useSelector((state: RootState) => state.base.isMobile);

  return (
    <HeaderBlock>
      <Wrapper>
        <LogoBlock to="/">
          <Logo />
        </LogoBlock>
        {!isMobile && <Nav />}
        <LoginHeaderContainer />
      </Wrapper>
      {isMobile && <Nav />}
    </HeaderBlock>
  );
}

export default Header;
