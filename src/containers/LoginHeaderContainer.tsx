import { useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { actions as baseActions } from 'store/base';
import { actions as userActions } from 'store/user';
import LogInHeader from 'components/base/header/LogInHeader';

function LoginHeaderContainer() {
  const dispatch = useDispatch();

  const profileEl = useRef<HTMLDivElement | null>(null);

  const { user, isLogIn } = useSelector((state: RootState) => state.user, shallowEqual);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showAuthModal = useCallback(() => dispatch(baseActions.toggleAuthModal(true)), [dispatch]);
  const logOut = useCallback(() => dispatch(userActions.logoutUser()), [dispatch]);

  const onClickProfileBtn = useCallback(() => setIsShowMenu((prevState) => !prevState), []);

  useEffect(() => {
    const outSideClick = (e: MouseEvent) => {
      const dom = e.target as HTMLElement;
      if (dom.tagName === 'A' || !profileEl.current?.contains(dom)) setIsShowMenu(false);
    };

    if (isShowMenu) document.addEventListener('click', outSideClick);
    return () => {
      if (isShowMenu) document.removeEventListener('click', outSideClick);
    };
  }, [isShowMenu]);

  return (
    <LogInHeader
      user={user}
      isLogIn={isLogIn}
      isShowMenu={isShowMenu}
      logOut={logOut}
      showAuthModal={showAuthModal}
      onClickProfileBtn={onClickProfileBtn}
      ref={profileEl}
    />
  );
}

export default LoginHeaderContainer;
