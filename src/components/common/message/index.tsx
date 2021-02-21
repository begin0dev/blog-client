import * as React from 'react';
import { createContext, useRef, useState, useCallback, memo } from 'react';

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
  ({ children, maxCount = 5, duration = 2400, ...props }) => {
    const messageId = useRef<number>(0);
    const removeTime = useRef<number>(duration);

    const [messages, setMessage] = useState<messagesType[]>([]);

    const removeMessage = useCallback((id: number) => {
      setMessage((prevState) => prevState.filter((message: messagesType) => message.id !== id));
    }, []);

    const addMessage = useCallback(
      (message: string) => {
        const id = messageId.current;
        setMessage((prevState) => [
          ...prevState.slice(maxCount === prevState.length ? 1 : 0, maxCount),
          { id, message, visible: true },
        ]);
        setTimeout(() => removeMessage(id), removeTime.current);
        messageId.current += 1;
      },
      [maxCount, removeMessage],
    );

    const destroy = useCallback(() => {
      setMessage([]);
    }, []);

    return (
      <MessageContext.Provider value={{ addMessage, destroy }}>
        {children}
        <Message messages={messages} {...props} />
      </MessageContext.Provider>
    );
  },
);
