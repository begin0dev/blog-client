import { MouseEventHandler } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../stores';
import { palette } from '../../styles/palette';
import { navLinks } from './Header';
import { baseButtonCSS } from '../../styles/baseCss';
import Drawer from '../common/drawer/Drawer';

interface IProps {
  toggleSidebar: () => void;
  toggleAuthModal: () => void;
}

function MobileNav({ toggleSidebar, toggleAuthModal }: IProps) {
  const history = useHistory();

  const isShowSidebar = useSelector((state: RootState) => state.base.isShowSidebar);

  const onClickLink: MouseEventHandler<HTMLButtonElement> = (e) => {
    toggleSidebar();
    history.push(e.currentTarget.dataset!.path as string);
  };

  return (
    <Drawer position="left" active={isShowSidebar} hideOverlay>
      <SidebarWrapper>
        {navLinks.map((nav) => (
          <LinkBtn data-path={nav.to} onClick={onClickLink} key={nav.text}>
            {nav.text.toUpperCase()}
          </LinkBtn>
        ))}
        <LoginBtn onClick={toggleAuthModal}>로그인</LoginBtn>
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
const LoginBtn = styled.button`
  ${baseButtonCSS};
  font-size: 16px;
  width: 100px;
  height: 38px;
  color: ${palette.white};
  background-color: ${palette.green9};
  border-radius: 18px;
  margin: 26px 0;
`;
