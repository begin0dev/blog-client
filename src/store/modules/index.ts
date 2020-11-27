import { combineReducers } from '@reduxjs/toolkit'

import base, { BaseState } from './base';
import user, { UserState } from './user';

export type RootState = {
  base: BaseState;
  user: UserState;
};

const rootReducer = combineReducers({
  base,
  user,
});

export default rootReducer;
