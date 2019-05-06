import produce from 'immer';

import { ActionsUnion, actionCreator } from 'lib/utils/actionHelper';

// actions
const CHANGE_AUTH_FORM = 'CHANGE_AUTH_FORM';
const SET_AUTH_FORM_VALUE = 'SET_AUTH_FORM_VALUE';
const INITIALIZE_AUTH_FORM_DATA = 'INITIALIZE_AUTH_FORM_DATA';
const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';

export const Actions = {
  changeAuthForm: (formName: 'signUp' | 'logIn') => actionCreator(CHANGE_AUTH_FORM, formName),
  setAuthFormValue: (payload: { name: string; value: string }) => actionCreator(SET_AUTH_FORM_VALUE, payload),
  initializeAuthFormData: () => actionCreator(INITIALIZE_AUTH_FORM_DATA),
  toggleAuthForm: (active: boolean) => actionCreator(TOGGLE_AUTH_FORM, active),
};
export type ActionTypes = ActionsUnion<typeof Actions>;

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
    form: 'signUp' | 'logIn';
    isLoading: boolean;
  };
}

export const defaultState: IAuthState = {
  formValue: {
    ...initFormValue,
  },
  state: {
    active: false,
    form: 'logIn',
    isLoading: false,
  },
};

export default (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case CHANGE_AUTH_FORM:
      return produce(state, draft => {
        draft.state.form = action.payload;
      });
    case SET_AUTH_FORM_VALUE:
      return produce(state, draft => {
        const { name, value } = action.payload;
        draft.formValue[name] = value;
      });
    case INITIALIZE_AUTH_FORM_DATA:
      return produce(state, draft => {
        draft.formValue = initFormValue;
      });
    case TOGGLE_AUTH_FORM:
      return produce(state, draft => {
        draft.state.active = action.payload;
      });
    default:
      return state;
  }
};
