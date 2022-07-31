import styled from 'styled-components/macro';

import { useAppDispatch, useAppSelector, userActions, baseActions } from 'stores';
import { Button } from '../common';
import { includeMedia } from '../../styles';

function AuthButton() {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  const onClick = () => {
    if (isLoggedIn) dispatch(userActions.logoutUser());
    else dispatch(baseActions.showAuthModal());
  };

  return (
    <CustomButton shape="primary" round onClick={onClick}>
      {isLoggedIn ? '로그아웃' : '로그인'}
    </CustomButton>
  );
}

export default AuthButton;

const CustomButton = styled(Button)`
  && {
    width: 90px;
    ${includeMedia('>MD')} {
      margin-left: 18px;
    }
    ${includeMedia('<=MD')} {
      margin: 26px 0;
    }
  }
`;
