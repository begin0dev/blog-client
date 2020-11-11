import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PageTemplate } from 'components';
import { BaseCoreContainer, AuthContainer } from 'containers';
import { EditorPage, MainPage, ProfilePage, CategoryPage, NotFoundPage } from 'pages';

function App(): JSX.Element {
  return (
    <PageTemplate>
      <BaseCoreContainer />
      <AuthContainer />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={ProfilePage} />
        <Route path="/log" component={ProfilePage} />
        <Route path="/develop/:name(react|node|javascript|etc)" component={CategoryPage} />
        <Route path="/develop" component={CategoryPage} />
        <Route path="/editor" component={EditorPage} />
        <Route path="/*" component={NotFoundPage} />
      </Switch>
    </PageTemplate>
  );
}

export default App;
