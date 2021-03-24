import { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { breakPoints } from 'styles/utils';
import { RootState } from 'store';
import { actions as baseActions } from 'store/base';
import { Progressbar } from 'components';

function BaseCoreContainer() {
  const dispatch = useDispatch();
  const { isMobile, isLoading } = useSelector((state: RootState) => state.base, shallowEqual);

  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    if (!isMobile && innerWidth <= breakPoints.sm) {
      dispatch(baseActions.setIsMobile(true));
    } else if (isMobile && innerWidth > breakPoints.sm) {
      dispatch(baseActions.setIsMobile(false));
    }
  }, [dispatch, innerWidth, isMobile]);

  useEffect(() => {
    const resizeEvent = () => setInnerWidth(window.innerWidth);

    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, []);

  return <Progressbar isLoading={isLoading} />;
}

export default BaseCoreContainer;
