import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { PageTemplate } from 'components';
import { BaseCoreContainer, AuthContainer } from 'containers';
import { MainPage, ProfilePage, CategoryPage, NotFoundPage } from 'pages';

function App(): JSX.Element {
  return (
    <>
      <BaseCoreContainer />
      <AuthContainer />
      <PageTemplate>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={ProfilePage} />
          <Route path="/log" component={ProfilePage} />
          <Route path="/develop/:name(react|node|javascript|etc)" component={CategoryPage} />
          <Route path="/develop" component={CategoryPage} />
          <Route path="/*" component={NotFoundPage} />
        </Switch>
      </PageTemplate>
    </>
  );
}

export default hot(App);
