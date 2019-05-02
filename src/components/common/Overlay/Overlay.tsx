import * as React from 'react';
import { OverlayBlock } from './Overlay.styles';

interface IProps {
  visible?: boolean;
}

const Overlay: React.FunctionComponent<IProps> = ({ visible }) => {
  return <OverlayBlock visible={visible} />;
};

export default React.memo(Overlay);
