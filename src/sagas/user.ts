import { all, call, put, takeLatest } from 'redux-saga/effects';

import { checkUserAPiResponse, checkUserApi } from 'lib/services/user';
import { errorHandler } from 'lib/utils/errorHandler';
import { CHECK_USER, checkUserActions } from 'store/modules/user';

function* checkUser() {
  try {
    const {
      data: {
        data: { user },
      },
    }: checkUserAPiResponse = yield call(checkUserApi);
    yield put(checkUserActions.success(user));
  } catch (err) {
    call(errorHandler, err);
    yield put(checkUserActions.failure());
  }
}

export default function* userSaga() {
  yield all([takeLatest(CHECK_USER.REQUEST, checkUser)]);
}
