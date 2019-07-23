import produce from 'immer';

import { ActionsUnion, actionCreator, asyncActionCreator } from 'lib/utils/actionHelper';

// actions
export const REMOVE_USER = 'REMOVE_USER';
export enum CHECK_USER {
  REQUEST = 'CHECK_USER_REQUEST',
  SUCCESS = 'CHECK_USER_SUCCESS',
  FAILURE = 'CHECK_USER_FAILURE',
}

export const UserActions = {
  removeUser: () => actionCreator(REMOVE_USER),
};
export const checkUserActions = asyncActionCreator<typeof CHECK_USER, IUser>(CHECK_USER, ['success']);

export type UserActionTypes = ActionsUnion<typeof UserActions> | ActionsUnion<typeof checkUserActions>;

// reducer
export interface IUser {
  _id: string;
  email: string;
  commonProfile: {
    displayName: string;
  };
}
export interface IUserState extends IUser {
  isLogged: boolean;
  isLoading: boolean;
}

const defaultState: IUserState = {
  _id: '',
  email: '',
  commonProfile: {
    displayName: '',
  },
  isLogged: false,
  isLoading: false,
};

export default (state = defaultState, action: UserActionTypes) =>
  produce(state, draft => {
    switch (action.type) {
      case CHECK_USER.REQUEST:
        draft.isLogged = false;
        draft.isLoading = true;
        return draft;
      case CHECK_USER.SUCCESS: {
        return {
          ...action.payload,
          isLogged: true,
          isLoading: false,
        };
      }
      case CHECK_USER.FAILURE:
        draft.isLoading = false;
        return draft;
      case REMOVE_USER:
        return defaultState;
      default:
        return state;
    }
  });
