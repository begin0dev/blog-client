import * as React from 'react';
import { OverlayBlock } from './Overlay.styles';

interface IProps {
  visible?: boolean;
  onClick?: () => void;
}

const Overlay: React.FunctionComponent<IProps> = React.memo(({ visible, onClick }) => (
  <OverlayBlock visible={visible} onClick={onClick} />
));

export default Overlay;
