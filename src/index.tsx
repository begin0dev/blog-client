import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './App';
import store from './stores';
import globalStyle from 'styles/globalStyle';

globalStyle();

const root = createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
