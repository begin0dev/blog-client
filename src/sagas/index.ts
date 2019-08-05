import { all, fork } from 'redux-saga/effects';

import baseSaga from './base';
import userSaga from './user';

export default function* rootSaga() {
  yield all([fork(baseSaga), fork(userSaga)]);
}
