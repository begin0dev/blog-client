import { Logo } from 'assets/svgs';
import { HeaderBlock, LogoBlock, Wrapper, HeaderRight } from './Header.styles';
import Nav from './Nav';
import LoginHeader from './LoginHeader';

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
