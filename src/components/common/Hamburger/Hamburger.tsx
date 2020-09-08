import React, { memo } from 'react';

import { HamburgerBlock, HamburgerWrapper, Box, Inner } from './Hamburger.styles';

interface IProps {
  visible: boolean;
  dispatchToggleSidebar: (bool: boolean) => () => void;
}

function Hamburger({ visible, dispatchToggleSidebar }: IProps): JSX.Element {
  return (
    <HamburgerBlock onClick={dispatchToggleSidebar(!visible)}>
      <HamburgerWrapper active={visible}>
        <Box>
          <Inner />
        </Box>
      </HamburgerWrapper>
    </HamburgerBlock>
  );
}

export default memo(Hamburger);
