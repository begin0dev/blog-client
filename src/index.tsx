import 'react-app-polyfill/ie11';
import './styles/main.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('react-root'),
);

serviceWorker.unregister();
