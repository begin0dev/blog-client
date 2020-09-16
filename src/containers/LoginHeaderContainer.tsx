import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/modules';
import { setLoadingPercent, toggleAuthModal } from 'store/modules/base';
import { removeUser } from 'store/modules/auth';
import { logoutUserApi } from 'lib/services/user';
import { errorHandler } from 'lib/utils/errorHandler';
import LogInHeader from 'components/base/Header/LogInHeader';

function LoginHeaderContainer(): JSX.Element | null {
  const dispatch = useDispatch();

  const profileEl = useRef<HTMLDivElement | null>(null);

  const { user, isLogIn } = useSelector((state: RootState) => state.auth, shallowEqual);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showAuthModal = () => dispatch(toggleAuthModal(true));

  const logOut = async () => {
    try {
      dispatch(setLoadingPercent(0));
      await logoutUserApi();
      dispatch(removeUser());
    } catch (err) {
      const message = errorHandler(err);
      console.error(message);
    } finally {
      dispatch(setLoadingPercent(100));
    }
  };

  const onClickProfileBtn = () => setIsShowMenu((prevState) => !prevState);

  useEffect(() => {
    const outSideClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'A') setIsShowMenu(false);
      if (!profileEl.current?.contains(e.target as HTMLElement)) setIsShowMenu(false);
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
