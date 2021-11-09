import { MouseEventHandler } from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../stores';
import { palette } from '../../styles/palette';
import { navLinks } from './Header';
import Drawer from '../common/drawer';
import LoginButton from './LoginButton';

interface IProps {
  toggleSidebar: () => void;
}

function MobileNav({ toggleSidebar }: IProps) {
  const navigate = useNavigate();

  const isShowSidebar = useSelector((state: RootState) => state.base.isShowSidebar);

  const onClickLink: MouseEventHandler<HTMLButtonElement> = (e) => {
    toggleSidebar();
    navigate(e.currentTarget.dataset!.path as string);
  };

  return (
    <Drawer position="left" active={isShowSidebar} hideOverlay>
      <SidebarWrapper>
        {navLinks.map((nav) => (
          <LinkBtn data-path={nav.to} onClick={onClickLink} key={nav.text}>
            {nav.text}
          </LinkBtn>
        ))}
        <LoginButton />
      </SidebarWrapper>
    </Drawer>
  );
}

export default MobileNav;

const SidebarWrapper = styled.div`
  height: 100%;
  width: 310px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: ${palette.gray9};
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
