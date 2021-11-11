import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import { IcSearch, Logo } from 'assets/svgs';
import { Hamburger } from 'components';
import { RootState } from '../../stores';
import { actions as baseActions } from '../../stores/base';
import { breakPoints, sizes, themes, zIndexes } from '../../styles/utils';
import { palette } from '../../styles/palette';
import DesktopNav from './DesktopNav';
import SearchInput from '../common/searchInput';
import useCheckBreakPoint from '../../lib/hooks/useCheckBreakPoint';
import MobileNav from './MobileNav';
import LoginButton from './LoginButton';

type TNavigations = { text: string; to: string };
export const navigations: TNavigations[] = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Develop', to: '/develop' },
  { text: 'Log', to: '/log' },
];

function Header() {
  const dispatch = useDispatch();

  const isShowSidebar = useSelector((state: RootState) => state.base.isShowSidebar);

  const isMobile = useCheckBreakPoint('<=', breakPoints.md);
  const toggleSidebar = () => dispatch(baseActions.onChangIsShowSidebar(!isShowSidebar));

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
              <LoginButton />
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
    color: ${palette.green9};
  }
`;
const HamburgerBlock = styled.div`
  z-index: ${zIndexes.HAMBURGER};
  position: fixed;
  top: calc(${sizes.HEADER}px / 2);
  right: 28px;
  transform: translateY(-50%);
  width: ${hamburgerSize};
  height: ${hamburgerSize};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.7);
`;
