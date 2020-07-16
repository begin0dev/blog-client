import * as React from 'react';

import { Logo } from 'assets/svgs';
import { User } from 'store/modules/auth';

import { HeaderBlock, Wrapper, LogoBlock } from './Header.styles';
import LogIn from './LogIn';
import Nav from './Nav';

interface IProps {
  isMobile: boolean;
  user: User | null;
  isLogIn: boolean;
  logOut: () => void;
  dispatchToggleAuthModal: (bool: boolean) => () => void;
}

function Header({ isMobile, user, isLogIn, logOut, dispatchToggleAuthModal }: IProps): JSX.Element {
  return (
    <HeaderBlock>
      <Wrapper>
        <LogoBlock to="/">
          <Logo />
        </LogoBlock>
        {!isMobile && <Nav />}
        <LogIn
          user={user}
          isLogIn={isLogIn}
          logOut={logOut}
          dispatchToggleAuthModal={dispatchToggleAuthModal}
        />
      </Wrapper>
      {isMobile && <Nav />}
    </HeaderBlock>
  );
}

export default React.memo(Header);
