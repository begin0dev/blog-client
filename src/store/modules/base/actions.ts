import { createAction } from 'typesafe-actions';

export const SET_IS_MOBILE = 'SET_IS_MOBILE';
export const SET_LOADING_PERCENT = 'SET_LOADING_PERCENT';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const TOGGLE_AUTH_MODAL = 'TOGGLE_AUTH_MODAL';

export const setIsMobile = createAction(SET_IS_MOBILE)<boolean>();
export const setLoadingPercent = createAction(SET_LOADING_PERCENT)<number>();
export const toggleSidebar = createAction(TOGGLE_SIDEBAR)<boolean>();
export const toggleAuthModal = createAction(TOGGLE_AUTH_MODAL)<boolean>();