import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IStoreState } from 'store/modules';
import { BaseActions, ViewTypeName } from 'store/modules/base';
import { breakPoints } from 'styles/utils';

const BaseCoreContainer: React.FunctionComponent = React.memo(() => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: IStoreState) => state.base.isMobile);
  const isTablet = useSelector((state: IStoreState) => state.base.isTablet);

  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const dispatchSetViewType = (typeName: ViewTypeName, bool: boolean) =>
      dispatch(BaseActions.setViewType({ typeName, bool }));
    switch (true) {
      case innerWidth <= breakPoints.sm:
        if (!isMobile) dispatchSetViewType('isMobile', true);
        if (!isTablet) dispatchSetViewType('isTablet', true);
        break;
      case innerWidth <= breakPoints.md:
        if (isMobile) dispatchSetViewType('isMobile', false);
        if (!isTablet) dispatchSetViewType('isTablet', true);
        break;
      default:
        if (isMobile) dispatchSetViewType('isMobile', false);
        if (isTablet) dispatchSetViewType('isTablet', false);
    }
  }, [dispatch, innerWidth, isMobile, isTablet]);

  React.useEffect(() => {
    const resizeEvent = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeEvent);
    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, [setInnerWidth]);

  React.useEffect(() => {
    if (isTablet) dispatch(BaseActions.toggleSidebar(false));
  }, [dispatch, isTablet]);

  return null;
});

export default BaseCoreContainer;