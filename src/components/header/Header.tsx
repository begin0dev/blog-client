import Nav from './Nav';
import LoginHeader from './LoginHeader';
import { Logo } from 'assets/svgs';
import { HeaderBlock, LogoBlock, Wrapper, HeaderRight } from './Header.styles';

function Header() {
  return (
    <HeaderBlock>
      <Wrapper>
        <LogoBlock to="/">
          <Logo />
        </LogoBlock>
        <Nav />
        <HeaderRight>
          <LoginHeader />
        </HeaderRight>
      </Wrapper>
    </HeaderBlock>
  );
}

export default Header;
