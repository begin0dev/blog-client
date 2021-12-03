import { ValueOf } from '../../../lib/utils/typescriptUtils';

export type PositionType =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export const ToastType = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;
type ToastValueType = ValueOf<typeof ToastType>;

export const ToastAction = {
  ADD: 'add',
  REMOVE: 'remove',
} as const;
type ToastActionType = ValueOf<typeof ToastAction>;

export interface ToastItemInterface {
  id: string;
  type: ToastValueType;
  action: ToastActionType;
  message: string;
  visible: boolean;
  autoCloseTime: number;
  isAutoClose: boolean;
}

export type ToastAddType = Pick<ToastItemInterface, 'message'> &
  Partial<Pick<ToastItemInterface, 'type' | 'autoCloseTime' | 'isAutoClose'>>;

export type ToastCallbackType = (
  toast: Pick<ToastItemInterface, 'id' | 'action'> | ToastItemInterface,
) => void;
