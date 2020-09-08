import React, { memo } from 'react';

import { Facebook, Github, Google, Kakao } from 'assets/svgs';
import { SocialBlock, SocialButton } from './Auth.styles';

interface IProps {
  socialRedirect(provider: 'kakao' | 'facebook' | 'github' | 'google'): () => void;
}

function SocialButtons({ socialRedirect }: IProps): JSX.Element {
  return (
    <SocialBlock>
      <SocialButton className="facebook" onClick={socialRedirect('facebook')}>
        <Facebook />
      </SocialButton>
      <SocialButton className="google">
        <Google />
      </SocialButton>
      <SocialButton className="kakao" onClick={socialRedirect('kakao')}>
        <Kakao />
      </SocialButton>
      <SocialButton className="github">
        <Github />
      </SocialButton>
    </SocialBlock>
  );
}

export default memo(SocialButtons);
