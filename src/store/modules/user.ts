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
// export const checkUserActions = {
//   request: () => actionCreator(CHECK_USER.REQUEST),
//   success: (payload: IUser) => actionCreator(CHECK_USER.SUCCESS, payload),
//   failure: () => actionCreator(CHECK_USER.FAILURE),
// };
export const checkUserActions = asyncActionCreator<typeof CHECK_USER, IUser>(CHECK_USER, ['success']);

export type ActionTypes = ActionsUnion<typeof UserActions> | ActionsUnion<typeof checkUserActions>;

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

export default (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case CHECK_USER.REQUEST:
      return produce(state, draft => {
        draft.isLogged = false;
        draft.isLoading = true;
      });
    case CHECK_USER.SUCCESS:
      return produce(state, () => ({
        ...action.payload,
        isLogged: true,
        isLoading: false,
      }));
    case CHECK_USER.FAILURE:
      return produce(state, draft => {
        draft.isLoading = false;
      });
    case REMOVE_USER:
      return produce(state, () => defaultState);
    default:
      return state;
  }
};
