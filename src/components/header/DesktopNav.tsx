import styled from 'styled-components/macro';

import { navLinks } from './Header';
import { palette } from '../../styles/palette';
import { NavLink } from 'react-router-dom';

function DesktopNav() {
  return (
    <DesktopNavWrapper>
      {navLinks.map((nav) => (
        <CustomNavLink
          to={nav.to}
          key={nav.text}
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          {nav.text}
        </CustomNavLink>
      ))}
    </DesktopNavWrapper>
  );
}

export default DesktopNav;

const DesktopNavWrapper = styled.div`
  margin-left: 54px;
  display: flex;
  align-items: center;
  a + a {
    margin-left: 40px;
  }
`;

const CustomNavLink = styled(NavLink)`
  position: relative;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 0;
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
  &.active {
    color: ${palette.green9};
    &:after {
      width: 90%;
    }
  }
`;
