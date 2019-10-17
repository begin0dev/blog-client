import produce from 'immer';
import { createReducer } from 'typesafe-actions';

import { BaseState, BaseAction } from './types';
import { SET_IS_MOBILE, SET_LOADING_PERCENT, TOGGLE_AUTH_MODAL, TOGGLE_SIDEBAR } from './actions';

export const initialState: BaseState = {
  isMobile: window.innerWidth <= 450,
  authModal: false,
  isShowSidebar: false,
  loadingPercent: 0,
};

export default createReducer<BaseState, BaseAction>(initialState, {
  [SET_IS_MOBILE]: (state, { payload }) =>
    produce(state, draft => {
      draft.isMobile = payload;
    }),
  [TOGGLE_SIDEBAR]: (state, { payload }) =>
    produce(state, draft => {
      draft.isShowSidebar = payload;
    }),
  [SET_LOADING_PERCENT]: (state, { payload }) =>
    produce(state, draft => {
      draft.loadingPercent = payload;
    }),
  [TOGGLE_AUTH_MODAL]: (state, { payload }) =>
    produce(state, draft => {
      draft.authModal = payload;
    }),
});
