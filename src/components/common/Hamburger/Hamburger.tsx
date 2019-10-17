import * as React from 'react';

import { HamburgerBlock, HamburgerWrapper, Box, Inner } from './Hamburger.styles';

interface IProps {
  visible: boolean;
  dispatchToggleSidebar: (bool: boolean) => () => void;
}

const Hamburger: React.FunctionComponent<IProps> = React.memo(({ visible, dispatchToggleSidebar }) => (
  <HamburgerBlock onClick={dispatchToggleSidebar(!visible)}>
    <HamburgerWrapper active={visible}>
      <Box>
        <Inner />
      </Box>
    </HamburgerWrapper>
  </HamburgerBlock>
));

export default Hamburger;
