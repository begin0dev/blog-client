import React from 'react';
import { FaFacebook as Facebook, FaGithub as Github, FaGooglePlus as Google } from 'react-icons/fa';

import { Kakao } from 'assets/svgs';
import { SocialButton, SocialIconBlock } from '../Auth.styles';

interface IProps {
  socialRedirect: (provider: 'kakao' | 'facebook') => void;
}

const SocialButtons: React.FunctionComponent<IProps> = React.memo(({ socialRedirect }) => (
  <SocialIconBlock>
    <SocialButton type="button" onClick={() => socialRedirect('facebook')}>
      <Facebook />
    </SocialButton>
    <SocialButton type="button">
      <Github />
    </SocialButton>
    <SocialButton type="button">
      <Google />
    </SocialButton>
    <SocialButton type="button" onClick={() => socialRedirect('kakao')}>
      <Kakao />
    </SocialButton>
  </SocialIconBlock>
));

export default SocialButtons;
