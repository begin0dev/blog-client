import React, { memo } from 'react';

import { User } from 'store/modules/auth';
import { ProfileImage } from 'components';
import { Bell } from 'assets/svgs';
import {
  LoginBtn,
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

function LogInHeader({
  user,
  isLogIn,
  isShowMenu,
  logOut,
  showAuthModal,
  onClickProfileBtn,
}: IProps): JSX.Element {
  if (!isLogIn) return <LoginBtn onClick={showAuthModal}>LogIn</LoginBtn>;
  return (
    <div>
      <ProfileBtn onClick={onClickProfileBtn}>
        <ProfileImage profileImage={user?.profileImage} size={35} round />
      </ProfileBtn>
      {isShowMenu && (
        <LoginMenu>
          <ProfileWrapper>
            <ProfileImage
              profileImage={user?.profileImage}
              size={48}
              styles={{ marginRight: '20px' }}
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
    </div>
  );
}

export default memo(LogInHeader);
