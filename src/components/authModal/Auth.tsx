import { MouseEventHandler, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useToast from '../common/toast/useToast';
import { Modal, Button } from 'components/common';
import { IcArrowLeft, IcFacebook, IcGithub, IcGoogle, IcKakao } from 'assets/svgs';
import { baseActions, userActions, useAppSelector, useAppDispatch } from 'stores';
import { V1_SOCIALS_URL } from 'lib/services/auth';
import { useQueryString } from 'hooks/useQueryString';
import { ActionWrapper, AuthWrapper, SocialButton, WelcomeWrapper } from './auth.styles';

const SOCIAL_PROVIDER = {
  KAKAO: 'kakao',
  FACEBOOK: 'facebook',
  GITHUB: 'github',
  GOOGLE: 'google',
} as const;

function Auth() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [{ message, verify_code }] = useQueryString<{ message?: string; verify_code?: string }>();

  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const isShowModal = useAppSelector((state) => state.base.isShowAuthModal);

  const { addToast } = useToast();

  const hideModal = () => dispatch(baseActions.hideAuthModal());

  const socialRedirect: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { value } = e.currentTarget;
    sessionStorage.setItem('referer', pathname);
    window.location.href = `${import.meta.env.VITE_SERVER_URL}${V1_SOCIALS_URL}/${value}`;
  };

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

    const STORAGE_KEY = 'begin0devReferrer';
    const referer = sessionStorage.getItem(STORAGE_KEY) || '/';
    sessionStorage.removeItem(STORAGE_KEY);
    navigate(referer, { replace: true });
  }, [dispatch, pathname, navigate, message, verify_code, addToast]);

  if (isLoggedIn) return null;
  return (
    <Modal
      active={isShowModal}
      onClose={hideModal}
      styles={{ width: '390px', height: '640px' }}
      showOverlay
    >
      <AuthWrapper>
        <Button shape="icon3" onClick={hideModal} className="backButton">
          <IcArrowLeft />
        </Button>
        <WelcomeWrapper>
          <p>안녕하세요!</p>
          <p>
            <span className="name">비기너 </span>블로그에
          </p>
          <p>오신 것을 환영합니다!</p>
        </WelcomeWrapper>
        <ActionWrapper>
          <h2>시작하기</h2>
          <p>소셜 미디어를 통해 편하게 로그인 하세요.</p>
          <div className="socialButtons">
            <SocialButton
              provider={SOCIAL_PROVIDER.FACEBOOK}
              value={SOCIAL_PROVIDER.FACEBOOK}
              onClick={socialRedirect}
            >
              <IcFacebook />
            </SocialButton>
            <SocialButton
              provider={SOCIAL_PROVIDER.GOOGLE}
              value={SOCIAL_PROVIDER.GOOGLE}
              onClick={socialRedirect}
            >
              <IcGoogle />
            </SocialButton>
            <SocialButton
              provider={SOCIAL_PROVIDER.KAKAO}
              value={SOCIAL_PROVIDER.KAKAO}
              onClick={socialRedirect}
            >
              <IcKakao />
            </SocialButton>
            <SocialButton
              provider={SOCIAL_PROVIDER.GITHUB}
              value={SOCIAL_PROVIDER.GITHUB}
              onClick={socialRedirect}
            >
              <IcGithub />
            </SocialButton>
          </div>
        </ActionWrapper>
      </AuthWrapper>
    </Modal>
  );
}

export default Auth;
