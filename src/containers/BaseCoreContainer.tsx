import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { breakPoints } from 'styles/utils';
import { RootState } from 'store/modules';
import { setIsMobile } from 'store/modules/base';
import { Progressbar } from 'components';

function BaseCoreContainer(): JSX.Element {
  const dispatch = useDispatch();
  const { isMobile, loadingPercent } = useSelector((state: RootState) => state.base);

  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  const dispatchSetIsMobile = useCallback((bool: boolean) => dispatch(setIsMobile(bool)), [
    dispatch,
  ]);

  const resizeEvent = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    if (!isMobile && innerWidth <= breakPoints.sm) {
      dispatchSetIsMobile(true);
    } else if (isMobile && innerWidth > breakPoints.sm) {
      dispatchSetIsMobile(false);
    }
  }, [dispatch, dispatchSetIsMobile, innerWidth, isMobile]);

  useEffect(() => {
    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, [setInnerWidth]);

  return <Progressbar percent={loadingPercent} />;
}

export default BaseCoreContainer;
