import produce from 'immer';

import { ActionsUnion, actionCreator } from 'lib/utils/actionHelper';

// actions
const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';

export const Actions = {
  toggleAuthForm: (formName: 'signUp' | 'logIn' | null) => actionCreator(TOGGLE_AUTH_FORM, formName),
};
export type ActionTypes = ActionsUnion<typeof Actions>;

// reducer
export interface IAuthState {
  formName: 'signUp' | 'logIn' | null;
  isLoading: boolean;
}

export const defaultState: IAuthState = {
  formName: null,
  isLoading: false,
};

export default (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case TOGGLE_AUTH_FORM:
      return produce(state, draft => {
        draft.formName = action.payload;
      });
    default:
      return state;
  }
};
