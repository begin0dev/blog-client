import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { IcSearch, Logo } from 'assets/svgs';
import { actions as userActions } from 'stores/user';
import { Hamburger } from 'components';
import { RootState } from '../../stores';
import { actions as baseActions } from '../../stores/base';
import { breakPoints, sizes, themes, zIndexes } from '../../styles/utils';
import { palette } from '../../styles/palette';
import { baseButtonCSS } from '../../styles/baseCss';
import DesktopNav from './DesktopNav';
import SearchInput from '../common/searchInput';
import useCheckBreakPoint from '../../lib/hooks/useCheckBreakPoint';

type TNavLink = { text: string; to: string; exact: boolean };
export const navLinks: TNavLink[] = [
  { text: 'Home', to: '/', exact: true },
  { text: 'About', to: '/about', exact: false },
  { text: 'Develop', to: '/develop', exact: false },
  { text: 'Log', to: '/log', exact: false },
];

function Header() {
  const dispatch = useDispatch();

  const isMobile = useCheckBreakPoint('<=', breakPoints.md);
  const isLogIn = useSelector((state: RootState) => state.user.isLogIn);
  const isShowSidebar = useSelector((state: RootState) => state.base.isShowSidebar);

  const logOut = useCallback(() => dispatch(userActions.logoutUser()), [dispatch]);
  const toggleAuthModal = useCallback(() => dispatch(baseActions.toggleAuthModal()), [dispatch]);
  const onToggleSidebar = useCallback(() => {
    dispatch(baseActions.onChangIsShowSidebar(!isShowSidebar));
  }, [dispatch, isShowSidebar]);

  useEffect(() => {
    if (isMobile || !isShowSidebar) return;
    dispatch(baseActions.onChangIsShowSidebar(false));
  }, [dispatch, isShowSidebar, isMobile]);

  return (
    <HeaderBlock>
      <Wrapper>
        <LogoBlock to="/">
          <Logo />
        </LogoBlock>
        {!isMobile && (
          <>
            <DesktopNav />
            <HeaderRight>
              <SearchInput placeholder="검색어를 입력해주세요!" />
              {!isLogIn && <LoginBtn onClick={toggleAuthModal}>로그인</LoginBtn>}
              {isLogIn && <LoginBtn onClick={logOut}>로그아웃</LoginBtn>}
            </HeaderRight>
          </>
        )}
        {isMobile && (
          <HeaderRight>
            <SearchIconBtn>
              <IcSearch />
            </SearchIconBtn>
            <HamburgerBlock>
              <Hamburger active={isShowSidebar} toggleHamburger={onToggleSidebar} />
            </HamburgerBlock>
          </HeaderRight>
        )}
      </Wrapper>
    </HeaderBlock>
  );
}

export default Header;

const HeaderBlock = styled.header`
  z-index: ${zIndexes.HEADER};
  position: relative;
  height: ${sizes.HEADER}px;
  width: 100%;
  background-color: ${themes.HEADER};
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  max-width: 1400px;
  padding: 0 35px;
  margin: 0 auto;
`;
// left
const LogoBlock = styled(NavLink)`
  margin-right: 55px;
  line-height: 0;
  svg {
    height: 36px;
    margin-top: -8px;
  }
`;
// right
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const hamburgerSize = '34px';
const SearchIconBtn = styled.button`
  background-color: transparent;
  line-height: 0;
  margin-right: calc(4px + ${hamburgerSize});
  > svg {
    font-size: 18px;
    color: ${palette.green9};
  }
`;
const HamburgerBlock = styled.div`
  z-index: ${zIndexes.HAMBURGER};
  position: fixed;
  top: calc(${sizes.HEADER}px / 2);
  transform: translateY(-50%);
  right: 28px;
  width: ${hamburgerSize};
  height: ${hamburgerSize};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.7);
`;
const LoginBtn = styled.button`
  ${baseButtonCSS};
  font-size: 13px;
  color: ${palette.white};
  background-color: ${palette.green9};
  border-radius: 18px;
  padding: 7px 18px;
  margin-left: 18px;
`;
