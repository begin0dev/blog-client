import produce from 'immer';

import { ActionsUnion, actionCreator } from 'lib/utils/actionHelper';

// actions
const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';

export const AuthActions = {
  toggleAuthForm: (formName: FormNameTypes) => actionCreator(TOGGLE_AUTH_FORM, formName),
};

export type AuthActionTypes = ActionsUnion<typeof AuthActions>;

// reducer
export type FormNameTypes = 'signUp' | 'logIn' | null;
export interface IAuthState {
  formName: FormNameTypes;
}

export const defaultState: IAuthState = {
  formName: null,
};

export default (state = defaultState, action: AuthActionTypes) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_AUTH_FORM:
        draft.formName = action.payload;
        return draft;
      default:
        return state;
    }
  });
