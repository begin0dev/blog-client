import { combineReducers } from 'redux';
import auth, { IAuthState } from './auth';
import base, { IBaseState } from './base';

export interface IStoreState {
  auth: IAuthState;
  base: IBaseState;
}

const rootReducer = combineReducers({
  auth,
  base,
});

export default rootReducer;
