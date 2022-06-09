import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import { navigations } from './Header';
import { themes } from 'styles';
import { cx } from 'lib/utils/helpers';

function DesktopNav() {
  return (
    <DesktopNavWrapper>
      {navigations.map((nav) => (
        <li key={nav.text}>
          <CustomNavLink to={nav.to} className={({ isActive }) => cx(['active', isActive])}>
            {nav.text}
          </CustomNavLink>
        </li>
      ))}
    </DesktopNavWrapper>
  );
}

export default DesktopNav;

const DesktopNavWrapper = styled.ul`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-left: 54px;
  align-items: center;
  li + li {
    margin-left: 40px;
  }
`;

const CustomNavLink = styled(NavLink)`
  position: relative;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 0;
  color: ${themes.TEXT_L2};
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
    background-color: ${themes.PRIMARY};
    transition: width 0.2s ease-in-out;
  }
  &.active {
    color: ${themes.PRIMARY};
    &:after {
      width: 90%;
    }
  }
`;
