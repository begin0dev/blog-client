import * as React from 'react';

import { User } from 'store/modules/auth';
import { LoginBtn, ProfileBtn, ProfileImgWrapper, LoginMenu } from './Header.styles';

interface IProps {
  user: User | null;
  isLogIn: boolean;
  logOut: () => void;
  dispatchToggleAuthModal: (bool: boolean) => () => void;
}

function LogIn({ user, isLogIn, logOut, dispatchToggleAuthModal }: IProps): JSX.Element {
  if (isLogIn)
    return (
      <ProfileBtn>
        <ProfileImgWrapper>
          <img
            src="https://s.gravatar.com/avatar/6d0bbbddcac79e229b32706694b86afe?s=33&d=retro"
            alt="profile_image"
          />
        </ProfileImgWrapper>

        <LoginMenu>test</LoginMenu>
      </ProfileBtn>
    );
  return <LoginBtn onClick={dispatchToggleAuthModal(true)}>LogIn</LoginBtn>;
}

export default React.memo(LogIn);
