import styled from 'styled-components';
import { zIndexes } from '../../../styles/utils';

export const LoadingBlock = styled.div<{ visible?: boolean }>`
  z-index: ${zIndexes.overlay};
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(35,35,35,.66);
  will-change: opacity;
`;

export const LoadingWrap = styled.div`
  width: calc(100vw / 3);
  max-width: 400px;
`;
