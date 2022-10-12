import { styled } from '@stitches/react';

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
    <CustomButton color="primary" round onClick={onClick}>
      {isLoggedIn ? '로그아웃' : '로그인'}
    </CustomButton>
  );
}

export default AuthButton;

const CustomButton = styled(Button, {
  '&&': {
    width: 90,

    [includeMedia('>MD')]: {
      marginLeft: 18,
    },

    [includeMedia('<=MD')]: {
      margin: '26px 0',
    },
  },
});
