import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';

import { IStoreState } from 'store/modules';
import { IBaseState, Actions as baseActions } from 'store/modules/base';
import { PageTemplate } from 'components';
import { MainPage, ProfilePage, CategoryPage, NotFoundPage } from 'pages';
import { breakPoints } from 'styles/utils';

interface IProps {
  baseState: IBaseState;
  dispatchToggleSidebar(bool: boolean): void;
  dispatchSetViewType(typeName: 'isMobile' | 'isTablet', bool: boolean): void;
}

const App: React.FunctionComponent<IProps> = ({
  baseState: { isMobile, isTablet },
  dispatchSetViewType,
  dispatchToggleSidebar,
}) => {
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

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
  }, [dispatchSetViewType, innerWidth, isMobile, isTablet]);

  React.useEffect(() => {
    if (isTablet) dispatchToggleSidebar(false);
  }, [dispatchToggleSidebar, isTablet]);

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

const mapStateToProps = (state: IStoreState) => ({
  baseState: state.base,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchSetViewType(typeName: 'isMobile' | 'isTablet', bool: boolean) {
    return dispatch(baseActions.setViewType({ typeName, bool }));
  },
  dispatchToggleSidebar(bool: boolean) {
    return dispatch(baseActions.toggleSidebar(bool));
  },
});

export default hot(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
