import { combineReducers } from 'redux';
import base, { BaseState } from './base';
import auth, { AuthState } from './auth';

export type RootState = {
  base: BaseState;
  auth: AuthState;
};

const rootReducer = combineReducers({
  base,
  auth,
});

export default rootReducer;
