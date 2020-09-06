import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export interface User {
  _id: string;
  email?: string;
  displayName: string;
  profileImageUrl?: string;
}
export type AuthState = {
  user: null | User;
  isLogIn: boolean;
  isLoading: boolean;
};

export type AuthAction = ActionType<typeof actions>;
