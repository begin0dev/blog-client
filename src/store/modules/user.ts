import produce from 'immer';

import { ActionsUnion } from 'lib/utils/types';
import { createAction } from 'lib/utils/actionHelper';

// actions
const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

export interface IUserState {
  _id: string;
  email: string;
  commonProfile: {
    displayName: string;
  };
  login: boolean;
}

export const Actions = {
  setUser: (payload: IUserState) => createAction(SET_USER, payload),
  removeUser: () => createAction(REMOVE_USER),
};
export type ActionTypes = ActionsUnion<typeof Actions>;

// reducer
const defaultState: IUserState = {
  _id: '',
  email: '',
  commonProfile: {
    displayName: '',
  },
  login: false,
};

export default (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return produce(state, draft => {
        draft = action.payload;
      });
    case REMOVE_USER:
      return produce(state, draft => {
        draft = defaultState;
      });
    default:
      return state;
  }
};
