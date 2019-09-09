import * as React from 'react';
import ReactDOM from 'react-dom';

import { MessageBlock, MessageWrapBlock } from './Message.styles';

interface IProps {
  padding?: number;
  isBottom?: boolean;
  position?: 'left' | 'center' | 'right';
  zIndex?: number;
  margin?: number;
}
type contentType = { id: number; message: string; visible: boolean };
interface IState {
  messages: Array<contentType>;
}

class Message extends React.Component<IProps, IState> {
  static newInstance: ({ getContainer, ...props }: any, callback: any) => void = (
    { getContainer, ...props },
    callback,
  ) => {
    let called: boolean = false;
    const el: HTMLElement = getContainer
      ? getContainer()
      : (document.getElementById('message') as HTMLElement);
    const ref = (instance: React.Component) => {
      if (called) return;
      called = true;
      callback({
        destroy() {
          ReactDOM.unmountComponentAtNode(el);
        },
      });
    };
    ReactDOM.render(<Message {...props} ref={ref} />, el);
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      messages: [
        { id: 0, message: '소셜 로그인에 실패하였습니다.', visible: true },
        { id: 1, message: 'test', visible: true },
      ],
    };
  }

  removeMessage = (id: number) => {
    const { messages } = this.state;
    const invisibleMessages = messages.reduce(
      (acc: contentType[], cur: contentType) =>
        cur.id !== id ? [...acc, cur] : [...acc, { ...cur, visible: false }],
      [],
    );
    this.setState({
      messages: invisibleMessages,
    });
  };

  addMessage = (message: string) => {
    const { messages } = this.state;
    const maxIndex: number = messages.reduce(
      (acc: number, msg: contentType) => (msg.id > acc ? msg.id : acc),
      0,
    );
    const msg: contentType = { id: maxIndex + 1, visible: true, message };
    this.setState({
      messages: [...messages, msg],
    });
  };

  render() {
    const { position, zIndex, isBottom, margin } = this.props;
    const { messages } = this.state;
    return (
      <MessageBlock position={position} isBottom={isBottom} zIndex={zIndex}>
        {messages.map((content: contentType) => (
          <MessageWrapBlock margin={margin} visible={content.visible} key={content.id}>
            {content.message}
          </MessageWrapBlock>
        ))}
      </MessageBlock>
    );
  }
}

export default Message;
