import { memo } from 'react';

import { ArrowLeft, Facebook, Github, Google, Kakao, Logo } from 'assets/svgs';
import {
  AuthBlock,
  SectionTopBlock,
  SectionBottomBlock,
  BackButton,
  WelcomeBlock,
  LogoWrapper,
  StartHeader,
  SocialDescBlock,
  SocialBlock,
  SocialButton,
} from './Auth.styles';

interface IProps {
  hideModal: () => void;
  socialRedirect(provider: 'kakao' | 'facebook' | 'github' | 'google'): () => void;
}

function Auth({ hideModal, socialRedirect }: IProps) {
  return (
    <AuthBlock>
      <SectionTopBlock>
        <BackButton type="button" onClick={hideModal}>
          <ArrowLeft />
        </BackButton>
        <WelcomeBlock>
          <div>안녕하세요!</div>
          <div>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
            블로그에
          </div>
          <div>오신 것을 환영합니다!</div>
        </WelcomeBlock>
      </SectionTopBlock>
      <SectionBottomBlock>
        <StartHeader>시작하기</StartHeader>
        <SocialDescBlock>소셜 미디어를 통해 편하게 로그인 하세요</SocialDescBlock>
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
        </SocialBlock>{' '}
      </SectionBottomBlock>
    </AuthBlock>
  );
}

export default memo(Auth);
