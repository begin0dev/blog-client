import { navLinks } from './Header';
import { DesktopNavWrapper, NavBtn } from './Header.styles';

function DesktopNav() {
  return (
    <DesktopNavWrapper>
      {navLinks.map((nav) => (
        <NavBtn to={nav.to} key={nav.text} exact={nav.exact} activeClassName="current">
          {nav.text}
        </NavBtn>
      ))}
    </DesktopNavWrapper>
  );
}

export default DesktopNav;
