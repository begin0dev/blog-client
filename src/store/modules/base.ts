import produce from 'immer';

import { actionCreator } from 'lib/utils/actionHelper';

// actions
const SET_VIEW_TYPE = 'SET_VIEW_TYPE';
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const setViewType = (payload: { typeName: 'isMobile' | 'isTablet'; bool: boolean }) =>
  actionCreator(SET_VIEW_TYPE, payload);
export const toggleSidebar = (bool: boolean) => actionCreator(TOGGLE_SIDEBAR, bool);

export type ActionTypes = ReturnType<typeof setViewType> | ReturnType<typeof toggleSidebar>;

// reducer
export interface IBaseState {
  isMobile: boolean;
  isTablet: boolean;
  sidebar: boolean;
}

export const defaultState: IBaseState = {
  isMobile: window.innerWidth <= 450,
  isTablet: window.innerWidth <= 768,
  sidebar: false,
};

export default (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case SET_VIEW_TYPE:
      return produce(state, draft => {
        const { typeName, bool } = action.payload;
        draft[typeName] = bool;
      });
    case TOGGLE_SIDEBAR:
      return produce(state, draft => {
        draft.sidebar = action.payload;
      });
    default:
      return state;
  }
};
