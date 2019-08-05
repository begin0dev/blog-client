import { all, cancel, delay, put, take, fork } from 'redux-saga/effects';

import { SET_LOADING_PERCENT, BaseActions } from 'store/modules/base';

function* checkLoading() {
  while (true) {
    const { payload } = yield take(SET_LOADING_PERCENT);
    let action;
    if (payload === 0) {
      action = yield delay(500);
      yield put(BaseActions.setLoadingPercent(35));
    }
    if (payload === 100) yield cancel(action);
  }
}

export default function* baseSaga() {
  yield all([fork(checkLoading)]);
}
