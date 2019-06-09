import produce from 'immer';

import { actionCreator } from 'lib/utils/actionHelper';

// actions
const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';

export const toggleAuthForm = (formName: 'signUp' | 'logIn' | null) => actionCreator(TOGGLE_AUTH_FORM, formName);

export type ActionTypes = ReturnType<typeof toggleAuthForm>

// reducer
export interface IAuthState {
  formName: 'signUp' | 'logIn' | null;
}

export const defaultState: IAuthState = {
  formName: null,
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
