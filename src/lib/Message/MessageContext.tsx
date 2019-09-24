import React from 'react';

import { messagesType } from './types';

interface MessageContextValue {
  messages: messagesType[];
  addMessage: () => void;
  destroy: () => void;
}

const MessageContext = React.createContext<MessageContextValue>({
  messages: [],
  addMessage: () => {},
  destroy: () => {},
});

export const MessageProvider: React.FunctionComponent = () => {
  return (
    <MessageContext.Provider value={{ messages: [], addMessage: () => {}, destroy: () => {} }}>
      test
    </MessageContext.Provider>
  );
};

export default MessageContext;
