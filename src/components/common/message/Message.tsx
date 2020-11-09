import * as React from 'react';
import { memo } from 'react';

import { IMessageProps, messagesType } from './types';
import { MessageBlock, MessageWrapBlock } from './Message.styles';

function Message({
  messages,
  isBottom,
  position,
  zIndex,
  margin,
}: IMessageProps): JSX.Element {
  return (
    <MessageBlock position={position} isBottom={isBottom} zIndex={zIndex}>
      {messages.map((content: messagesType) => (
        <MessageWrapBlock margin={margin} key={content.id}>
          {content.message}
        </MessageWrapBlock>
      ))}
    </MessageBlock>
  );
}
export default memo(Message);
