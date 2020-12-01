import { AnyAction, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

import { actions as baseActions } from 'store/base';

function thunkMiddleware({ dispatch }: MiddlewareAPI) {
  return (next: Dispatch) => (action: AnyAction) => {
    if (action.type.endsWith('/pending')) dispatch(baseActions.setLoadingPercent(0));
    if (action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected'))
      dispatch(baseActions.setLoadingPercent(100));
    return next(action);
  };
}

export default thunkMiddleware;
