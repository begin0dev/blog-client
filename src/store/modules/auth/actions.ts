import { createAsyncAction, createAction } from 'typesafe-actions';

import { User } from './types';

export const REMOVE_USER = 'REMOVE_USER';
export enum CHECK_USER {
  REQUEST = 'CHECK_USER_REQUEST',
  SUCCESS = 'CHECK_USER_SUCCESS',
  FAILURE = 'CHECK_USER_FAILURE',
}

export const removeUser = createAction(REMOVE_USER)();
export const checkUserAsync = createAsyncAction(CHECK_USER.REQUEST, CHECK_USER.SUCCESS, CHECK_USER.FAILURE)<
  undefined,
  User,
  undefined
>();
