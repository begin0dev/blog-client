import * as React from 'react';

import { Kakao, Facebook, Github, Google } from 'assets/svgs';
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
