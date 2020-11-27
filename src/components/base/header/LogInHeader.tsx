import * as React from 'react';
import { forwardRef } from 'react';

import { User } from 'store/modules/user';
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

interface IProps {
  user: User | null;
  isLogIn: boolean;
  isShowMenu: boolean;
  logOut: () => void;
  showAuthModal: () => void;
  onClickProfileBtn: () => void;
}

function LogInHeader(
  { user, isLogIn, isShowMenu, logOut, showAuthModal, onClickProfileBtn }: IProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element {
  if (!isLogIn) return <LoginBtn onClick={showAuthModal}>LogIn</LoginBtn>;
  return (
    <ProfileBtnWrapper ref={ref}>
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
              <SettingLink to="/settings">Settings</SettingLink>
            </div>
          </ProfileWrapper>
          <NotificationWrapper>
            <EmptyNotification>
              <Bell />
              새로운 알림이 없습니다.
            </EmptyNotification>
          </NotificationWrapper>
          <LogoutWrapper>
            <LogoutBtn onClick={logOut}>Logout</LogoutBtn>
          </LogoutWrapper>
        </LoginMenu>
      )}
    </ProfileBtnWrapper>
  );
}

export default forwardRef(LogInHeader);
