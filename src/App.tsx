import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AuthModal, PageTemplate, Progressbar } from 'components';
import { EditorPage, MainPage, ProfilePage, CategoryPage, NotFoundPage } from 'pages';
import { RootState } from './stores';
import AppRoute from './components/common/AppRoute';
import ToastRoot from './components/common/toast/ToastRoot';

function App() {
  const isLoading = useSelector((state: RootState) => state.base.isLoading);
  console.log(isLoading);
  return (
    <ToastRoot>
      <Progressbar isLoading={isLoading} />
      <Router>
        <AuthModal />
        <Switch>
          <AppRoute exact path="/" layout={PageTemplate} component={MainPage} />
          <AppRoute path="/about" layout={PageTemplate} component={ProfilePage} />
          <AppRoute path="/log" layout={PageTemplate} component={CategoryPage} />
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
    </ToastRoot>
  );
}

export default App;
