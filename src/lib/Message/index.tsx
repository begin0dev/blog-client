import React from 'react';

import { messagesType, IMessageProviderProps } from './types';
import Message from './Message';

interface MessageContextValue {
  messages: messagesType[];
  addMessage: (message: string) => void;
  destroy: () => void;
}

export const MessageContext = React.createContext<MessageContextValue>({
  messages: [],
  addMessage: message => {},
  destroy: () => {},
});

export const MessageProvider: React.FunctionComponent<IMessageProviderProps> = React.memo(
  ({ children, maxCount = 4, duration = 2400, ...props }) => {
    const messageLimit = React.useRef<number>(maxCount);
    const animationTime = React.useRef<number>(600);
    const removeTime = React.useRef<number>(duration - animationTime.current);

    const [messages, setMessage] = React.useState<messagesType[]>([]);

    const destroy = React.useCallback(() => {
      setMessage([]);
    }, []);

    const clearMessage = React.useCallback(
      (id: number) => {
        setMessage(messages.filter((message: messagesType) => message.id !== id));
      },
      [messages],
    );

    const removeMessage = React.useCallback(
      (id: number) => {
        setMessage(
          messages.map((message: messagesType) =>
            message.id === id ? { ...message, visible: false } : message,
          ),
        );
        setTimeout(() => clearMessage(id), animationTime.current);
      },
      [clearMessage, messages],
    );

    const addMessage = React.useCallback(
      (message: string) => {
        if (messageLimit.current >= messages.length) {
          setMessage([...messages.slice(1, messageLimit.current)]);
        }
        const id: number = messages.reduce(
          (acc: number, msg: messagesType) => (msg.id > acc ? msg.id + 1 : acc),
          0,
        );
        setMessage([...messages, { id, message, visible: true }]);
        setTimeout(() => removeMessage(id), removeTime.current);
      },
      [messages, removeMessage],
    );

    return (
      <MessageContext.Provider value={{ messages, addMessage, destroy }}>
        <Message messages={messages} {...props} />
        {children}
      </MessageContext.Provider>
    );
  },
);
