import styled, { css } from 'styled-components';
import { zIndexes } from 'styles/utils';

export const OverlayBlock = styled.div<{ active: boolean; hideOverlay?: boolean }>`
  z-index: ${zIndexes.modal};
  display: ${props => (props.active ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => (props.hideOverlay ? `rgba(0,0,0,0)` : `rgba(0,0,0,.4)`)};
  overflow: auto;
`;

const fullScreenCss = css`
  flex: 1;
  height: 100vh;
  padding: 0;
  margin: 0;
  border-radius: 0;
`;

export const ModalBlock = styled.div<{ fullScreen?: boolean; backgroundColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  overflow: hidden;
  ${props => props.fullScreen && fullScreenCss}
`;
