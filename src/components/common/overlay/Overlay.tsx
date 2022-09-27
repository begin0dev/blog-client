import styled from 'styled-components';

interface Props {
  onClick?: () => void;
}

function Overlay({ onClick }: Props) {
  return <OverlayBlock onClick={onClick} />;
}

export default Overlay;

const OverlayBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
