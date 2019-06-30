import React from 'react';
import { FaFacebook as Facebook, FaGithub as Github, FaGooglePlus as Google } from 'react-icons/fa';

import { Kakao } from 'assets/svgs';
import { SocialButton, SocialIconBlock } from '../Auth.styles';

const SocialButtons = React.memo(() => (
  <SocialIconBlock>
    <SocialButton type="button">
      <Facebook />
    </SocialButton>
    <SocialButton type="button">
      <Github />
    </SocialButton>
    <SocialButton type="button">
      <Google />
    </SocialButton>
    <SocialButton type="button">
      <Kakao />
    </SocialButton>
  </SocialIconBlock>
));

export default SocialButtons;
