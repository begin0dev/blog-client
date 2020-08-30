import React, { createContext, useRef, useState, useCallback, memo } from 'react';

import { messagesType, IMessageProviderProps } from './types';
import Message from './Message';

interface MessageContextValue {
  messages: messagesType[];
  addMessage: (message: string) => void;
  destroy: () => void;
}

export const MessageContext = createContext<MessageContextValue>({
  messages: [],
  addMessage: (message: string) => {},
  destroy: () => {},
});

export const MessageProvider: React.FunctionComponent<IMessageProviderProps> = memo(
  ({ children, maxCount = 4, duration = 2400, ...props }) => {
    const animationTime = useRef<number>(600);
    const removeTime = useRef<number>(duration - animationTime.current);

    const [messages, setMessage] = useState<messagesType[]>([]);

    const destroy = useCallback(() => {
      setMessage([]);
    }, []);

    const clearMessage = (id: number) =>
      setMessage(messages.filter((message: messagesType) => message.id !== id));

    const removeMessage = (id: number) => {
      setMessage(
        messages.map((message: messagesType) =>
          message.id === id ? { ...message, visible: false } : message,
        ),
      );
      setTimeout(() => clearMessage(id), animationTime.current);
    };

    const addMessage = (message: string) => {
      if (maxCount >= messages.length) setMessage([...messages.slice(1, maxCount)]);
      const id: number = messages.reduce(
        (acc: number, msg: messagesType) => (msg.id > acc ? msg.id + 1 : acc),
        0,
      );
      setMessage([...messages, { id, message, visible: true }]);
      setTimeout(() => removeMessage(id), removeTime.current);
    };

    return (
      <MessageContext.Provider value={{ messages, addMessage, destroy }}>
        <Message messages={messages} {...props} />
        {children}
      </MessageContext.Provider>
    );
  },
);
