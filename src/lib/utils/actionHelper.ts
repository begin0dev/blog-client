// types
type StringMap<T> = {
  [key: string]: T;
};

type AnyFunction = (...args: any[]) => any;
type Action<T extends string = string, P = void> = P extends void
  ? Readonly<{ type: T }>
  : Readonly<{ type: T; payload: P }>;

type AsyncTypes = {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
};
export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>;

// action helper
/* eslint-disable import/export */
export function actionCreator<T extends string>(type: T): Action<T>;
export function actionCreator<T extends string, P>(type: T, payload: P): Action<T, P>;
export function actionCreator<T extends string, P>(type: T, payload?: P): any {
  return payload === undefined ? { type } : { type, payload };
}

export function asyncActionCreator<T extends AsyncTypes>(
  types: T,
  isExistPayload: [],
): {
  request: () => Action<T['REQUEST']>;
  success: () => Action<T['SUCCESS']>;
  failure: () => Action<T['FAILURE']>;
};
export function asyncActionCreator<T extends AsyncTypes, P>(
  types: T,
  isExistPayload: ['request'],
): {
  request: (payload: P) => Action<T['REQUEST'], P>;
  success: () => Action<T['SUCCESS']>;
  failure: () => Action<T['FAILURE']>;
};
export function asyncActionCreator<T extends AsyncTypes, P>(
  types: T,
  isExistPayload: ['success'],
): {
  request: () => Action<T['REQUEST']>;
  success: (payload: P) => Action<T['SUCCESS'], P>;
  failure: () => Action<T['FAILURE']>;
};
export function asyncActionCreator<T extends AsyncTypes, P>(
  types: T,
  isExistPayload: ['failure'],
): {
  request: () => Action<T['REQUEST']>;
  success: () => Action<T['SUCCESS']>;
  failure: (payload: P) => Action<T['FAILURE'], P>;
};
export function asyncActionCreator<T extends AsyncTypes, P, D>(
  types: T,
  isExistPayload: ['request', 'success'],
): {
  request: (payload: P) => Action<T['REQUEST'], P>;
  success: (payload: D) => Action<T['SUCCESS'], D>;
  failure: () => Action<T['FAILURE']>;
};
export function asyncActionCreator<T extends AsyncTypes, P, D>(
  types: T,
  isExistPayload: ['request', 'failure'],
): {
  request: (payload: P) => Action<T['REQUEST'], P>;
  success: () => Action<T['SUCCESS']>;
  failure: (payload: D) => Action<T['FAILURE'], D>;
};
export function asyncActionCreator<T extends AsyncTypes, P, D>(
  types: T,
  isExistPayload: ['success', 'failure'],
): {
  request: () => Action<T['REQUEST']>;
  success: (payload: P) => Action<T['SUCCESS'], P>;
  failure: (payload: D) => Action<T['FAILURE'], D>;
};
export function asyncActionCreator<T extends AsyncTypes, P, D, E>(
  types: T,
  isExistPayload: ['request', 'success', 'failure'],
): {
  request: (payload: P) => Action<T['REQUEST'], P>;
  success: (payload: D) => Action<T['SUCCESS'], D>;
  failure: (payload: E) => Action<T['FAILURE'], E>;
};

export function asyncActionCreator<T extends AsyncTypes, P, D, E>(types: T, isExistPayload: any[]): any {
  return {
    request: isExistPayload.includes('request')
      ? (payload: P) => actionCreator(types.REQUEST as T['REQUEST'], payload)
      : () => actionCreator(types.REQUEST as T['REQUEST']),
    success: isExistPayload.includes('success')
      ? (payload: D) => actionCreator(types.SUCCESS as T['SUCCESS'], payload)
      : () => actionCreator(types.SUCCESS as T['SUCCESS']),
    failure: isExistPayload.includes('failure')
      ? (payload: D) => actionCreator(types.FAILURE as T['FAILURE'], payload)
      : () => actionCreator(types.FAILURE as T['FAILURE']),
  };
}
/* eslint-enable import/export */
