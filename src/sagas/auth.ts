import { all, call, put, takeLatest } from 'redux-saga/effects';

import { CheckUserAPiResponse, checkUserApi } from 'lib/services/user';
import { errorHandler } from 'lib/utils/errorHandler';
import { setLoadingPercent } from 'store/modules/base';
import { checkUserAsync } from 'store/modules/auth';

function* checkUser() {
  try {
    yield put(setLoadingPercent(0));
    const {
      data: {
        data: { user },
      },
    }: CheckUserAPiResponse = yield call(checkUserApi);
    yield put(checkUserAsync.success(user));
  } catch (err) {
    call(errorHandler, err);
    yield put(checkUserAsync.failure());
  } finally {
    yield put(setLoadingPercent(100));
  }
}

export default function* userSaga() {
  yield all([takeLatest(checkUserAsync.request, checkUser)]);
}
