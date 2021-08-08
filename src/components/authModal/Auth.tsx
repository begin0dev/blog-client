import qs from 'qs';
import { memo, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components/macro';

import { Modal } from 'components';
import { ArrowLeft, Facebook, Github, Google, Kakao, Logo } from 'assets/svgs';
import { RootState } from '../../stores';
import { breakPoints, includeMedia } from '../../styles/utils';
import { actions as baseActions } from '../../stores/base';
import { baseURL } from '../../lib/services/apiClient';
import { V1_SOCIALS_URL } from '../../lib/services/auth';
import { actions as userActions } from '../../stores/user';
import { palette } from '../../styles/palette';
import { pulseKeyframes } from '../../styles/baseCss';
import useToasts from '../common/toast/useToasts';
import useCheckBreakPoint from '../../lib/hooks/useCheckBreakPoint';

function Auth() {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLogIn = useSelector((state: RootState) => state.user.isLogIn);
  const isShowModal = useSelector((state: RootState) => state.base.isShowAuthModal);

  const { addToast } = useToasts({ duration: 4500 });
  const isFullScreen = useCheckBreakPoint('<=', breakPoints.sm);

  const hideModal = useCallback(() => dispatch(baseActions.toggleAuthModal()), [dispatch]);

  const socialRedirect = useCallback(
    (provider: 'kakao' | 'facebook' | 'github' | 'google') => () => {
      sessionStorage.setItem('referer', history.location.pathname);
      window.location.href = `${baseURL}${V1_SOCIALS_URL}/${provider}`;
    },
    [history.location.pathname],
  );

  useEffect(() => {
    const referer = sessionStorage.getItem('referer');
    if (!referer) {
      dispatch(userActions.checkUser());
      return;
    }

    const { message, verify_code } = qs.parse(history.location.search, { ignoreQueryPrefix: true });
    if (verify_code) dispatch(userActions.verifyUser(verify_code as string));
    if (message) {
      addToast('error', message as string);
      dispatch(baseActions.toggleAuthModal());
    }
    if (history.location.pathname !== referer) {
      sessionStorage.removeItem('referer');
      return;
    }
    history.replace(referer);
  }, [dispatch, history, addToast]);

  if (isLogIn) return null;
  return (
    <Modal
      active={isShowModal}
      fullScreen={isFullScreen}
      hideModal={hideModal}
      size={{ width: '390px' }}
    >
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
          </SocialBlock>
        </SectionBottomBlock>
      </AuthBlock>
    </Modal>
  );
}

export default memo(Auth);

const flexCss = css`
  display: flex;
  flex: 1;
`;

const AuthBlock = styled.div`
  ${flexCss};
  position: relative;
  flex-flow: column wrap;
  justify-content: space-between;
  background-color: ${palette.gray0};
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
  margin-bottom: 55px;
  margin-left: -3px;
  svg {
    color: ${palette.gray6};
    font-size: 26px;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const WelcomeBlock = styled.div`
  ${flexCss};
  flex-flow: column wrap;
  font-size: 20px;
  font-weight: 400;
  color: #333;
  letter-spacing: -0.01em;
  div + div {
    margin-top: 5px;
  }
`;
const LogoWrapper = styled.span`
  line-height: 0;
  margin-right: 7px;
  svg {
    height: 30px;
    margin-top: -5px;
    margin-bottom: -3px;
  }
`;
const StartHeader = styled.h2`
  font-size: 18px;
  margin-bottom: 3px;
`;
const SocialDescBlock = styled.div`
  font-size: 13px;
  color: ${palette.gray7};
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
    color: ${palette.gray9};
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
