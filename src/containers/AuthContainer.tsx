import qs from 'qs';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from 'stores';
import { actions as baseActions } from 'stores/base';
import { actions as userActions } from 'stores/user';
import { baseURL } from 'lib/services/apiClient';
import { V1_SOCIALS_URL } from 'lib/services/auth';
import { palette } from 'styles/palette';
import { Auth, Modal } from 'components';
import { breakPoints } from '../styles/utils';
import useToasts from '../components/common/toast/useToasts';

function AuthContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { addToast } = useToasts({ duration: 4500 });

  const isLogIn = useSelector((state: RootState) => state.user.isLogIn);
  const { authModal } = useSelector((state: RootState) => state.base, shallowEqual);

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
      active={authModal}
      fullScreen={window.innerWidth <= breakPoints.sm}
      hideModal={hideModal}
      size={{ width: '390px' }}
      backgroundColor={palette.gray0}
    >
      <Auth socialRedirect={socialRedirect} hideModal={hideModal} />
    </Modal>
  );
}

export default AuthContainer;
