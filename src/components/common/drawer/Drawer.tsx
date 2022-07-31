import { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components/macro';

import { zIndexes } from 'styles';

interface Props {
  active: boolean;
  position: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
}

function Drawer({ active, position = 'bottom', children }: Props) {
  return (
    <CSSTransition in={active} timeout={200} classNames="drawer" unmountOnExit>
      <DrawerWrapper position={position}>
        <DrawerBlock className="drawerContent">{children}</DrawerBlock>
      </DrawerWrapper>
    </CSSTransition>
  );
}

export default Drawer;

const cssMapper = {
  position: {
    top: css`
      top: 0;
      left: 0;
      right: 0;
    `,
    bottom: css`
      bottom: 0;
      left: 0;
      right: 0;
    `,
    left: css`
      top: 0;
      bottom: 0;
      left: 0;
    `,
    right: css`
      top: 0;
      bottom: 0;
      right: 0;
    `,
  },
  transform: {
    top: css`
      transform: translateY(-100%);
    `,
    bottom: css`
      transform: translateY(200%);
    `,
    left: css`
      transform: translateX(-100%);
    `,
    right: css`
      transform: translateX(200%);
    `,
  },
};

const DrawerWrapper = styled.div<{ position: Props['position'] }>`
  ${({ position }) => css`
    ${cssMapper.position[position]};
    z-index: ${zIndexes.MODAL};
    position: fixed;

    &.drawer-enter-done .drawerContent,
    &.drawer-exit .drawerContent {
      transform: translate(0, 0);
    }
    &.drawer-enter .drawerContent,
    &.drawer-exit-active .drawerContent {
      ${cssMapper.transform[position]};
    }
  `}
`;
const DrawerBlock = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.7, 0.3, 0.1, 1);
`;
