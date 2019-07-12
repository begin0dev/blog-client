import * as React from 'react';
import { OverlayBlock } from './Overlay.styles';

interface IProps {
  visible?: boolean;
}

const Overlay: React.FunctionComponent<IProps> = React.memo(({ visible }) => <OverlayBlock visible={visible} />);

export default Overlay;
