import { all, takeLatest } from 'redux-saga/effects';

import { checkUserApi } from 'lib/services/auth';
import * as userStore from 'store/modules/user';

function* checkUser() {
  try {
    const { data: user }: { data: userStore.IUser } = yield checkUserApi()
  } catch (err) {}
}

export function* user() {
  yield all([takeLatest(userStore.CHECK_USER.REQUEST, checkUser)]);
}
