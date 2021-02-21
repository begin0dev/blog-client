import * as React from 'react';
import { useEffect, useContext, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { parse } from 'qs';

import { RootState } from 'store';
import { actions as baseActions } from 'store/base';
import { actions as userActions } from 'store/user';
import { baseURL } from 'lib/services/apiClient';
import { SOCIAL_URL } from 'lib/services/auth';
import { Palette } from 'styles/palette';
import { Auth, Modal } from 'components';
import { MessageContext } from 'components/common/message';

function AuthContainer(): JSX.Element | null {
  const history = useHistory();
  const dispatch = useDispatch();

  const { addMessage } = useContext(MessageContext);

  const isLogIn = useSelector((state: RootState) => state.user.isLogIn);
  const { authModal, isMobile } = useSelector((state: RootState) => state.base, shallowEqual);

  const hideModal = useCallback(() => dispatch(baseActions.toggleAuthModal(false)), [dispatch]);

  const socialRedirect = useCallback(
    (provider: 'kakao' | 'facebook' | 'github' | 'google') => () => {
      sessionStorage.setItem('referer', history.location.pathname);
      window.location.href = `${baseURL}${SOCIAL_URL}/${provider}`;
    },
    [history.location.pathname],
  );

  useEffect(() => {
    dispatch(userActions.checkUser());
  }, [dispatch]);

  useEffect(() => {
    const referer = sessionStorage.getItem('referer');
    if (!referer) return;

    const queryString = parse(history.location.search, { ignoreQueryPrefix: true });
    if (history.location.pathname !== referer) {
      sessionStorage.removeItem('referer');
      history.replace(referer);
    }
    if (queryString.message) {
      addMessage(queryString.message as string);
      dispatch(baseActions.toggleAuthModal(true));
    }
  }, [dispatch, addMessage, history]);

  if (isLogIn) return null;

  return (
    <Modal
      active={authModal}
      fullScreen={isMobile}
      size={{ width: '390px' }}
      backgroundColor={Palette.gray0}
      hideModal={hideModal}
    >
      <Auth socialRedirect={socialRedirect} hideModal={hideModal} />
    </Modal>
  );
}

export default AuthContainer;
