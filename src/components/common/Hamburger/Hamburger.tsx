import * as React from 'react';
import { HamburgerBlock, HamburgerWrapper, Box, Inner } from './Hamburger.styles';

interface IProps {
  visible: boolean;
  toggleSidebar: (bool: boolean) => void;
}

const Hamburger: React.FunctionComponent<IProps> = ({ visible, toggleSidebar }) => {
  return (
    <HamburgerBlock onClick={() => toggleSidebar(!visible)}>
      <HamburgerWrapper active={visible}>
        <Box>
          <Inner />
        </Box>
      </HamburgerWrapper>
    </HamburgerBlock>
  );
};

export default React.memo(Hamburger);
