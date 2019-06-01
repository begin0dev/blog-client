import * as React from 'react';
import { HamburgerBlock, HamburgerWrapper, Box, Inner } from './Hamburger.styles';

interface IProps {
  visible: boolean;
  toggleSidebar: (bool: boolean) => void;
}

const Hamburger: React.FunctionComponent<IProps> = React.memo(({ visible, toggleSidebar }) => (
  <HamburgerBlock onClick={() => toggleSidebar(!visible)}>
    <HamburgerWrapper active={visible}>
      <Box>
        <Inner />
      </Box>
    </HamburgerWrapper>
  </HamburgerBlock>
));

export default Hamburger;
