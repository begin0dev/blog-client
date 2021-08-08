import styled from 'styled-components/macro';

function Overlay() {
  return <OverlayBlock />;
}

export default Overlay;

const OverlayBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;
