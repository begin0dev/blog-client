import produce from 'immer';
import { createReducer } from 'typesafe-actions';

import { AuthState, AuthAction } from './types';
import { CHECK_USER, REMOVE_USER } from './actions';

const initialState: AuthState = {
  user: null,
  isLogIn: false,
  isLoading: false,
};

export default createReducer<AuthState, AuthAction>(initialState, {
  [CHECK_USER.REQUEST]: state =>
    produce(state, draft => {
      draft.isLogIn = false;
      draft.isLoading = true;
    }),
  [CHECK_USER.SUCCESS]: (state, { payload }) =>
    produce(state, () => ({
      user: payload,
      isLogIn: true,
      isLoading: false,
    })),
  [CHECK_USER.FAILURE]: state =>
    produce(state, draft => {
      draft.isLoading = false;
    }),
  [REMOVE_USER]: state =>
    produce(state, draft => {
      draft.user = null;
      draft.isLogIn = false;
    }),
});
