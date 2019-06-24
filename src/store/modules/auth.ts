import produce from 'immer';

import { ActionsUnion, actionCreator } from 'lib/utils/actionHelper';

// actions
const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';

export type FormNameTypes = 'signUp' | 'logIn' | null;

export const toggleAuthForm = (formName: FormNameTypes) => actionCreator(TOGGLE_AUTH_FORM, formName);

const Actions = { toggleAuthForm };
export type ActionTypes = ActionsUnion<typeof Actions>;

// reducer
export interface IAuthState {
  formName: FormNameTypes;
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
