// types
type StringMap<T> = {
  [key: string]: T;
};

type AnyFunction = (...args: any[]) => any;
type Action<T extends string = string, P = void> = P extends void
  ? Readonly<{ type: T }>
  : Readonly<{ type: T; payload: P }>;

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>;

// action helper
/* eslint-disable import/export */
export function actionCreator<T extends string>(type: T): Action<T>;
export function actionCreator<T extends string, P>(type: T, payload: P): Action<T, P>;
export function actionCreator<T extends string, P>(type: T, payload?: P): any {
  return payload === undefined ? { type } : { type, payload };
}
/* eslint-enable import/export */

type AsyncTypes = {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
};

export const asyncActionCreator = <P = undefined, D = undefined, E = undefined>(types: AsyncTypes) => ({
  request: (payload: P) => (payload ? actionCreator(types.REQUEST, payload) : actionCreator(types.REQUEST)),
  success: (payload: D) => (payload ? actionCreator(types.SUCCESS, payload) : actionCreator(types.SUCCESS)),
  failure: (payload: E) => (payload ? actionCreator(types.FAILURE, payload) : actionCreator(types.FAILURE)),
});
