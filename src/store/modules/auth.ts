import produce from 'immer';

import { ActionsUnion, actionCreator } from 'lib/utils/actionHelper';

// actions
const CHANGE_AUTH_FORM = 'CHANGE_AUTH_FORM';
const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';

export const Actions = {
  changeAuthForm: (formName: 'signUp' | 'logIn') => actionCreator(CHANGE_AUTH_FORM, formName),
  toggleAuthForm: (active: boolean) => actionCreator(TOGGLE_AUTH_FORM, active),
};
export type ActionTypes = ActionsUnion<typeof Actions>;

// reducer
export interface IAuthState {
  active: boolean;
  form: 'signUp' | 'logIn';
  isLoading: boolean;
  isLogged: boolean;
}

export const defaultState: IAuthState = {
  active: false,
  form: 'logIn',
  isLoading: false,
  isLogged: false,
};

export default (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case CHANGE_AUTH_FORM:
      return produce(state, draft => {
        draft.form = action.payload;
      });
    case TOGGLE_AUTH_FORM:
      return produce(state, draft => {
        draft.active = action.payload;
      });
    default:
      return state;
  }
};
