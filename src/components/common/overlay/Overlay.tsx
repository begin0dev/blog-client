import { memo } from 'react';

import { OverlayBlock } from './Overlay.styles';

interface IProps {
  visible: boolean;
  onClick: () => void;
}

function Overlay({ visible, onClick }: IProps) {
  return <OverlayBlock visible={visible} onClick={onClick} />;
}

export default memo(Overlay);
