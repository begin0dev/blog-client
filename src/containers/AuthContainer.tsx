import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/modules';
import { toggleAuthModal, setLoadingPercent } from 'store/modules/base';
import { checkUserAsync } from 'store/modules/auth';
import { baseURL } from 'lib/services/apiClient';
import { SOCIAL_URL } from 'lib/services/auth';
import { palette } from 'styles/palette';
import { Auth, Modal } from 'components';

function AuthContainer(): JSX.Element | null {
  const dispatch = useDispatch();

  const authModal = useSelector((state: RootState) => state.base.authModal);
  const isMobile = useSelector((state: RootState) => state.base.isMobile);
  const isLogIn = useSelector((state: RootState) => state.auth.isLogIn);

  const hideModal = () => dispatch(toggleAuthModal(false));

  const socialRedirect = useCallback(
    (provider: 'kakao' | 'facebook' | 'github' | 'google') => () => {
      dispatch(setLoadingPercent(0));
      setTimeout(() => dispatch(setLoadingPercent(100)), 1000);
      window.location.href = `${baseURL}${SOCIAL_URL}/${provider}`;
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(checkUserAsync.request());
  }, [dispatch]);

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
