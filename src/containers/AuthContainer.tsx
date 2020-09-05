import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { parse } from 'qs';

import { RootState } from 'store/modules';
import { toggleAuthModal, setLoadingPercent } from 'store/modules/base';
import { checkUserAsync } from 'store/modules/auth';
import { baseURL } from 'lib/services/apiClient';
import { SOCIAL_URL } from 'lib/services/auth';
import { palette } from 'styles/palette';
import { Auth, Modal } from 'components';
import { MessageContext } from 'lib/Message';

function AuthContainer(): JSX.Element | null {
  const history = useHistory();
  const dispatch = useDispatch();

  const { addMessage } = useContext(MessageContext);

  const { authModal, isMobile } = useSelector((state: RootState) => state.base, shallowEqual);
  const isLogIn = useSelector((state: RootState) => state.auth.isLogIn);

  const hideModal = () => dispatch(toggleAuthModal(false));

  const socialRedirect = (provider: 'kakao' | 'facebook' | 'github' | 'google') => () => {
    dispatch(setLoadingPercent(0));
    sessionStorage.setItem('referer', history.location.pathname);
    setTimeout(() => dispatch(setLoadingPercent(100)), 1000);
    window.location.href = `${baseURL}${SOCIAL_URL}/${provider}`;
  };

  useEffect(() => {
    dispatch(checkUserAsync.request());
  }, [dispatch]);

  useEffect(() => {
    const referer = sessionStorage.getItem('referer');
    if (referer) {
      const queryString = parse(history.location.search, { ignoreQueryPrefix: true });
      if (history.location.pathname !== referer) {
        sessionStorage.removeItem('referer');
        history.replace(referer);
      }
      if (queryString.message) {
        addMessage(queryString.message as string);
        dispatch(toggleAuthModal(true));
      }
    }
  }, [dispatch, addMessage, history]);

  if (isLogIn) return null;
  return (
    <Modal
      active={authModal}
      fullScreen={isMobile}
      size={{ width: '390px' }}
      backgroundColor={palette.gray1}
      hideModal={hideModal}
    >
      <Auth socialRedirect={socialRedirect} hideModal={hideModal} />
    </Modal>
  );
}

export default AuthContainer;
