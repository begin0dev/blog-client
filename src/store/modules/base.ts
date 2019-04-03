import produce from 'immer';

import { ActionsUnion } from 'utils/types';
import { createAction } from 'utils/actionHelper';

// actions
const SET_VIEW_TYPE = 'SET_VIEW_TYPE';
const TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const Actions = {
  setViewType: (payload: { typeName: 'isMobile' | 'isTablet'; bool: boolean }) => createAction(SET_VIEW_TYPE, payload),
  toggleOverlay: (bool: boolean) => createAction(TOGGLE_OVERLAY, bool),
  toggleSidebar: (bool: boolean) => createAction(TOGGLE_SIDEBAR, bool),
};
export type Actions = ActionsUnion<typeof Actions>;

// reducer
export interface IBaseState {
  isMobile: boolean;
  isTablet: boolean;
  overlay: boolean;
  sidebar: boolean;
}

export const defaultState: IBaseState = {
  isMobile: window.innerWidth <= 450,
  isTablet: window.innerWidth <= 768,
  overlay: false,
  sidebar: false,
};

export default (state = defaultState, action: Actions) => {
  switch (action.type) {
    case SET_VIEW_TYPE:
      return produce(state, draft => {
        const { typeName, bool } = action.payload;
        draft[typeName] = bool;
      });
    case TOGGLE_OVERLAY:
      return produce(state, draft => {
        draft.overlay = action.payload;
      });
    case TOGGLE_SIDEBAR:
      return produce(state, draft => {
        draft.sidebar = action.payload;
      });
    default:
      return state;
  }
};
