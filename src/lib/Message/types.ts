export type positionType = 'left' | 'right' | 'center';

export type messagesType = { id: number; message: string; visible: boolean };

export interface Options {
  isBottom?: boolean;
  position?: positionType;
  zIndex?: number;
  margin?: number;
  duration?: number;
}