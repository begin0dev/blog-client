import produce from 'immer';
import { createReducer } from 'typesafe-actions';

import { AuthState, AuthAction } from './types';
import { CHECK_USER, REMOVE_USER } from './actions';

const initialState: AuthState = {
  user: null,
  isLogged: false,
  isLoading: false,
};

export default createReducer<AuthState, AuthAction>(initialState, {
  [CHECK_USER.REQUEST]: state =>
    produce(state, draft => {
      draft.isLogged = false;
      draft.isLoading = true;
    }),
  [CHECK_USER.SUCCESS]: (state, { payload }) =>
    produce(state, () => ({
      user: payload,
      isLogged: true,
      isLoading: false,
    })),
  [CHECK_USER.FAILURE]: state =>
    produce(state, draft => {
      draft.isLoading = false;
    }),
  [REMOVE_USER]: state =>
    produce(state, draft => {
      draft.user = null;
    }),
});
