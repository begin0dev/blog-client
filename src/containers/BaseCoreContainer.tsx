import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { breakPoints } from 'styles/utils';
import { RootState } from 'store/modules';
import { setIsMobile } from 'store/modules/base';
import { Progressbar } from 'components';

function BaseCoreContainer(): JSX.Element {
  const dispatch = useDispatch();
  const { isMobile, loadingPercent } = useSelector((state: RootState) => state.base, shallowEqual);

  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    if (!isMobile && innerWidth <= breakPoints.sm) {
      dispatch(setIsMobile(true));
    } else if (isMobile && innerWidth > breakPoints.sm) {
      dispatch(setIsMobile(false));
    }
  }, [dispatch, innerWidth, isMobile]);

  useEffect(() => {
    const resizeEvent = () => setInnerWidth(window.innerWidth);

    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, []);

  return <Progressbar percent={loadingPercent} />;
}

export default BaseCoreContainer;
