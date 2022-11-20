import { useEffect } from 'react';

import { useCheckBreakPoint } from 'hooks';
import { IcSearch, IcLogo } from 'assets/svgs';
import { baseActions, useAppSelector, useAppDispatch } from 'stores';
import { breakPoints } from 'styles';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { HeaderWrapper, LogoWrapper, RightWrapper } from './header.styles';
import { Button, SearchInput, Hamburger } from '../common';
import AuthButton from './AuthButton';

interface Navigation {
  text: string;
  to: string;
}
export const navigations: Navigation[] = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Develop', to: '/develop' },
  { text: 'Log', to: '/log' },
];

function Header() {
  const dispatch = useAppDispatch();

  const isShowSidebar = useAppSelector((state) => state.base.isShowSidebar);

  const isMobile = useCheckBreakPoint('<=', breakPoints.MD);

  const toggleSidebar = () => {
    dispatch(baseActions.showSidebar(!isShowSidebar));
  };

  useEffect(() => {
    if (isMobile || !isShowSidebar) return;
    dispatch(baseActions.showSidebar(false));
  }, [dispatch, isShowSidebar, isMobile]);

  return (
    <HeaderWrapper>
      <LogoWrapper to="/">
        <IcLogo />
      </LogoWrapper>
      {!isMobile && (
        <>
          <DesktopNav />
          <RightWrapper>
            <SearchInput placeholder="검색어를 입력해주세요!" />
            <AuthButton />
          </RightWrapper>
        </>
      )}
      {isMobile && (
        <>
          <MobileNav toggleSidebar={toggleSidebar} />
          <RightWrapper>
            <Button shape="icon3" className="searchIcon">
              <IcSearch />
            </Button>
            <Hamburger
              active={isShowSidebar}
              toggleHamburger={toggleSidebar}
              className="hamburgerIcon"
            />
          </RightWrapper>
        </>
      )}
    </HeaderWrapper>
  );
}

export default Header;
