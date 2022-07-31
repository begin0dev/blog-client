import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import { useCheckBreakPoint } from 'hooks';
import { IcSearch, IcLogo } from 'assets/svgs';
import { Hamburger } from 'components/common';
import { baseActions, useAppSelector, useAppDispatch } from 'stores';
import { breakPoints, includeMedia, sizes, themes, zIndexes } from 'styles';
import DesktopNav from './DesktopNav';
import SearchInput from '../common/searchInput';
import MobileNav from './MobileNav';
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

  const toggleSidebar = () => dispatch(baseActions.showSidebar(!isShowSidebar));

  useEffect(() => {
    if (isMobile || !isShowSidebar) return;
    dispatch(baseActions.showSidebar(false));
  }, [dispatch, isShowSidebar, isMobile]);

  return (
    <HeaderBlock>
      <Wrapper>
        <LogoBlock to="/">
          <IcLogo />
        </LogoBlock>
        {!isMobile && (
          <>
            <DesktopNav />
            <HeaderRight>
              <SearchInput placeholder="검색어를 입력해주세요!" />
              <AuthButton />
            </HeaderRight>
          </>
        )}
        {isMobile && (
          <>
            <MobileNav toggleSidebar={toggleSidebar} />
            <HeaderRight>
              <SearchIconBtn>
                <IcSearch />
              </SearchIconBtn>
              <HamburgerBlock>
                <Hamburger active={isShowSidebar} toggleHamburger={toggleSidebar} />
              </HamburgerBlock>
            </HeaderRight>
          </>
        )}
      </Wrapper>
    </HeaderBlock>
  );
}

export default Header;

const HeaderBlock = styled.nav`
  z-index: ${zIndexes.HEADER};
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${themes.BACKGROUND_L1};
  ${includeMedia('<=MD')} {
    height: ${sizes.MOBILE_HEADER}px;
  }
  ${includeMedia('>MD')} {
    height: ${sizes.DESKTOP_HEADER}px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  max-width: 1600px;
  padding: 0 35px;
  margin: 0 auto;
`;
// left
const LogoBlock = styled(NavLink)`
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

const hamburgerSize = '30px';
const SearchIconBtn = styled.button`
  background-color: transparent;
  line-height: 0;
  margin-right: calc(4px + ${hamburgerSize});
  > svg {
    font-size: 18px;
    color: ${themes.PRIMARY};
  }
`;
const HamburgerBlock = styled.div`
  z-index: ${zIndexes.HAMBURGER};
  position: fixed;
  top: 50%;
  right: 28px;
  transform: translateY(-50%);
  width: ${hamburgerSize};
  height: ${hamburgerSize};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: transparent;
  ${includeMedia('<=MD')} {
    top: calc(${sizes.MOBILE_HEADER}px / 2);
  }
  ${includeMedia('>MD')} {
    top: calc(${sizes.DESKTOP_HEADER}px / 2);
  }
`;
