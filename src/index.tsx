import 'react-app-polyfill/ie11';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import GlobalStyle from 'styles/GlobalStyle';
import { MessageProvider } from 'components/common/message';

import App from './App';
import configureStore from './store/configureStore';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <MessageProvider>
      <App />
    </MessageProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
