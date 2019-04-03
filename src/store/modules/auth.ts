import produce from 'immer';

import { ActionsUnion } from 'utils/types';
import { createAction } from 'utils/actionHelper';

// actions
const CHANGE_AUTH_FORM = 'CHANGE_AUTH_FORM';
const INITIALIZE_AUTH_FORM_DATA = 'INITIALIZE_AUTH_FORM_DATA';
const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';
const SET_AUTH_FORM_VALUE = 'SET_AUTH_FORM_VALUE';

export const Actions = {
  changeAuthForm: (formName: string) => createAction(CHANGE_AUTH_FORM, formName),
  initializeAuthFormData: () => createAction(INITIALIZE_AUTH_FORM_DATA),
  setAuthFormValue: (payload: { name: string; value: string }) => createAction(SET_AUTH_FORM_VALUE, payload),
  toggleAuthForm: (active: boolean) => createAction(TOGGLE_AUTH_FORM, active),
};
export type Actions = ActionsUnion<typeof Actions>;

// reducer
interface IFormData {
  displayName: string;
  email: string;
  password: string;
  [key: string]: string;
}
const initFormValue: IFormData = {
  displayName: '',
  email: '',
  password: '',
};

export interface IAuthState {
  formValue: IFormData;
  state: {
    active: boolean;
    form: string;
    isLoading: boolean;
  };
}

export const defaultState: IAuthState = {
  formValue: {
    ...initFormValue,
  },
  state: {
    active: false,
    form: 'signin',
    isLoading: false,
  },
};

export default (state = defaultState, action: Actions) => {
  switch (action.type) {
    case CHANGE_AUTH_FORM:
      return produce(state, draft => {
        draft.state.form = action.payload;
      });
    case INITIALIZE_AUTH_FORM_DATA:
      return produce(state, draft => {
        draft.formValue = initFormValue;
      });
    case SET_AUTH_FORM_VALUE:
      return produce(state, draft => {
        const { name, value } = action.payload;
        draft.formValue[name] = value;
      });
    case TOGGLE_AUTH_FORM:
      return produce(state, draft => {
        draft.state.active = action.payload;
      });
    default:
      return state;
  }
};
