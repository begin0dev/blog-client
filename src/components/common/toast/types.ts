export type TType = 'success' | 'warning' | 'error';
export type TToast = {
  id: number;
  type: TType;
  message: string;
  visible: boolean;
};
export type TPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
