import React, { createContext, useRef, useState, useCallback, memo } from 'react';

import { messagesType, IMessageProviderProps } from './types';
import Message from './Message';

interface MessageContextValue {
  addMessage: (message: string) => void;
  destroy: () => void;
}

export const MessageContext = createContext<MessageContextValue>({
  addMessage: (message: string) => {},
  destroy: () => {},
});

export const MessageProvider: React.FC<IMessageProviderProps> = memo(
  ({ children, maxCount = 4, duration = 2400, ...props }) => {
    const animationTime = useRef<number>(600);
    const removeTime = useRef<number>(duration - animationTime.current);

    const [messages, setMessage] = useState<messagesType[]>([]);

    const destroy = useCallback(() => {
      setMessage([]);
    }, []);

    const removeMessage = (id: number) => {
      setMessage(
        messages.map((message: messagesType) =>
          message.id === id ? { ...message, visible: false } : message,
        ),
      );
      setTimeout(
        () => setMessage(messages.filter((message: messagesType) => message.id !== id)),
        animationTime.current,
      );
    };

    const addMessage = (message: string) => {
      if (maxCount >= messages.length) setMessage([...messages.slice(1, maxCount)]);
      const id = messages.reduce(
        (acc: number, msg: messagesType) => (msg.id > acc ? msg.id + 1 : acc),
        0,
      );
      setMessage([...messages, { id, message, visible: true }]);
      setTimeout(() => removeMessage(id), removeTime.current);
    };

    return (
      <MessageContext.Provider value={{ addMessage, destroy }}>
        <Message messages={messages} {...props} />
        {children}
      </MessageContext.Provider>
    );
  },
);
