import { NavWrapper, NavBtn } from './Header.styles';

type TNavLink = { text: string; to: string; exact: boolean };
const navLinks: TNavLink[] = [
  { text: 'Home', to: '/', exact: true },
  { text: 'About', to: '/about', exact: false },
  { text: 'Develop', to: '/develop', exact: false },
  { text: 'Log', to: '/log', exact: false },
];

function Nav() {
  return (
    <NavWrapper>
      {navLinks.map((nav) => (
        <NavBtn to={nav.to} key={nav.text} exact={nav.exact} activeClassName="current">
          {nav.text}
        </NavBtn>
      ))}
    </NavWrapper>
  );
}

export default Nav;
