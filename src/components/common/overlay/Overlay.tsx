import { OverlayWrapper } from './overlay.styles';

interface Props {
  onClick?: () => void;
}

function Overlay({ onClick }: Props) {
  return <OverlayWrapper onClick={onClick} />;
}

export default Overlay;
