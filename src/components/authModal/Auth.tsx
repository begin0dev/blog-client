import qs from 'qs';
import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

import type { ValueOf } from 'lib/utils/typescript-utils';
import { Modal } from 'components/common';
import { IcArrowLeft, IcFacebook, IcGithub, IcGoogle, IcKakao, IcLogo } from 'assets/svgs';
import { palette, pulseKeyframes, breakPoints, themes, includeMedia } from 'styles';
import { baseActions, userActions, useAppSelector, useAppDispatch } from 'stores';
import { V1_SOCIALS_URL } from 'lib/services/auth';
import { useCheckBreakPoint } from 'hooks';
import useToast from '../common/toast/useToast';

const SocialProvider = {
  KAKAO: 'kakao',
  FACEBOOK: 'facebook',
  GITHUB: 'github',
  GOOGLE: 'google',
} as const;

function Auth() {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const isShowModal = useAppSelector((state) => state.base.isShowAuthModal);

  const { addToast } = useToast();
  const isFullScreen = useCheckBreakPoint('<=', breakPoints.sm);

  const { message, verify_code }: { message?: string; verify_code?: string } = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const hideModal = () => dispatch(baseActions.hideAuthModal());

  const socialRedirect = useCallback(
    (provider: ValueOf<typeof SocialProvider>) => {
      sessionStorage.setItem('referer', pathname);
      window.location.href = `${process.env.REACT_APP_SERVER_URL}${V1_SOCIALS_URL}/${provider}`;
    },
    [pathname],
  );

  useEffect(() => {
    if (!verify_code) dispatch(userActions.checkUser());
  }, [dispatch, verify_code]);

  useEffect(() => {
    if (!message && !verify_code) return;

    if (verify_code) dispatch(userActions.verifyUser(verify_code));
    if (message) {
      addToast({ type: 'error', message });
      dispatch(baseActions.showAuthModal());
    }

    const referer = sessionStorage.getItem('referer') || '/';
    sessionStorage.removeItem('referer');
    navigate(referer, { replace: true });
  }, [dispatch, search, pathname, navigate, message, verify_code, addToast]);

  if (isLoggedIn) return null;
  return (
    <Modal
      active={isShowModal}
      fullScreen={isFullScreen}
      hideModal={hideModal}
      size={{ width: '390px' }}
      hideOverlay={false}
    >
      <AuthBlock>
        <BackButton type="button" onClick={hideModal}>
          <IcArrowLeft />
        </BackButton>
        <WelcomeBlock>
          <p>안녕하세요!</p>
          <p>
            <LogoWrapper>
              <IcLogo />
            </LogoWrapper>
            블로그에
          </p>
          <p>오신 것을 환영합니다!</p>
        </WelcomeBlock>
        <SectionBottomBlock>
          <StartHeader>시작하기</StartHeader>
          <SocialDescBlock>소셜 미디어를 통해 편하게 로그인 하세요</SocialDescBlock>
          <SocialBlock>
            <SocialButton
              className="facebook"
              onClick={() => socialRedirect(SocialProvider.FACEBOOK)}
            >
              <IcFacebook />
            </SocialButton>
            <SocialButton className="google">
              <IcGoogle />
            </SocialButton>
            <SocialButton className="kakao" onClick={() => socialRedirect(SocialProvider.KAKAO)}>
              <IcKakao />
            </SocialButton>
            <SocialButton className="github">
              <IcGithub />
            </SocialButton>
          </SocialBlock>
        </SectionBottomBlock>
      </AuthBlock>
    </Modal>
  );
}

export default Auth;

const flexCss = css`
  display: flex;
  flex: 1;
`;

const AuthBlock = styled.div`
  ${flexCss};
  position: relative;
  flex-flow: column wrap;
  justify-content: space-between;
  background-color: ${themes.BACKGROUND_L1};
  padding: 75px 35px;
  overflow-x: hidden;
  overflow-y: auto;
  ${includeMedia('<=sm')} {
    height: 100%;
  }
  ${includeMedia('>sm')} {
    min-height: 640px;
  }
`;
const SectionTopBlock = styled.div`
  ${flexCss};
  flex-flow: column wrap;
`;
const SectionBottomBlock = styled(SectionTopBlock)`
  justify-content: flex-end;
`;
const BackButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 100%;
  margin-left: -3px;
  svg {
    color: ${palette.GRAY1};
    font-size: 26px;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const WelcomeBlock = styled.div`
  ${flexCss};
  flex-flow: column wrap;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  color: ${palette.GRAY0};
  letter-spacing: -0.02em;
  p {
    margin: 0 0 8px;
  }
`;
const LogoWrapper = styled.span`
  line-height: 0;
  margin-right: 6px;
  svg {
    height: 30px;
    margin-top: -5px;
    margin-bottom: -3px;
  }
`;
const StartHeader = styled.h2`
  font-size: 18px;
  margin-bottom: 3px;
  color: ${themes.PRIMARY};
`;
const SocialDescBlock = styled.div`
  font-size: 13px;
  color: ${palette.GRAY1};
  margin-bottom: 20px;
`;
const SocialBlock = styled.div`
  display: flex;
  flex-flow: row wrap;
  button + button {
    margin-left: 20px;
  }
`;
const SocialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  overflow: hidden;
  &.facebook {
    background-color: #4267b2;
    color: #ffffff;
    svg {
      font-size: 20px;
    }
  }
  &.google {
    background-color: #ea4334;
    color: #ffffff;
    svg {
      font-size: 20px;
    }
  }
  &.kakao {
    background-color: #f7e600;
    color: #3c1e1e;
    svg {
      font-size: 28px;
    }
  }
  &.github {
    background-color: transparent;
    color: ${palette.GRAY0};
    svg {
      font-size: 42px;
    }
  }
  &:active {
    animation: ${pulseKeyframes} 0.3s;
  }
  &:hover,
  &:focus,
  &:active {
    opacity: 0.8;
  }
`;
