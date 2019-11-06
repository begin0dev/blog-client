import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/modules';
import { toggleAuthModal, setLoadingPercent } from 'store/modules/base';
import { checkUserAsync } from 'store/modules/auth';
import { baseURL } from 'lib/services/apiClient';
import { SOCIAL_URL } from 'lib/services/auth';
import { palette } from 'styles/palette';
import { Auth, Modal } from 'components';

const AuthContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const authModal = useSelector((state: RootState) => state.base.authModal);
  const isMobile = useSelector((state: RootState) => state.base.isMobile);
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);

  const modalSize = React.useRef<{ width: string }>({ width: '390px' });

  const hideModal = React.useCallback(() => {
    dispatch(toggleAuthModal(false));
  }, [dispatch]);

  const socialRedirect = React.useCallback(
    (provider: 'kakao' | 'facebook' | 'github' | 'google') => () => {
      dispatch(setLoadingPercent(0));
      setTimeout(() => dispatch(setLoadingPercent(100)), 1000);
      hideModal();
      window.location.href = `${baseURL}${SOCIAL_URL}/${provider}`;
    },
    [dispatch, hideModal],
  );

  React.useEffect(() => {
    dispatch(checkUserAsync.request());
  }, [dispatch]);

  if (isLogged) return null;
  return (
    <Modal
      active={authModal}
      fullScreen={isMobile}
      size={modalSize.current}
      backgroundColor={palette.gray1}
      hideModal={hideModal}
    >
      <Auth socialRedirect={socialRedirect} hideModal={hideModal} />
    </Modal>
  );
};

export default AuthContainer;
