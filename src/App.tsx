import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';

import { IStoreState } from 'store/modules';
import { ViewTypeName, BaseActions } from 'store/modules/base';
import { PageTemplate } from 'components';
import { MainPage, ProfilePage, CategoryPage, NotFoundPage } from 'pages';
import { breakPoints } from 'styles/utils';

const App: React.FunctionComponent = () => {
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

  return (
    <PageTemplate>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/log" component={ProfilePage} />
        <Route path="/develop/:name(all|react|node|javascript|etc)" component={CategoryPage} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
    </PageTemplate>
  );
};

export default hot(App);
