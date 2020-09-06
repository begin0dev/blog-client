import React, { memo } from 'react';

import { User } from 'store/modules/auth';
import {
  LoginBtn,
  ProfileBtn,
  ProfileImgWrapper,
  LoginMenu,
  ProfileWrapper,
  ProfileImageWrapper,
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
      <ProfileImgWrapper>
        <img
          src="https://s.gravatar.com/avatar/6d0bbbddcac79e229b32706694b86afe?s=35&d=retro"
          alt="profile_image"
        />
      </ProfileImgWrapper>

      <LoginMenu>
        <ProfileWrapper>
          <ProfileImageWrapper>
            <img
              src="https://s.gravatar.com/avatar/6d0bbbddcac79e229b32706694b86afe?s=35&d=retro"
              alt="profile_image"
            />
          </ProfileImageWrapper>
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
