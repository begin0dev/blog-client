import { memo } from 'react';

import { CommonHamburger } from './hamburger.styles';

interface Props {
  active: boolean;
  toggleHamburger: () => void;
}

function Hamburger({ active, toggleHamburger }: Props) {
  return (
    <CommonHamburger active={active} onClick={toggleHamburger}>
      <div className="box">
        <div className="line" />
      </div>
    </CommonHamburger>
  );
}

export default memo(Hamburger);
