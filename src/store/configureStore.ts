import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from 'sagas';
import rootReducer from './modules';

/*
 * @param {Object} initial state to bootstrap our stores with for server-side rendering
 * @param {History Object} a history object. We use `createMemoryHistory` for server-side rendering,
 *                          while using browserHistory for client-side
 *                          rendering.
 */

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  // Installs hooks that always keep react-router and redux
  // store in sync
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(applyMiddleware(...middlewares))
      : compose(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
}
