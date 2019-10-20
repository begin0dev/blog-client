import React from 'react';

import { ArrowLeft } from 'assets/svgs';
import {
  AuthBlock,
  SectionTopBlock,
  SectionBottomBlock,
  BackButton,
  WelcomeBlock,
  StartHeader,
  SocialDescBlock,
} from './Auth.styles';
import SocialButtons from './SocialButtons';

interface IProps {
  hideModal: () => void;
  socialRedirect: (provider: 'kakao' | 'facebook' | 'github' | 'google') => void;
}

const Auth: React.FunctionComponent<IProps> = React.memo(({ hideModal, socialRedirect }) => (
  <AuthBlock>
    <SectionTopBlock>
      <BackButton type="button" onClick={hideModal}>
        <ArrowLeft />
      </BackButton>
      <WelcomeBlock>
        <div>안녕하세요</div>
        <div>
          <span>BEGIN0DEV</span>
          블로그에
        </div>
        <div>오신것을 환영합니다.</div>
      </WelcomeBlock>
    </SectionTopBlock>
    <SectionBottomBlock>
      <StartHeader>시작하기</StartHeader>
      <SocialDescBlock>소셜 미디어를 통해 편하게 로그인 하세요</SocialDescBlock>
      <SocialButtons socialRedirect={socialRedirect} />
    </SectionBottomBlock>
  </AuthBlock>
));

export default Auth;
