import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'stores';
import { palette } from 'styles';
import { navigations } from './Header';
import { Drawer } from '../common';
import AuthButton from './AuthButton';
import { MobileCustomLink, MobileNavWrapper } from './header.styles';

interface Props {
  toggleSidebar: () => void;
}

function MobileNav({ toggleSidebar }: Props) {
  const navigate = useNavigate();

  const isShowSidebar = useAppSelector((state) => state.base.isShowSidebar);

  const onClickLink: MouseEventHandler<HTMLButtonElement> = (e) => {
    toggleSidebar();
    navigate(e.currentTarget.value);
  };

  return (
    <Drawer position="right" active={isShowSidebar}>
      <MobileNavWrapper>
        {navigations.map((nav) => (
          <li key={nav.text}>
            <MobileCustomLink value={nav.to} onClick={onClickLink}>
              {nav.text}
            </MobileCustomLink>
          </li>
        ))}
        <AuthButton />
      </MobileNavWrapper>
    </Drawer>
  );
}

export default MobileNav;
