import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { navLinks } from './Header';
import { palette } from '../../styles/palette';

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

const DesktopNavWrapper = styled.div`
  display: flex;
  align-items: center;
  a + a {
    margin-left: 40px;
  }
`;

const NavBtn = styled(NavLink)`
  position: relative;
  font-size: 15px;
  font-weight: 600;
  padding: 8px 0;
  color: ${palette.gray6};
  user-select: none;
  margin: 0 2px;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    width: 0;
    margin: 0 auto;
    border-radius: 2px;
    background-color: ${palette.green9};
    transition: width 0.2s ease-in-out;
  }
  &.current {
    color: ${palette.green9};
    &:after {
      width: 90%;
    }
  }
`;
