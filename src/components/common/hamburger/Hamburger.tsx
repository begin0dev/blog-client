import { memo } from 'react';

import { HamburgerWrapper } from './hamburger.styles';
import { theme } from 'styles';

const { colors } = theme;

interface Props {
  color?: string;
  active: boolean;
  toggleHamburger: () => void;
}

function Hamburger({ color, active, toggleHamburger }: Props) {
  return (
    <HamburgerWrapper
      css={{ $$HAMBURGER_COLOR: color ?? colors.WHITE }}
      active={active}
      onClick={toggleHamburger}
    >
      <div className="box">
        <div className="line" />
      </div>
    </HamburgerWrapper>
  );
}

export default memo(Hamburger);
