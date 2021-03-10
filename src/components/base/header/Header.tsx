import { Logo } from 'assets/svgs';
import { LoginHeaderContainer } from 'containers';
import { HeaderBlock, LogoBlock, Wrapper, HeaderRight } from './Header.styles';
import Nav from './Nav';

function Header() {
  return (
    <HeaderBlock>
      <Wrapper>
        <LogoBlock to="/">
          <Logo />
        </LogoBlock>
        <Nav />
        <HeaderRight>
          <LoginHeaderContainer />
        </HeaderRight>
      </Wrapper>
    </HeaderBlock>
  );
}

export default Header;
