import { ValueOf } from '../../../lib/utils/typescriptUtils';

export const ToastType = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

export interface ToastInterface {
  id: number;
  type: ValueOf<typeof ToastType>;
  message: string;
  visible: boolean;
}
export type PositionType =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
