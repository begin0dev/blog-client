import { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components/macro';

import { zIndexes } from 'styles';
import Overlay from '../overlay';

interface Props {
  active: boolean;
  position: 'top' | 'bottom' | 'left' | 'right';
  hideOverlay?: boolean;
  children: ReactNode;
}

function Drawer({ active, position = 'bottom', hideOverlay, children }: Props) {
  return (
    <CSSTransition in={active} timeout={200} classNames="drawer" unmountOnExit>
      <DrawerWrapper position={position}>
        {!hideOverlay && <Overlay />}
        <DrawerBlock className="drawerContent">{children}</DrawerBlock>
      </DrawerWrapper>
    </CSSTransition>
  );
}

export default Drawer;

const positionCssMapper = {
  top: css`
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-100%);
  `,
  bottom: css`
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(200%);
  `,
  left: css`
    top: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
  `,
  right: css`
    top: 0;
    bottom: 0;
    right: 0;
    transform: translateX(200%);
  `,
};

const DrawerWrapper = styled.div<{ position: Props['position'] }>`
  z-index: ${zIndexes.MODAL};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &.drawer-enter-done .drawerContent,
  &.drawer-exit .drawerContent {
    ${({ position }) => positionCssMapper[position]}
    transform: translate(0, 0);
  }
  &.drawer-enter .drawerContent,
  &.drawer-exit-active .drawerContent {
    ${({ position }) => positionCssMapper[position]}
  }
`;

const DrawerBlock = styled.div`
  position: absolute;
  transition: all 0.2s cubic-bezier(0.7, 0.3, 0.1, 1);
`;
