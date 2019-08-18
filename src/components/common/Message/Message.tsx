import * as React from 'react';

import { OverlayBlock } from './Message.styles';

interface IProps {
  visible?: boolean;
  onClick?: () => void;
}

const Message: React.FunctionComponent<IProps> = React.memo(({ visible, onClick }) => (
  <OverlayBlock visible={visible} onClick={onClick} />
));

export default Message;
