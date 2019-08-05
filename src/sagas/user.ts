import { all, call, delay, put, takeLatest } from 'redux-saga/effects';

import { CheckUserAPiResponse, checkUserApi } from 'lib/services/user';
import { errorHandler } from 'lib/utils/errorHandler';
import { BaseActions } from 'store/modules/base';
import { CHECK_USER, checkUserActions } from 'store/modules/user';

function* checkUser() {
  try {
    yield put(BaseActions.setLoadingPercent(0));
    const {
      data: {
        data: { user },
      },
    }: CheckUserAPiResponse = yield call(checkUserApi);
    yield put(checkUserActions.success(user));
  } catch (err) {
    call(errorHandler, err);
    yield put(checkUserActions.failure());
  } finally {
    yield put(BaseActions.setLoadingPercent(100));
  }
}

export default function* userSaga() {
  yield all([takeLatest(CHECK_USER.REQUEST, checkUser)]);
}
