import { combineReducers } from '@reduxjs/toolkit';

import base from './base';
import user from './user';

const rootReducer = combineReducers({
  base,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
