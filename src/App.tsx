import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { PageTemplate } from 'components';
import { BaseCoreContainer, AuthContainer } from 'containers';
import { EditorPage, MainPage, ProfilePage, CategoryPage, NotFoundPage } from 'pages';
import AppRoute from './components/common/AppRoute';

function App() {
  return (
    <Router>
      <BaseCoreContainer />
      <AuthContainer />
      <Switch>
        <AppRoute exact path="/" layout={PageTemplate} component={MainPage} />
        <AppRoute path="/about" layout={PageTemplate} component={ProfilePage} />
        <AppRoute path="/log" layout={PageTemplate} component={ProfilePage} />
        <AppRoute
          path="/develop/:name(react|node|javascript|etc)"
          layout={PageTemplate}
          component={CategoryPage}
        />
        <AppRoute path="/develop" layout={PageTemplate} component={CategoryPage} />
        <AppRoute path="/editor" component={EditorPage} />
        <AppRoute path="/*" layout={PageTemplate} component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
