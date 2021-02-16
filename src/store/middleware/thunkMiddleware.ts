import { AnyAction, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

import { actions as baseActions } from 'store/base';

function thunkMiddleware({ dispatch }: MiddlewareAPI) {
  return (next: Dispatch) => (action: AnyAction) => {
    if (action.type.endsWith('/pending')) dispatch(baseActions.setIsLoading(true));
    else if (action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected'))
      dispatch(baseActions.setIsLoading(false));
    return next(action);
  };
}

export default thunkMiddleware;
