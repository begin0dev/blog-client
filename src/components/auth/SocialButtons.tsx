import React from 'react';

import { Facebook, Github, Google, Kakao } from 'assets/svgs';
import { SocialBlock, SocialButton } from './Auth.styles';

interface IProps {
  socialRedirect: (provider: 'kakao' | 'facebook' | 'github' | 'google') => void;
}

const SocialButtons: React.FunctionComponent<IProps> = React.memo(() => (
  <SocialBlock>
    <SocialButton className="facebook">
      <Facebook />
    </SocialButton>
    <SocialButton className="google">
      <Google />
    </SocialButton>
    <SocialButton className="kakao">
      <Kakao />
    </SocialButton>
    <SocialButton className="github">
      <Github />
    </SocialButton>
  </SocialBlock>
));

export default SocialButtons;
