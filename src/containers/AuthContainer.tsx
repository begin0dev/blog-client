import qs from 'qs';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from 'store';
import { actions as baseActions } from 'store/base';
import { actions as userActions } from 'store/user';
import { baseURL } from 'lib/services/apiClient';
import { V1_SOCIALS_URL } from 'lib/services/auth';
import { palette } from 'styles/palette';
import { Auth, Modal } from 'components';
import useToasts from '../components/common/toast/useToasts';

function AuthContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { addToast } = useToasts({ duration: 4500 });

  const isLogIn = useSelector((state: RootState) => state.user.isLogIn);
  const { authModal, isMobile } = useSelector((state: RootState) => state.base, shallowEqual);

  const hideModal = useCallback(() => dispatch(baseActions.toggleAuthModal()), [dispatch]);

  const socialRedirect = useCallback(
    (provider: 'kakao' | 'facebook' | 'github' | 'google') => () => {
      sessionStorage.setItem('referer', history.location.pathname);
      window.location.href = `${baseURL}${V1_SOCIALS_URL}/${provider}`;
    },
    [history.location.pathname],
  );

  useEffect(() => {
    dispatch(userActions.checkUser());
  }, [dispatch]);

  useEffect(() => {
    const referer = sessionStorage.getItem('referer');
    if (!referer) return;

    const queryString = qs.parse(history.location.search, { ignoreQueryPrefix: true });
    if (history.location.pathname !== referer) {
      sessionStorage.removeItem('referer');
      history.replace(referer);
    }
    if (queryString.message) {
      addToast('error', queryString.message as string);
      dispatch(baseActions.toggleAuthModal());
    }
  }, [addToast, dispatch, history]);

  if (isLogIn) return null;

  return (
    <Modal
      active={authModal}
      fullScreen={isMobile}
      hideModal={hideModal}
      size={{ width: '390px' }}
      backgroundColor={palette.gray0}
    >
      <Auth socialRedirect={socialRedirect} hideModal={hideModal} />
    </Modal>
  );
}

export default AuthContainer;
