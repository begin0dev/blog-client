import { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

import { CommonDrawer } from './drawer.styles';

interface Props {
  active: boolean;
  position: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
}

function Drawer({ active, position = 'bottom', children }: Props) {
  return (
    <CSSTransition in={active} timeout={300} classNames="drawer" unmountOnExit>
      <CommonDrawer position={position}>
        <div className="drawer">{children}</div>
      </CommonDrawer>
    </CSSTransition>
  );
}

export default Drawer;
