import * as React from 'react';

import { Options } from './types';
import { MessageBlock, MessageWrapBlock } from './Message.styles';

const Message: React.FunctionComponent<Options> = ({ isBottom, position, zIndex, margin, duration = 1200 }) => {
  return (
    <MessageBlock position={position} isBottom={isBottom} zIndex={zIndex}>
      {/*{messages.map((content: contentType) => (*/}
      {/*  <MessageWrapBlock margin={margin} visible={content.visible} key={content.id}>*/}
      {/*    {content.message}*/}
      {/*  </MessageWrapBlock>*/}
      {/*))}*/}
    </MessageBlock>
  );
};

export default Message;
