import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IcSearch, Logo } from 'assets/svgs';
import { actions as userActions } from 'stores/user';
import { Hamburger } from 'components';
import {
  HeaderBlock,
  LogoBlock,
  Wrapper,
  HeaderRight,
  LoginBtn,
  SearchIconBtn,
  HamburgerBlock,
} from './Header.styles';
import { RootState } from '../../stores';
import { actions as baseActions } from '../../stores/base';
import { breakPoints } from '../../styles/utils';
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
