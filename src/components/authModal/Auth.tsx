import qs from 'qs';
import { memo, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from 'components';
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
import { RootState } from '../../stores';
import useToasts from '../common/toast/useToasts';
import useCheckBreakPoint from '../../lib/hooks/useCheckBreakPoint';
import { breakPoints } from '../../styles/utils';
import { actions as baseActions } from '../../stores/base';
import { baseURL } from '../../lib/services/apiClient';
import { V1_SOCIALS_URL } from '../../lib/services/auth';
import { actions as userActions } from '../../stores/user';
import { palette } from '../../styles/palette';

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
      backgroundColor={palette.gray0}
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
