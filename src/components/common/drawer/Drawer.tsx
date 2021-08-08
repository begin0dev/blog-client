import { ReactNode } from 'react';
import styled, { css } from 'styled-components/macro';

import Transition, { TTransitionStatus } from '../../base/Transition';
import { zIndexes } from '../../../styles/utils';
import Overlay from '../overlay';

interface IProps {
  active: boolean;
  position: 'top' | 'bottom' | 'left' | 'right';
  hideOverlay?: boolean;
  children: ReactNode;
}

function Drawer({ active, hideOverlay, position = 'bottom', children }: IProps) {
  return (
    <Transition active={active} timeout={200}>
      {(status) => (
        <DrawerWrapper status={status}>
          {!hideOverlay && <Overlay />}
          <DrawerBlock active={active} position={position}>
            {children}
          </DrawerBlock>
        </DrawerWrapper>
      )}
    </Transition>
  );
}

export default Drawer;

const DrawerWrapper = styled.div<{ status: TTransitionStatus }>`
  z-index: ${zIndexes.MODAL};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  overflow: hidden;
  ${({ status }) => css`
    height: ${status === 'exited' ? 0 : '100%'};
    width: ${status === 'exited' ? 0 : '100%'};
  `}
`;
const DrawerBlock = styled.div<{
  active: boolean;
  position: IProps['position'];
}>`
  position: absolute;
  ${({ active, position }) => css`
    width: ${['top', 'bottom'].includes(position) ? '100%' : 'auto'};
    height: ${['left', 'right'].includes(position) ? '100%' : 'auto'};
    ${position}: ${active ? 0 : '-100%'};
    transition: ${position} 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
  `}
`;
