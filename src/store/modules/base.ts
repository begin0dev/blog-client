import produce from 'immer';

import { ActionsUnion, actionCreator } from 'lib/utils/actionHelper';

// actions
export const SET_VIEW_TYPE = 'SET_VIEW_TYPE';
export const SET_LOADING_PERCENT = 'SET_LOADING_PERCENT';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export type ViewTypeName = 'isMobile' | 'isTablet';

export const BaseActions = {
  setViewType: (payload: { typeName: ViewTypeName; bool: boolean }) => actionCreator(SET_VIEW_TYPE, payload),
  setLoadingPercent: (payload: number) => actionCreator(SET_LOADING_PERCENT, payload),
  toggleSidebar: (bool: boolean) => actionCreator(TOGGLE_SIDEBAR, bool),
};

export type BaseActionTypes = ActionsUnion<typeof BaseActions>;

// reducer
export interface IBaseState {
  isMobile: boolean;
  isTablet: boolean;
  sidebar: boolean;
  loadingPercent: number;
}

export const defaultState: IBaseState = {
  isMobile: window.innerWidth <= 450,
  isTablet: window.innerWidth <= 768,
  sidebar: false,
  loadingPercent: 0,
};

export default (state = defaultState, action: BaseActionTypes) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_VIEW_TYPE: {
        const { typeName, bool } = action.payload;
        draft[typeName] = bool;
        return draft;
      }
      case SET_LOADING_PERCENT:
        draft.loadingPercent = action.payload;
        return draft;
      case TOGGLE_SIDEBAR:
        draft.sidebar = action.payload;
        return draft;
      default:
        return state;
    }
  });
