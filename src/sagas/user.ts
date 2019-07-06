import { all, call, put, takeLatest } from 'redux-saga/effects';

import { checkUserApi } from 'lib/services/auth';
import { errorHandler } from 'lib/utils/errorHandler';
import { IUser, CHECK_USER, checkUserActions } from 'store/modules/user';

function* checkUser() {
  try {
    const { data: user }: { data: IUser } = yield call(checkUserApi);
  } catch (err) {
    const message = call(errorHandler, err);
    yield put(checkUserActions.failure());
  }
}

export default function* user() {
  yield all([takeLatest(CHECK_USER.REQUEST, checkUser)]);
}
