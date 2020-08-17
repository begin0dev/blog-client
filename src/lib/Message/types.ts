export type positionType = 'left' | 'right' | 'center';

export type messagesType = { id: number; message: string; visible: boolean };

export interface Options {
  isBottom?: boolean;
  position?: positionType;
  zIndex?: number;
  margin?: number;
}

export interface IMessageProviderProps extends Options {
  maxCount?: number;
  duration?: number;
  children: JSX.Element;
}

export interface IMessageProps extends Options {
  messages: messagesType[];
}
