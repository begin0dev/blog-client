// types
import { Actions } from '../../store/modules/base';

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

type asyncTypes = {
  REQUEST: string;
  SUCCESS: string;
  ERROR: string;
};

export function asyncTypeCreator(prefix: string): asyncTypes {
  return ['REQUEST', 'SUCCESS', 'ERROR'].reduce(
    (acc, cur) => ({ ...acc, [cur]: `${prefix.toUpperCase()}_${cur}` }),
    {},
  ) as asyncTypes;
}

export function asyncActionCreator<P, D>(type: asyncTypes) {
  return {
    request: (params: P) => actionCreator(type.REQUEST, params),
    success: (data: D) => actionCreator(type.SUCCESS, data),
    error: (message: string) => actionCreator(type.ERROR, message),
  };
}
