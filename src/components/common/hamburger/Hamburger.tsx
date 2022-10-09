import { memo } from 'react';

import { HamburgerWrapper } from './hamburger.styles';

interface Props {
  active: boolean;
  toggleHamburger: () => void;
}

function Hamburger({ active, toggleHamburger }: Props) {
  return (
    <HamburgerWrapper active={active} onClick={toggleHamburger}>
      <div className="box">
        <div className="line" />
      </div>
    </HamburgerWrapper>
  );
}

export default memo(Hamburger);
