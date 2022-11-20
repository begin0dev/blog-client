import cx from 'classnames';

import { navigations } from './Header';
import { DesktopNavWrapper, DesktopCustomLink } from './header.styles';

function DesktopNav() {
  return (
    <DesktopNavWrapper>
      {navigations.map((nav) => (
        <li key={nav.text}>
          <DesktopCustomLink
            to={nav.to}
            className={({ isActive }) => cx({ active: isActive })}
            end={nav.to === '/'}
          >
            {nav.text}
          </DesktopCustomLink>
        </li>
      ))}
    </DesktopNavWrapper>
  );
}

export default DesktopNav;
