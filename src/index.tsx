import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from 'styles/GlobalStyle';
import { MessageProvider } from 'lib/Message';

import App from './App';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <MessageProvider>
      <Router>
        <App />
      </Router>
    </MessageProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
