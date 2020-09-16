import * as React from 'react';
import { memo } from 'react';

import { ProfileImgWrapper } from './ProfileImage.styles';
import noProfileImage from '../../../assets/images/no_profile.png';

interface IProps {
  profileImage?: string;
  size?: number;
  round: boolean;
  styles?: object;
}

function ProfileImage({ profileImage, size = 35, round, styles = {} }: IProps): JSX.Element {
  return (
    <ProfileImgWrapper size={size} round={round} style={styles}>
      <img
        src={profileImage ? `${profileImage}?s=${size}&d=retro` : noProfileImage}
        alt="profile_image"
      />
    </ProfileImgWrapper>
  );
}

export default memo(ProfileImage);
