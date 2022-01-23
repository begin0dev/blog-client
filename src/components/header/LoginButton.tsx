import styled from 'styled-components/macro';

import { useAppDispatch, useAppSelector, userActions, baseActions } from '../../stores';
import { baseButtonCSS } from '../../styles/baseCss';
import { palette } from '../../styles/palette';
import { includeMedia, themes } from '../../styles/utils';

function LoginButton() {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  const logOut = () => dispatch(userActions.logoutUser());
  const toggleAuthModal = () => dispatch(baseActions.toggleAuthModal());

  if (!isLoggedIn) return <LoginBtn onClick={toggleAuthModal}>로그인</LoginBtn>;
  return <LoginBtn onClick={logOut}>로그아웃</LoginBtn>;
}

export default LoginButton;

const LoginBtn = styled.button`
  ${baseButtonCSS};
  color: ${palette.white};
  background-color: ${themes.PRIMARY};
  border-radius: 18px;
  ${includeMedia('>md')} {
    font-size: 13px;
    padding: 7px 18px;
    margin-left: 18px;
  }
  ${includeMedia('<=md')} {
    font-size: 16px;
    padding: 8px 22px;
    margin: 26px 0;
  }
`;
