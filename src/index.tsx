import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './App';
import store from './stores';
import GlobalStyle from 'styles/globalStyle';

const root = createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
);
