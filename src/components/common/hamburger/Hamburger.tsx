import { memo } from 'react';

import { HamburgerWrapper } from './Hamburger.styles';
import { palette } from '../../../styles/palette';

interface IProps {
  width?: number;
  height?: number;
  spacing?: number;
  color?: string;
  active: boolean;
  toggleHamburger: () => void;
}

function Hamburger({
  width,
  height,
  spacing,
  color = palette.green9,
  active,
  toggleHamburger,
}: IProps) {
  return (
    <HamburgerWrapper
      width={`${width || 18}px`}
      height={`${height || 2}px`}
      spacing={`${spacing || 4}px`}
      color={color}
      active={active}
      onClick={toggleHamburger}
    >
      <span className="box">
        <span className="line" />
      </span>
    </HamburgerWrapper>
  );
}

export default memo(Hamburger);
