import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { PageTemplate } from 'components';
import { BaseCoreContainer } from 'containers';
import { MainPage, ProfilePage, CategoryPage, NotFoundPage } from 'pages';

const App: React.FunctionComponent = () => (
  <>
    <BaseCoreContainer />
    <PageTemplate>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/log" component={ProfilePage} />
        <Route path="/develop/:name(all|react|node|javascript|etc)" component={CategoryPage} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
    </PageTemplate>
  </>
);

export default hot(App);
