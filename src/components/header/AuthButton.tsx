import { useAppDispatch, useAppSelector, userActions, baseActions } from 'stores';
import { CustomAuthButton } from './header.styles';

function AuthButton() {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  const onClick = () => {
    if (isLoggedIn) dispatch(userActions.logoutUser());
    else dispatch(baseActions.showAuthModal());
  };

  return (
    <CustomAuthButton round onClick={onClick}>
      {isLoggedIn ? '로그아웃' : '로그인'}
    </CustomAuthButton>
  );
}

export default AuthButton;
