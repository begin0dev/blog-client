import { MouseEventHandler } from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'stores';
import { palette, themes } from 'styles';
import { navigations } from './Header';
import Drawer from '../common/drawer';
import AuthButton from './AuthButton';

interface Props {
  toggleSidebar: () => void;
}

function MobileNav({ toggleSidebar }: Props) {
  const navigate = useNavigate();

  const isShowSidebar = useAppSelector((state) => state.base.isShowSidebar);

  const onClickLink: MouseEventHandler<HTMLButtonElement> = (e) => {
    toggleSidebar();
    navigate(e.currentTarget.dataset!.path as string);
  };

  return (
    <Drawer position="right" active={isShowSidebar} hideOverlay>
      <SidebarWrapper>
        {navigations.map((nav) => (
          <li key={nav.text}>
            <LinkBtn data-path={nav.to} onClick={onClickLink}>
              {nav.text}
            </LinkBtn>
          </li>
        ))}
        <AuthButton />
      </SidebarWrapper>
    </Drawer>
  );
}

export default MobileNav;

const SidebarWrapper = styled.ul`
  height: 100%;
  width: 310px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: ${themes.BACKGROUND_L1};
`;
const LinkBtn = styled.button`
  width: 100%;
  height: 50px;
  display: block;
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
  color: ${palette.gray0};
`;
