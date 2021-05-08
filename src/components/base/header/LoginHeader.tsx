import { useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { actions as baseActions } from 'store/base';
import { actions as userActions } from 'store/user';
import { ProfileImage } from 'components';
import { Bell } from 'assets/svgs';
import {
  LoginBtn,
  ProfileBtnWrapper,
  ProfileBtn,
  LoginMenu,
  ProfileWrapper,
  NotificationWrapper,
  EmptyNotification,
  SettingLink,
  LogoutWrapper,
  LogoutBtn,
} from './Header.styles';

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

  if (!isLogIn) return <LoginBtn onClick={showAuthModal}>로그인</LoginBtn>;

  return (
    <ProfileBtnWrapper ref={profileEl}>
      <ProfileBtn onClick={onClickProfileBtn}>
        <ProfileImage profileImage={user?.profileImage} size={35} round />
      </ProfileBtn>
      {isShowMenu && (
        <LoginMenu>
          <ProfileWrapper>
            <ProfileImage
              profileImage={user?.profileImage}
              styles={{ marginRight: '20px' }}
              size={48}
              round
            />
            <div>
              <h3>{user?.displayName}</h3>
              <SettingLink to="/settings">프로필 설정</SettingLink>
            </div>
          </ProfileWrapper>
          <NotificationWrapper>
            <EmptyNotification>
              <Bell />
              새로운 알림이 없습니다.
            </EmptyNotification>
          </NotificationWrapper>
          <LogoutWrapper>
            <LogoutBtn onClick={logOut}>로그아웃</LogoutBtn>
          </LogoutWrapper>
        </LoginMenu>
      )}
    </ProfileBtnWrapper>
  );
}

export default LoginHeaderContainer;
