import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export interface User {
  _id: string;
  displayName: string;
}
export type AuthState = {
  user: null | User;
  isLogged: boolean;
  isLoading: boolean;
};

export type AuthAction = ActionType<typeof actions>;
