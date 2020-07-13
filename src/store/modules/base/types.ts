import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type BaseState = {
  isMobile: boolean;
  authModal: boolean
  loadingPercent: number;
}

export type BaseAction = ActionType<typeof actions>