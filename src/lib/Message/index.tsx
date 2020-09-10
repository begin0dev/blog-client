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
    const messageId = useRef<number>(0);
    const removeTime = useRef<number>(duration);

    const [messages, setMessage] = useState<messagesType[]>([]);

    const destroy = useCallback(() => {
      setMessage([]);
    }, []);

    const removeMessage = (id: number) => {
      setMessage((prevState) => prevState.filter((message: messagesType) => message.id !== id));
    };

    const addMessage = (message: string) => {
      const id = messageId.current;
      setMessage((prevState) => [
        ...prevState.slice(maxCount === prevState.length ? 1 : 0, maxCount),
        { id, message, visible: true },
      ]);
      setTimeout(() => removeMessage(id), removeTime.current);
      messageId.current += 1;
    };

    return (
      <MessageContext.Provider value={{ addMessage, destroy }}>
        <Message messages={messages} {...props} />
        {children}
      </MessageContext.Provider>
    );
  },
);
