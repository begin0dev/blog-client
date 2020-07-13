import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { breakPoints } from 'styles/utils';
import { RootState } from 'store/modules';
import { setIsMobile } from 'store/modules/base';
import { Progressbar } from 'components';

function BaseCoreContainer(): JSX.Element {
  const dispatch = useDispatch();
  const { isMobile, loadingPercent } = useSelector((state: RootState) => state.base);

  const [innerWidth, setInnerWidth] = React.useState<number>(window.innerWidth);

  const dispatchSetIsMobile = React.useCallback((bool: boolean) => dispatch(setIsMobile(bool)), [
    dispatch,
  ]);

  React.useEffect(() => {
    if (!isMobile && innerWidth <= breakPoints.sm) {
      dispatchSetIsMobile(true);
    } else if (isMobile && innerWidth > breakPoints.sm) {
      dispatchSetIsMobile(false);
    }
  }, [dispatch, dispatchSetIsMobile, innerWidth, isMobile]);

  React.useEffect(() => {
    const resizeEvent = () => setInnerWidth(window.innerWidth);
    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, [setInnerWidth]);

  return <Progressbar percent={loadingPercent} />;
}

export default BaseCoreContainer;
