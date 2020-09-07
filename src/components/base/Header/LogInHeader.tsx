import React, { memo } from 'react';

import { User } from 'store/modules/auth';
import { ProfileImage } from 'components';
import {
  LoginBtn,
  ProfileBtn,
  LoginMenu,
  ProfileWrapper,
  SettingLink,
  LogoutWrapper,
  LogoutBtn,
} from './Header.styles';

interface IProps {
  user: User | null;
  isLogIn: boolean;
  logOut: () => void;
  showAuthModal: () => void;
}

function LogInHeader({ user, isLogIn, showAuthModal, logOut }: IProps): JSX.Element {
  if (!isLogIn) return <LoginBtn onClick={showAuthModal}>LogIn</LoginBtn>;
  return (
    <ProfileBtn>
      <ProfileImage profileImage={user?.profileImage} size={35} round />

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
        <div>test</div>
        <LogoutWrapper>
          <LogoutBtn onClick={logOut}>Logout</LogoutBtn>
        </LogoutWrapper>
      </LoginMenu>
    </ProfileBtn>
  );
}

export default memo(LogInHeader);
