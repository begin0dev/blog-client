import produce from 'immer';

import { ActionsUnion, actionCreator } from 'lib/utils/actionHelper';

// actions
const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

export const Actions = {
  setUser: (payload: IUserState) => actionCreator(SET_USER, payload),
  removeUser: () => actionCreator(REMOVE_USER),
};
export type ActionTypes = ActionsUnion<typeof Actions>;

// reducer
export interface IUserState {
  _id: string;
  email: string;
  commonProfile: {
    displayName: string;
  };
  login: boolean;
}
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
