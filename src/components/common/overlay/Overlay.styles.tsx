import styled from 'styled-components';

import { zIndexes } from 'styles/utils';

export const OverlayBlock = styled.div<{ visible?: boolean }>`
  z-index: ${zIndexes.OVERLAY};
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(35, 35, 35, 0.66);
  will-change: opacity;
`;
