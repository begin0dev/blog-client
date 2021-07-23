import { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Logo } from 'assets/svgs';
import { actions as userActions } from 'stores/user';
import { HeaderBlock, LogoBlock, Wrapper, HeaderRight, LoginBtn } from './Header.styles';
import { RootState } from '../../stores';
import { actions as baseActions } from '../../stores/base';
import Nav from './Nav';
import SearchInput from '../common/searchInput';
import useCheckBreakPoint from '../../lib/hooks/useCheckBreakPoint';
import { breakPoints } from '../../styles/utils';
import { Hamburger } from 'components';

function Header() {
  const dispatch = useDispatch();

  const { isLogIn } = useSelector((state: RootState) => state.user, shallowEqual);
  const isTablet = useCheckBreakPoint('<=', breakPoints.md);

  const showAuthModal = useCallback(() => dispatch(baseActions.toggleAuthModal()), [dispatch]);
  const logOut = useCallback(() => dispatch(userActions.logoutUser()), [dispatch]);

  return (
    <HeaderBlock>
      <Wrapper>
        <LogoBlock to="/">
          <Logo />
        </LogoBlock>
        {!isTablet && (
          <>
            <Nav />
            <HeaderRight>
              <SearchInput placeholder="검색어를 입력해주세요!" />
              {!isLogIn && <LoginBtn onClick={showAuthModal}>로그인</LoginBtn>}
              {isLogIn && <LoginBtn onClick={logOut}>로그아웃</LoginBtn>}
            </HeaderRight>
          </>
        )}
        {isTablet && (
          <HeaderRight>
            <Hamburger active={false} toggleHamburger={console.log} />
          </HeaderRight>
        )}
      </Wrapper>
    </HeaderBlock>
  );
}

export default Header;
