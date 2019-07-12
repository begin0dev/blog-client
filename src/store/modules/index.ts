import { combineReducers } from 'redux';
import auth, { IAuthState } from './auth';
import base, { IBaseState } from './base';
import user, { IUserState } from './user';

export interface IStoreState {
  auth: IAuthState;
  base: IBaseState;
  user: IUserState;
}

const rootReducer = combineReducers({
  auth,
  base,
  user,
});

export default rootReducer;
