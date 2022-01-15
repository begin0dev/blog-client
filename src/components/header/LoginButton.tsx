import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { RootState } from '../../stores';
import { userActions } from '../../stores/user';
import { baseActions } from '../../stores/base';
import { baseButtonCSS } from '../../styles/baseCss';
import { palette } from '../../styles/palette';
import { includeMedia } from '../../styles/utils';

function LoginButton() {
  const dispatch = useDispatch();

  const isLogIn = useSelector((state: RootState) => state.user.isLogIn);

  const logOut = () => dispatch(userActions.logoutUser());
  const toggleAuthModal = () => dispatch(baseActions.toggleAuthModal());

  if (!isLogIn) return <LoginBtn onClick={toggleAuthModal}>로그인</LoginBtn>;
  return <LoginBtn onClick={logOut}>로그아웃</LoginBtn>;
}

export default LoginButton;

const LoginBtn = styled.button`
  ${baseButtonCSS};
  color: ${palette.white};
  background-color: ${palette.green9};
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
