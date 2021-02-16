import styled from 'styled-components';

import { zIndexes } from 'styles/utils';
import { Palette } from 'styles/palette';

export const ProgressbarBlock = styled.div<{ percent: number; visible: boolean }>`
  z-index: ${zIndexes.progress};
  position: fixed;
  top: 0;
  width: ${({ percent }) => percent}%;
  height: ${({ visible }) => (visible ? '4px' : 0)};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: width 0.2s ease-in;
  background-color: ${Palette.green9};
`;
