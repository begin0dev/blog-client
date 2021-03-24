import 'react-app-polyfill/ie11';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import GlobalStyle from 'styles/GlobalStyle';
import { MessageProvider } from 'components/common/message';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store';
import thunkMiddleware from './store/middleware/thunkMiddleware';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <MessageProvider>
        <App />
      </MessageProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
