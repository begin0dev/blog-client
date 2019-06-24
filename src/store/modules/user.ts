import produce from 'immer';

import { ActionsUnion, actionCreator } from 'lib/utils/actionHelper';

// actions
const SET_USER = 'SET_USER';
const SET_LOGGED = 'SET_LOGGED';
const REMOVE_USER = 'REMOVE_USER';

export const setUser = (payload: IUser) => actionCreator(SET_USER, payload);
export const setLogged = (payload: boolean) => actionCreator(SET_LOGGED, payload);
export const removeUser = () => actionCreator(REMOVE_USER);

const Actions = { setUser, setLogged, removeUser };
export type ActionTypes = ActionsUnion<typeof Actions>;

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
}

const defaultState: IUserState = {
  _id: '',
  email: '',
  commonProfile: {
    displayName: '',
  },
  isLogged: false,
};

export default (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case REMOVE_USER:
      return produce(state, () => defaultState);
    default:
      return state;
  }
};
