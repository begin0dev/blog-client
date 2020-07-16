import * as React from 'react';

import { IMessageProps, messagesType } from './types';
import { MessageBlock, MessageWrapBlock } from './Message.styles';

const Message: React.FunctionComponent<IMessageProps> = React.memo(
  ({ messages, isBottom, position, zIndex, margin }) => {
    if (messages.length === 0) return null;
    return (
      <MessageBlock position={position} isBottom={isBottom} zIndex={zIndex}>
        {messages.map((content: messagesType) => (
          <MessageWrapBlock margin={margin} visible={content.visible} key={content.id}>
            {content.message}
          </MessageWrapBlock>
        ))}
      </MessageBlock>
    );
  },
);

export default Message;
