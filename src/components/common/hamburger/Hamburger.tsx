import { memo } from 'react';

import { HamburgerWrapper } from './hamburger.styles';
import { theme } from 'styles';

const { colors } = theme;

interface Props {
  active: boolean;
  className?: string;
  color?: string;
  toggleHamburger: () => void;
}

function Hamburger({ active, className, color, toggleHamburger }: Props) {
  return (
    <HamburgerWrapper
      active={active}
      className={className}
      css={{ $$HAMBURGER_COLOR: color ?? colors.WHITE }}
      onClick={toggleHamburger}
    >
      <div className="box">
        <div className="line" />
      </div>
    </HamburgerWrapper>
  );
}

export default memo(Hamburger);
